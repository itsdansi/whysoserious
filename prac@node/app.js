const express = require("express");
const app = express();

const userRoutes = require("./routes/userRoutes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require('dotenv').config();
app.use(require('morgan')('dev'));
let port = process.env.PORT || 3000;


app.use("/user", userRoutes);



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
