// src/question/question.controller.ts
import { Controller, Post, Body, Get } from '@nestjs/common';
import { QuestionService } from './questions.service';
import { CreateQuestionDto } from './dto/questions.dto';
import { Question } from './entity/questions.entity';

@Controller('question')
export class QuestionController {
    constructor(private readonly questionService: QuestionService) { }

    @Post()
    async create(@Body() createQuestionDto: CreateQuestionDto): Promise<Question> {
        return this.questionService.create(createQuestionDto);
    }

    @Get()
    async findAll(): Promise<Question[]> {
        return this.questionService.findAll();
    }
}
