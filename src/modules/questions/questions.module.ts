import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Question } from './entity/questions.entity';
import { Quiz } from '../quiz/entity/quiz.entity';
import { QuestionService } from './questions.service';
import { QuestionController } from './questions.controller';


@Module({
  imports: [TypeOrmModule.forFeature([Question, Quiz])],
  providers: [QuestionService],
  controllers: [QuestionController],
})
export class QuestionsModule { }
