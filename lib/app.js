const express = require('express');
const app = express();
const morgan = require('morgan');
// require('./models/register-plugins');

const team = require('./routes/team');

app.use(express.json());
app.use(morgan('dev'));

app.use(express.static('public'));

app.use('/api/team', team);

app.use((req, res) => {
    res.sendFile('index.html', { root: 'public' });
});


module.exports = app;