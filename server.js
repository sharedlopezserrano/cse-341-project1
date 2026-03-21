require('dotenv').config();
const express = require('express');
const mongodb = require('./data/database');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/', require('./routes/index'));
app.use('/contacts', require('./routes/contacts'));
app.use('/api-docs', require('./routes/swagger'));
app.use(cors());

mongodb.initDb((err) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  }
});
