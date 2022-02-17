const mongodb = require('mongodb').MongoClient;
const dotenv = require('dotenv');
dotenv.config();

//código da documentação do mongodb

const MONGO_DB_URL = process.env.MONGO_DB_URL;
const DB_NAME = 'to-do-db';

module.exports = () =>
  mongodb
    .connect(MONGO_DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((connection) => connection.db(DB_NAME))
    .catch((err) => {
      console.error(err);
      process.exit(1);
    });
