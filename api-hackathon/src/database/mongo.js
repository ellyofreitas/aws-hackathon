const mongoose = require('mongoose');
  
const {
  databases: { mongo: host }
} = require('../config/awsconfig');

mongoose.connect(host, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.on('connected', () => console.log('Mongo connected!'));
mongoose.connection.on('error', err =>
  console.log('Erro na conexão com o banco de dados: ' + err)
);

module.exports = mongoose;
