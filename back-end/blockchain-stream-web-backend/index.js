const express = require('express');
const https = require('https');
const { Server } = require('socket.io');
const dotenv = require('dotenv');
const app = express();
const routes = require('./routes/routes');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const fs = require('fs');

// This line is from the Node.js HTTPS documentation.
const options = {
  cert: fs.readFileSync('/etc/letsencrypt/live/nt208-g4.site/fullchain.pem'),
  key: fs.readFileSync('/etc/letsencrypt/live/nt208-g4.site/privkey.pem')
};

dotenv.config();
const port = process.env.APP_PORT || 3000;

app.use(cookieParser());
dotenv.config();
app.use(
  cors({
    credentials: true,
    origin: true,
    credentials: true,
  })
);
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.use('/v1/api', routes);

const httpServer = https.createServer(options, app).listen(port, () => {
  console.log("Server listen at port " + port)
});

const io = new Server(httpServer);
global.io = io;
