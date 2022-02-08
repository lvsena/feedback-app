import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Alternative } from 'src/alternative/entities/alternative.entity';
import { Answer } from 'src/answer/entities/answer.entity';
import { Avaliation } from 'src/avaliation/entities/avaliation.entity';
import { Question } from 'src/question/entities/question.entity';
import { Quiz, QuizStatus } from 'src/quiz/entities/quiz.entity';
import { Connection, Not, Raw, Repository } from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';
import { AnswerQuizDto } from './dto/answer-quiz.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    @InjectRepository(Avaliation)
    private avaliationRepository: Repository<Avaliation>,
    @InjectRepository(Quiz)
    private quizRepository: Repository<Quiz>,
    @InjectRepository(Answer)
    private answerRepository: Repository<Answer>,
    @InjectRepository(Question)
    private questionRepository: Repository<Question>,
    @InjectRepository(Alternative)
    private alternativeRepository: Repository<Alternative>,
    private connection: Connection,
  ) {}

  create(createUserDto: CreateUserDto) {
    return this.usersRepository.save(createUserDto);
  }

  findAll() {
    return this.usersRepository.find();
  }

  findOne(id: number) {
    return this.usersRepository.findOneOrFail(id);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.usersRepository.update(id, updateUserDto);
  }

  remove(id: number) {
    return this.usersRepository.delete(id);
  }

  async getPendingAvaliations(id: number) {
    const user = await this.usersRepository.findOneOrFail(id, {
      relations: ['company'],
    });
    const avaliations = await this.avaliationRepository.find({
      where: {
        company: user.company,
        startDate: Raw((startDate) => `${startDate} <= NOW()`),
        endDate: Raw((endDate) => `${endDate} >= NOW()`),
      },
      relations: ['quizes', 'quizes.evaluator'],
    });

    const pendingAvaliations = avaliations.filter(
      (x) =>
        x.quizes.filter(
          (q) => q.evaluator.id === user.id && q.status !== QuizStatus.FINISHED,
        ).length > 0,
    );

    pendingAvaliations.map((x) => delete x.quizes);
    return pendingAvaliations;
  }

  async getPendingQuizes(userId: number, avaliationId: number) {
    const user = await this.usersRepository.findOneOrFail(userId);
    const avaliation = await this.avaliationRepository.findOneOrFail(
      avaliationId,
    );

    return this.quizRepository.find({
      relations: ['evaluator', 'evaluated'],
      where: {
        avaliation: avaliation,
        evaluator: user,
        status: Not(QuizStatus.FINISHED),
      },
    });
  }

  async getQuestions(userId: number, avaliationId: number, quizId: number) {
    const questions = await this.questionRepository.find({
      where: {
        avaliation: {
          id: avaliationId,
        },
      },
      relations: ['value', 'category', 'category.alternatives'],
    });

    for (const question of questions) {
      question.answers = await this.answerRepository.find({
        where: {
          question,
          quiz: {
            id: quizId,
          },
        },
        relations: ['alternative'],
      });
    }

    return questions;
  }

  async patchAnswers(
    id: number,
    avaliationId: number,
    quizId: number,
    answers: AnswerQuizDto[],
  ) {
    const queryRunner = this.connection.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      for (const answer of answers) {
        const alternative = await this.alternativeRepository.findOneOrFail(
          answer.alterativeId,
        );

        const question = await this.questionRepository.findOneOrFail(
          answer.questionId,
        );

        const quiz = await this.quizRepository.findOneOrFail(quizId);

        const ans: Partial<Answer> = {
          alternative,
          comment: answer.comments,
          question,
          quiz,
        };

        const savedAnswer = await this.answerRepository.findOne({
          where: {
            question: ans.question,
            quiz: ans.quiz,
          },
        });

        if (savedAnswer) {
          await queryRunner.manager.update(Answer, savedAnswer.id, ans);
        } else {
          await queryRunner.manager.save(Answer, ans);
        }
      }

      await queryRunner.commitTransaction();

      return null;
    } catch (err) {
      await queryRunner.rollbackTransaction();
      throw err;
    } finally {
      await queryRunner.release();
    }
  }
}
