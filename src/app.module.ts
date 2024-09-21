import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuizModule } from './modules/quiz/quiz.module';
import { TypeOrmConfig } from './config/typeorm.config';
import { QuestionService } from './modules/questions/questions.service';
import { QuestionsModule } from './modules/questions/questions.module';



@Module({
  imports: [TypeOrmConfig, QuizModule, QuestionsModule],
  controllers: [AppController],
  providers: [AppService, QuestionService],
})
export class AppModule { }
