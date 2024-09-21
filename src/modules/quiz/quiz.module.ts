import { Module } from '@nestjs/common';
import { QuizService } from './quiz.service';
import { QuizController } from './quiz.controller';
import { Quiz } from './entity/quiz.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Quiz])], // This line is important
  providers: [QuizService],
  controllers: [QuizController]
})
export class QuizModule { }
