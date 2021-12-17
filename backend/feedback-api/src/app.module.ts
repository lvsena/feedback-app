import { Module } from '@nestjs/common';
import { CompanyModule } from './company/company.module';
import { AvaliationModule } from './avaliation/avaliation.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    CompanyModule,
    AvaliationModule,
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
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
