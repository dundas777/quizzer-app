# Quizzer - Multiple Choice Quiz Application

## Overview
Quizzer is a multiple choice quiz application built using TypeScript and Express. The application allows users to select a quiz category and answer a series of questions while keeping track of their score. The available categories include Geography, History, and Science, each containing 10 questions.

## Project Structure
```
quizzer
├── src
│   ├── app.ts
│   ├── api
│   │   └── questions.ts
│   ├── controllers
│   │   └── quizController.ts
│   ├── routes
│   │   └── quizRoutes.ts
│   ├── types
│   │   └── index.ts
│   └── frontend
│       ├── index.html
│       ├── main.ts
│       └── styles.css
├── package.json
├── tsconfig.json
└── README.md
```

## Features
- Select a quiz category (Geography, History, Science).
- Answer 10 multiple choice questions per category.
- Keep track of the user's score throughout the quiz.
- Display the final score at the end of the quiz.

## Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd quizzer
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Running the Application
1. Start the server:
   ```
   npm start
   ```
2. Open your browser and navigate to `http://localhost:3000` to access the quiz application.

## API Endpoints
- `GET /api/questions`: Retrieve quiz questions categorized by Geography, History, and Science.

## Technologies Used
- TypeScript
- Express
- HTML/CSS
- JavaScript

## Contributing
Contributions are welcome! Please feel free to submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the MIT License.