/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
/* eslint-disable no-shadow */
/* eslint-disable no-console */
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dbConfig = require('./app/config/db.config');

const app = express();

const corsOptions = {
  origin: 'http://localhost:8081',
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const db = require('./app/models');

const Role = db.role;

const path = 'mongodb+srv://TeamProjAdmin:teamproject308@cluster0.3xlma.mongodb.net/TeamProj?retryWrites=true&w=majority&tls=true&tlsAllowInvalidCertificates=true'

db.mongoose
  .connect(path, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Successfully connect to MongoDB.');
    initial();
  })
  .catch((err) => {
    console.error('Connection error', err);
    process.exit();
  });

// simple route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the authentication application.' });
});

// routes
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

function initial() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: 'user',
      }).save((err) => {
        if (err) {
          console.log('error', err);
        }

        console.log("added 'user' to roles collection");
      });

      new Role({
        name: 'moderator',
      }).save((err) => {
        if (err) {
          console.log('error', err);
        }

        console.log("added 'moderator' to roles collection");
      });

      new Role({
        name: 'admin',
      }).save((err) => {
        if (err) {
          console.log('error', err);
        }

        console.log("added 'admin' to roles collection");
      });
    }
  });
}
