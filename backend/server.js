const express = require("express");
const bodyParser = require("body-parser");
const userRouter = require("./routes/codefile.js");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api/codefile/", userRouter);

app.listen(4000);
