const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hi My name is Mayur Jagtap and i am deploying first AWS ElasticbeanStalk Cloud Projecton EC2!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
