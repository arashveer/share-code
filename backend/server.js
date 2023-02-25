const express = require("express");
const app = express();

const userRouter = require("./routes/codefile.js");
app.use("/api/codefile/", userRouter);

app.listen(4000);
