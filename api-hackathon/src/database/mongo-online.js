const mongoose = require('mongoose'),
  f = require('util').format,
  fs = require('fs');
const path = require('path');
const ca = [
  fs.readFileSync(path.resolve(__dirname, 'rds-combined-ca-bundle.pem'))
];

const {
  databases: { mongo: host }
} = require('../config/awsconfig');
console.log(`mongo_host: ${host}`);

mongoose.connect(host, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  sslValidate: true,
  sslCA: ca
});

mongoose.connection.on('connected', () => console.log('Mongo connected!'));
mongoose.connection.on('error', err =>
  console.log('Erro na conexão com o banco de dados: ' + err)
);

module.exports = mongoose;
