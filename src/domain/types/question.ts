export interface Question {
    id: number;
    subject: string;
    question: string;
    answers: string[];
    correctAnswerIdx: number;
}
