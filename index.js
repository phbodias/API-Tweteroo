import chalk from 'chalk';
import express, { json } from 'express'
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

let usuarios = [];

app.post('/sign-up', (req, res) => {
    if (req.body.username !== "" && testaURL(req.body.avatar)) {
        usuarios = [
            ...usuarios,
            {
                username: req.body.username,
                avatar: req.body.avatar,
            }
        ];
        res.send("OK");
    }
});

app.listen(5000, () => {
    console.log(chalk.bold.yellow('Ola o servidor está funcionando!!!!'));
});

