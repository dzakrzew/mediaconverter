const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send({status: 'OK'});
});

app.get('*', (req, res) => {
    res.send({status: 'ERROR', 'message': 'Route not found'});
});

app.listen(3000, () => {
    console.log('Listening started at port 3000');
});