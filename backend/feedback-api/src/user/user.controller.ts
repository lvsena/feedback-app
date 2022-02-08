import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { AnswerQuizDto } from './dto/answer-quiz.dto';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiBody({ type: CreateUserDto })
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }

  @Get(':id/avaliations')
  getAvaliations(@Param('id') id: string) {
    return this.userService.getPendingAvaliations(+id);
  }

  @Get(':id/avaliations/:avaliationId/quizes')
  getQuizes(
    @Param('id') id: string,
    @Param('avaliationId') avaliationId: string,
  ) {
    return this.userService.getPendingQuizes(+id, +avaliationId);
  }

  @Get(':id/avaliations/:avaliationId/quizes/:quizId/questions')
  getQuestions(
    @Param('id') id: string,
    @Param('avaliationId') avaliationId: string,
    @Param('quizId') quizId: string,
  ) {
    return this.userService.getQuestions(+id, +avaliationId, +quizId);
  }

  @ApiBody({
    isArray: true,
    type: AnswerQuizDto,
  })
  @Patch(':id/avaliations/:avaliationId/quizes/:quizId/answers')
  postAnswers(
    @Param('id') id: string,
    @Param('avaliationId') avaliationId: string,
    @Param('quizId') quizId: string,
    @Body() answers: AnswerQuizDto[],
  ) {
    return this.userService.patchAnswers(+id, +avaliationId, +quizId, answers);
  }
}
