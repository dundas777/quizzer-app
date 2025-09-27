const express = require('express');
import cors from 'cors';
import type { Request, Response } from 'express';
import { QuizController } from './controllers/quizController';
import { UserController } from './controllers/userController';
import { ScoreController } from './controllers/scoreController';

const app = express();
const PORT = 5000;

// Middleware to parse JSON
app.use(cors());
app.use(express.json());

// e.g. http://localhost:5000/api/hello
app.get('/api/hello', (req: Request, res: Response) => {
  res.json({ message: 'Hello from Express API!' });
});

// ------------------------------------
//              Questions
// ------------------------------------

// e.g. http://localhost:5000/api/questions
app.get('/api/questions', (req: Request, res: Response) => {
  const quizController = new QuizController();
  res.json(quizController.getQuestions());
});

// e.g. http://localhost:5000/api/questions/science
app.get('/api/questions/:category', (req: Request<{ category: string }>, res: Response) => {
  const quizController = new QuizController();
  res.json(quizController.getQuestionsForCategory(req.params.category));
});

// ------------------------------------
//              Users
// ------------------------------------

// e.g. http://localhost:5000/api/user?email=john.smith@test.com&password=Password123!
app.get('/api/users', (req: Request, res: Response) => {
  const { email, password } = req.query;
  const userController = new UserController();
  if (email === 'all') {
    return res.json(userController.getUsers());
  }
  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required.' });
  }
  const users = userController.getUser(email as string, password as string);
  if (users.length === 0) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  res.json(users[0]);
});

// add user from registration
app.post('/api/users', (req: Request, res: Response) => {
  const userController = new UserController();
  const user = req.body;
  if (!user || !user.email || !user.password) {
    return res.status(400).json({ error: 'Invalid user data.' });
  } 
  userController.addUser(user);
  res.status(201).json({ message: 'User added successfully.' }); 
});

// ------------------------------------
//              Scores
// ------------------------------------

// e.g. http://localhost:5000/api/scores?email=john.smith@test.com
app.get('/api/scores', (req: Request, res: Response) => {
  const { email } = req.query;
  if (!email) {
    return res.status(400).json({ error: 'Email is required.' });
  }
  const scoreController = new ScoreController();
  const scores = scoreController.getScores(email as string);
  res.json(scores);
});

// add score
app.post('/api/scores', (req: Request, res: Response) => {
  const score = req.body;
  if (!score || !score.email) {
    return res.status(400).json({ error: 'Invalid score data.' });
  } 
  const scoreController = new ScoreController();
  scoreController.addScore(score);
  res.status(201).json({ message: 'Score added successfully.' }); 
});

// ------------------------------------
//         Start the server
// ------------------------------------

app.listen(PORT, () => {
  console.log(`API server running at http://localhost:${PORT}`);
});