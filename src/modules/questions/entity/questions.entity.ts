// src/question/entities/question.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Quiz } from 'src/modules/quiz/entity/quiz.entity';

@Entity('questions')
export class Question {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    content: string;

    @ManyToOne(() => Quiz, (quiz) => quiz.questions, { onDelete: 'CASCADE' })
    quiz: Quiz; // Link to the Quiz entity
}
