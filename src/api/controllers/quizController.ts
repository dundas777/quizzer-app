import { Question } from '../../domain/types/question';
import { questionData } from '../data/questions';

export class QuizController {

    public getQuestions(subject?: string, numberOfQuestions?: number): Question[] {
        if (!subject) {
            throw new Error("A quiz subject must be specified - use 'all' to retrieve all questions");
        }
        if (!numberOfQuestions) {
            throw new Error("The number of questions requested must be specified");
        }
        const subjectQuestions = subject === 'all' ? questionData : questionData.filter(q => q.subject === subject);

        if (subjectQuestions.length === 0) {
            throw new Error(`No '${subject}' questions found`);
        }
        if (numberOfQuestions && numberOfQuestions > 0) {
            if (numberOfQuestions > subjectQuestions.length) {
                throw new Error(`Requested more questions than available for '${subject}' (${subjectQuestions.length})`);
            }
            if (numberOfQuestions === subjectQuestions.length) {
                return subjectQuestions;
            }

            const selectedQuestions: Question[] = [];
            const usedIndices = new Set();

            while (selectedQuestions.length < numberOfQuestions) {
                const randomIndex = Math.floor(Math.random() * subjectQuestions.length);
                if (!usedIndices.has(randomIndex)) {
                    usedIndices.add(randomIndex);
                    selectedQuestions.push(subjectQuestions[randomIndex]);
                }
            }

            return selectedQuestions;
        } else {
            return subjectQuestions;
        }
    }
 
    public getQuestion(id?: string): Question | undefined {
        if (!id) {
            throw new Error("A question ID must be specified");
        }
        const questionId = parseInt(id);
        if (isNaN(questionId) || questionId <= 0) {
            throw new Error("Invalid question ID");
        }
        return questionData.find(q => q.id === questionId);
    } 

    public getSubjects(): string[] {
        return Array.from(new Set(questionData.map(q => q.subject)));
    }

}