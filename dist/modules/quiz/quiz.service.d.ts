import { CreateQuizDto } from './dto/createQuiz.dto';
import { Repository } from 'typeorm';
import { Quiz } from './entity/quiz.entity';
export declare class QuizService {
    private quizRepository;
    constructor(quizRepository: Repository<Quiz>);
    create(createQuizDto: CreateQuizDto): Promise<Quiz>;
    findAll(): Promise<Quiz[]>;
}
