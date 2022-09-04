// const bodyparser = require('body-parser');
require('dotenv').config();
require('../database');
const createServer = require('./server');
const app = createServer();

app.listen(process.env.APP_PORT, () => console.log(`Server up and listening at port ${process.env.APP_PORT}...`));