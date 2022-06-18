import chalk from 'chalk';
import express, { json } from 'express'
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

let usuarios = [];
let tweets = [];

function testaURL(urlAvatar) {
    var regexp =
    /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i;
    return regexp.test(urlAvatar);
}

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

app.get('/tweets', (req, res) => {
    let ultimosTweets = tweets.slice(-10);
    res.send(ultimosTweets.reverse());
})


app.listen(5000, () => {
    console.log(chalk.bold.yellow('Ola o servidor está funcionando!!!!'));
});

