const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require('./routes/index');


const connectionString ="mongodb://localhost:27017/HIREWEELS";

mongoose
  .connect(connectionString)
  .then((res) => console.log("Connected to db successfully"))
  .catch((ex) => console.log(ex));

const app = express();

const corsOptions = {
  exposedHeaders: ["x-auth-header", "Authorization"],
};

app.use(cors(corsOptions));

app.use(cors());
app.use(express.json());

app.use('/', routes);



app.listen(3001, () => console.log("Listening on port 3001....."));