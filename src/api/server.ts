const express = require('express');
import cors from 'cors';
import type { Request, Response } from 'express';
import { QuestionController } from './controllers/questionController';
import { UserController } from './controllers/userController';
import { ScoreController } from './controllers/scoreController';

const app = express();
const PORT = 5000;

// Middleware to parse JSON
app.use(cors());
app.use(express.json());

// e.g. http://localhost:5000/api/hello
app.get('/api/hello', (req: Request, res: Response) => {
  res.json({ message: 'Hello from the Quizzer API!' });
});

// ------------------------------------
//              Questions
// ------------------------------------

// e.g. http://localhost:5000/api/questions?subject=science&numberOfQuestions=5
app.get('/api/questions', (req: Request, res: Response) => {
  const questionController = new QuestionController();
  res.json(questionController.getQuestions(req.query.subject as string | undefined,
                      req.query.numberOfQuestions ? parseInt(req.query.numberOfQuestions as string) : -1));
});

// e.g. http://localhost:5000/api/questions/3
app.get('/api/questions/:id', (req: Request, res: Response) => {
  const questionController = new QuestionController();
  const { id } = req.params; // id is a string | undefined
  console.log('id param:', id);
  const questionId = parseInt(id, 10);
  res.json(questionController.getQuestion(questionId));
});

// e.g. http://localhost:5000/api/questions
app.put('/api/questions', (req: Request, res: Response) => {
  const questionController = new QuestionController();
  res.json(questionController.updateQuestion(req.body));
});

// e.g. http://localhost:5000/api/questions
app.post('/api/questions', (req: Request, res: Response) => {
  const questionController = new QuestionController();
  res.json(questionController.addQuestion(req.body));
});

// e.g. http://localhost:5000/api/questions
app.delete('/api/questions', (req: Request, res: Response) => {
  const questionController = new QuestionController();
  res.json(questionController.deleteQuestion(req.body.id));
});

// e.g. http://localhost:5000/api/subjects
app.get('/api/subjects', (req: Request, res: Response) => {
  const questionController = new QuestionController();
  res.json(questionController.getSubjects());
});


// ------------------------------------
//              Users
// ------------------------------------

app.post('/api/login', (req: Request, res: Response) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required.' });
  }

  const userController = new UserController();
  const users = userController.login(email, password);
  if (!users || users.length === 0) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  res.json(users[0]);
});

// e.g. http://localhost:5000/api/users/john.smith@test.com
app.get('/api/users/:email', (req: Request, res: Response) => {
  const { email } = req.params;
  if (!email) {
    return res.status(400).json({ error: 'Email is required.' });
  }

  const userController = new UserController();
  const user = userController.getUser(email);
  if (!user) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  res.json(user);
});

// e.g. http://localhost:5000/api/users
app.get('/api/users', (req: Request, res: Response) => {
  const userController = new UserController();
  const users = userController.getUsers();
  res.json(users);
});

// add user from registration
app.post('/api/users', (req: Request, res: Response) => {
  const userController = new UserController();
  const user = req.body;
  if (!user || !user.email || !user.password) {
    return res.status(400).json({ error: 'Invalid user post data.' });
  } 
  userController.addUser(user);
  res.status(201).json({ message: 'User added successfully.' }); 
});

// update user details
app.put('/api/users/:email', (req: Request, res: Response) => {
  const userController = new UserController();
  const user = req.body;

  if (!user || !user.email || !user.password) {
    return res.status(400).json({ error: 'Invalid user data attempting to update user details.' });
  }

  userController.updateUser(user);
  res.status(200).json({ message: 'User updated successfully.' });
});

app.delete('/api/users', (req: Request, res: Response) => {
  const userController = new UserController();
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email is required.' });
  }

  userController.deleteUser(email);
  res.status(200).json({ message: 'User deleted successfully.' });
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