const express = require('express');
const router = require('./routes');
const path = require('path');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/rout', router);
app.use('/', express.static(path.join(__dirname, 'public')));


app.listen(3000, () => console.log('Express started'));