import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static('src/frontend'));

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});