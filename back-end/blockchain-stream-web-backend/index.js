const express = require('express');
const dotenv = require('dotenv');
const app = express();
const routes = require('./routes/routes');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');

dotenv.config();
const port = process.env.APP_PORT || 3000;

app.use(cookieParser());
dotenv.config();
app.use(
  cors({
    credentials: true,
    origin: 'http://localhost:3000',
  })
);
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.use('/v1/api', routes);

app.listen(port, () => {
  console.log(`Server app listening on port ${port}`);
});
