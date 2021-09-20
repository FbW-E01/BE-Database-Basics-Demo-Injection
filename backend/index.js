import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.use((req,res)=>{
    const { user, pass } = req.body;
    const query = `SELECT * FROM users where username='${user}' AND password='${pass}';`
    console.log(query);

    res.end(query);
})

app.listen(3000);