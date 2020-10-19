console.log('Hello World!')
console.log('Ola Mundo 1!')
console.log('Ola Mundo 2!')
console.log('Ola Mundo 3!')

const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);