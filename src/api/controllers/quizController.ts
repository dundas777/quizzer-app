import { Question } from '../../domain/types/question';
import { questionData } from '../data/questions';

export class QuizController {

    public getQuestionsForCategory(category: string): Question[] {
        return questionData.filter(q => q.category === category);
    }

    public getCategories(): string[] {
        return Array.from(new Set(questionData.map(q => q.category)));
    }

    public getQuestions(): Question[] {
        return questionData;
    }

}