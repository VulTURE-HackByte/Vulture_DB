const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const cors = require("cors");
const connectDb = require("./config/db");

app.use(cors({ origin: 'http://localhost:5173', credentials: true }))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

connectDb();

const port = process.env.PORT || 4444;

app.use("/api/scan", require("./routes/scanRoutes"));
app.use("/api/", require("./routes/miscelleanousRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
