import { Module } from '@nestjs/common';
import { CompanyModule } from './company/company.module';
import { AvaliationModule } from './avaliation/avaliation.module';
import { TypeOrmModule } from '@nestjs/typeorm';

// Modules
import { UserModule } from './user/user.module';
import { QuizModule } from './quiz/quiz.module';
import { AnswerModule } from './answer/answer.module';
import { AlternativeModule } from './alternative/alternative.module';
import { CategoryModule } from './category/category.module';
import { QuestionModule } from './question/question.module';
import { ValuesModule } from './values/values.module';

//Entities
import { Alternative } from './alternative/entities/alternative.entity';
import { Answer } from './answer/entities/answer.entity';
import { Avaliation } from './avaliation/entities/avaliation.entity';
import { Category } from './category/entities/category.entity';
import { Company } from './company/entities/company.entity';
import { Question } from './question/entities/question.entity';
import { Quiz } from './quiz/entities/quiz.entity';
import { User } from './user/entities/user.entity';
import { Value } from './values/entities/value.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'kesavan.db.elephantsql.com',
      port: 5432,
      username: 'qhiutjcw',
      password: 'iKGCzYqBKAHOVbaaKS4I0U4wsJ6OjOFP',
      database: 'qhiutjcw',
      entities: [
        Alternative,
        Answer,
        Avaliation,
        Category,
        Company,
        Question,
        Quiz,
        User,
        Value,
      ],
      synchronize: true,
    }),
    UserModule,
    CompanyModule,
    AvaliationModule,
    QuizModule,
    AnswerModule,
    AlternativeModule,
    CategoryModule,
    QuestionModule,
    ValuesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
