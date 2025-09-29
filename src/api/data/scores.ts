import { Score } from '../../domain/types/score';

export const scoreData: Score[] = [
    {
        email: "john.smith@test.com",
        dateOfScore: new Date("2025-09-20 10:30:47"),
        category: "history",
        numberOfQuestions: 3,
        score: 2
    },
    {
        email: "john.smith@test.com",
        dateOfScore: new Date("2025-09-10 11:15:11"),
        category: "geography",
        numberOfQuestions: 10,
        score: 8
    },
    {
        email: "alice.johnson@test.com",
        dateOfScore: new Date("2025-09-17 11:45:15"),
        category: "science",
        numberOfQuestions: 5,
        score: 5
    }
];
