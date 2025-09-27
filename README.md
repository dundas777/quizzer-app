# Quizzer - Multiple Choice Quiz Application

## Overview
Quizzer is a multiple choice quiz application built using TypeScript and Express. The application allows users to select a quiz category and answer a series of questions while keeping track of their score. The available categories include Geography, History and Science.

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
- Answer multiple choice questions per category.
- Keep track of the user's score throughout the quiz.
- Display the final score at the end of the quiz.

## Installation
1. Clone the repository:
   ```
   git clone https://github.com/dundas777/quizzer-app.git
   ```
2. Navigate to the project directory:
   ```
   cd quizzer-app
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Running the Application
The app contains a front end web ap pon port 3000, and a separate back end (API) on port 5000.
1. Start the server:
   ```
   npm start
   ```
2. Open your browser and navigate to `http://localhost:3000` to access the quiz application.

3. To check the backend API is running try a GET request on port 5000:
   ```
   http://localhost:5000/api/hello
   ```

## API Endpoints
- `GET /api/questions/{category}`: Retrieve quiz questions categorized by Geography, History, and Science.
- `GET /api/users?email={useremail}&password={password}`: Retrieve user details
- `POST /api/users`: Register new user (details in request body)
- `GET /api/scores`: Get user's scores (user email in request body)
- `POST /api/scores`: Store user's score (score details in request body)

## Technologies Used
- TypeScript
- Express
- HTML/CSS
- JavaScript
- API

## Contributing
Contributions are welcome! Please feel free to submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the MIT License.