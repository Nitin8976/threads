// src/quiz/entities/quiz.entity.ts

import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Question } from 'src/modules/questions/entity/questions.entity';

@Entity('quiz')
export class Quiz {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    title: string;

    @Column()
    description: string;

    @OneToMany(() => Question, (question) => question.quiz, { cascade: true })
    questions: Question[];
}
