const express = require('express');
const app = express();
const server = require('http').Server(app);
const port = process.env.PORT || 3000;
const io = require('socket.io')(server);
const fs = require('fs');
const cache = require('./database/redis');
const mongo = require('./database/mongo');
// const morgan = require('morgan');

const comprehend = require('./controllers/sockets/ComprehendController');

const path = require('path');

io.on('connection', async socket => {
  const { type } = socket.handshake.query;
  console.log(`${socket.id} logged how ${type}`);
  if (type === 'lambda') {
    // socket.on('done-trascribe', data => console.log(data));
    socket.on('done-comprehend', data => comprehend.update(data, io));
  } else {
    cache.setAsync('client', socket.id);
  }

  const sockets = JSON.parse(
    fs.readFileSync(path.resolve(__dirname, 'teste.json')).toString()
  );
  sockets.sockets.push(socket.id);
  fs.writeFileSync(
    path.resolve(__dirname, 'teste.json'),
    JSON.stringify(sockets)
  );

  // const { type } = socket.handshake.query;
  // if (type === 'client') {
  //   console.log(`Client connected ${socket.id}`);
  //   cache.set('client', socket.id);
  // } else if (type === 'lambda') {
  //   console.log(`Lambda connected ${socket.id}`);
  //   const { jobName } = socket.handshake.query;
  //   cache.get('client', (e, data) => {
  //     if (e) return console.log(e);
  //     io.to(data).emit('job-completed', jobName);
  //   });
  // }
});

app.use(require('cors')());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(morgan('dev'));

app.use((req, res, next) => {
  req.io = io;
  return next();
});

app.get('/', (req, res) => {
  const data = JSON.parse(
    fs.readFileSync(path.resolve(__dirname, 'teste.json')).toString()
  );
  return res.json({ server: 'online', data });
});

app.use(require('./routes'));
// app.use('/', express.static('public'));

server.listen(port, () => console.log(`Server listen in :${port}`));
