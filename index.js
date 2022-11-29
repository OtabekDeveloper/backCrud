const express = require('express')
const app = express()
const mongoose = require("mongoose")
const appRouter = require("./router")

app.use(express.json());
mongoose
  .connect("mongodb://localhost:27017/aziz", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("bazaga ulandi");
  })
  .catch((err) => {
    console.log(err);
  });


  app.use("/api", appRouter);

app.listen(3000, () => {
    console.log("3000 port ishladi")
})