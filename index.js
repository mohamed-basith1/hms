const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const AddproductRouter = require("./router/addproductRouter");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/product", AddproductRouter);
app.use("/checking", (req, res) => {
  console.log("iam from node js");
});

mongoose.connect(
  "mongodb+srv://hmssample:hms12345678@cluster0.xnjxg0d.mongodb.net/?retryWrites=true&w=majority",
  () => {
    console.log("mongodb is connect succesfully");
  }
);

app.listen(8000, () => {
  console.log("serve running in localhost 6000");
});
