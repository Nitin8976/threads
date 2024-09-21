import { Injectable } from '@nestjs/common';
import { CreateQuizDto } from './dto/createQuiz.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Quiz } from './entity/quiz.entity';

@Injectable()
export class QuizService {
    constructor(
        @InjectRepository(Quiz)
        private quizRepository: Repository<Quiz>,
    ) { }

    async create(createQuizDto: CreateQuizDto): Promise<Quiz> {
        const newQuiz = this.quizRepository.create(createQuizDto);
        return this.quizRepository.save(newQuiz);
    }

    async findAll(): Promise<Quiz[]> {
        return this.quizRepository.find();
    }
}
