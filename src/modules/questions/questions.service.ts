// src/question/question.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Question } from './entity/questions.entity';
import { CreateQuestionDto } from './dto/questions.dto';
import { Quiz } from '../quiz/entity/quiz.entity';

@Injectable()
export class QuestionService {
    constructor(
        @InjectRepository(Question)
        private questionRepository: Repository<Question>,
        @InjectRepository(Quiz)
        private quizRepository: Repository<Quiz>,
    ) { }

    async create(createQuestionDto: CreateQuestionDto): Promise<Question> {
        const quiz = await this.quizRepository.findOneBy({ id: createQuestionDto.quizId });
        if (!quiz) {
            throw new Error('Quiz not found');
        }

        const newQuestion = this.questionRepository.create({
            content: createQuestionDto.content,
            quiz, // Assign the quiz
        });
        return this.questionRepository.save(newQuestion);
    }

    async findAll(): Promise<Question[]> {
        return this.questionRepository.find({ relations: ['quiz'] });
    }
}
