// src/question/dto/create-question.dto.ts
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateQuestionDto {
    @IsNotEmpty()
    @IsString()
    content: string;

    @IsNotEmpty()
    quizId: string; // To link the question to a specific quiz
}
