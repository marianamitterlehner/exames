import express from 'express';
import './database';
import "reflect-metadata";

const app = express();
app.use(express.json());


app.get('/', (request, response) => {
    return response.json('Hello world')
});

app.listen(3333, () =>{
    console.log('Servidor Rodando');
});
