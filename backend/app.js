const express = require('express');
const cors = require('cors');
require('dotenv').config();

const todoRoute = require('./routes/router');
const { errorMiddleware } = require('./middlewares/errorHandler');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use('/', todoRoute);
app.use(errorMiddleware);

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
