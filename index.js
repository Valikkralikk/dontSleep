const express = require('express');
const cronjob = require('node-cron');
const axios = require('axios');

cronjob.schedule('*/10 * * * *', async () => {
    const response = await axios('https://amway-price-bot.onrender.com/');
    console.log(response.data);
});

const app = express()
const port = 3000

app.get('/', (req, res) => res.send('I am not sleep too)'))
app.listen(port, () => console.log(`Server started on port ${port}!`))