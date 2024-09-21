import { Body, Controller, Get, Post } from '@nestjs/common';
import { QuizService } from './quiz.service';
import { CreateQuizDto } from './dto/createQuiz.dto';
import { Quiz } from './entity/quiz.entity';

@Controller('quiz')
export class QuizController {
    constructor(public quizService: QuizService) { }

    @Get("/")
    getAllQuiz() {
        return this.quizService.findAll()
    }

    @Post('/')
    async create(@Body() createQuizDto: CreateQuizDto): Promise<Quiz> {
        return this.quizService.create(createQuizDto);
    }
}

