const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const port = process.env.PORT || 5000;

app.use("/api/scan", require("./routes/scanRoutes"));

app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
