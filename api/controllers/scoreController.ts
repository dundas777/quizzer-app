import { scoreData } from '../data/scores';
import { Score } from '../../domain/types/score';

export class ScoreController {

    public getScores(email: string): Score[] {
        if (email === 'all') {
            return scoreData;
        }
        return scoreData.filter(q => q.email === email);
    }

    public addScore(score: Score): void {
        scoreData.push(score);
    }

};
