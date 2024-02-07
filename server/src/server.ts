import express, { Request, Response } from 'express';
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());
app.use(express.static('build'));

app.get('/api/test', (req: Request, res: Response) => {
    console.log('Test route called /api');
    res.send({ message: 'Test route functional /api/test' })
});

app.listen(PORT, () => {
    console.log('Listening on port: ', PORT);
});