import express = require("express");
const app: express.Application = express();
import bodyParser = require("body-parser");

const meds: express.Router = require("./api/routes/medicines");
const labs: express.Router = require("./api/routes/labs");
const imaging: express.Router = require("./api/routes/imaging");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port: Number = 3000;

app.use("/api/meds", meds);
app.use("/api/labs", labs);
app.use("/api/imaging", imaging);

app.get("/", (req, res) => {
  console.log("Request Recieved.");
  res.status(200).json({ message: "Success" });
});

app.listen(port, () => {
  console.log(`Server is running on PORT ${port}......`);
});
