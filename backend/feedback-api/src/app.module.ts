import { Module } from '@nestjs/common';
import { CompanyModule } from './company/company.module';
import { AvaliationModule } from './avaliation/avaliation.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { QuizModule } from './quiz/quiz.module';
import { AnswerModule } from './answer/answer.module';
import { AlternativeModule } from './alternative/alternative.module';
import { CategoryModule } from './category/category.module';
import { QuestionsModule } from './questions/questions.module';
import { ValuesModule } from './values/values.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'kesavan.db.elephantsql.com',
      port: 5432,
      username: 'qhiutjcw',
      password: 'iKGCzYqBKAHOVbaaKS4I0U4wsJ6OjOFP',
      database: 'qhiutjcw',
      entities: [],
      synchronize: true,
    }),
    UserModule,
    CompanyModule,
    AvaliationModule,
    QuizModule,
    AnswerModule,
    AlternativeModule,
    CategoryModule,
    QuestionsModule,
    ValuesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
