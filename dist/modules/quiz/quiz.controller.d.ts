import { QuizService } from './quiz.service';
import { CreateQuizDto } from './dto/createQuiz.dto';
import { Quiz } from './entity/quiz.entity';
export declare class QuizController {
    quizService: QuizService;
    constructor(quizService: QuizService);
    getAllQuiz(): Promise<Quiz[]>;
    create(createQuizDto: CreateQuizDto): Promise<Quiz>;
}
