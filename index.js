import chalk from 'chalk';
import express, { json } from 'express'
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

app.listen(5000, () => {
    console.log(chalk.bold.yellow('Ola o servidor está funcionando!!!!'));
});

