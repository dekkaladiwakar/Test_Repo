import fs = require("fs");

const rawData = fs.readFileSync(__dirname + "/public/json/data.json");
const data = JSON.parse(rawData.toString());

//const name = "aceInhibitors";
//if (name in data.medications[0]) console.log("Hello");

//const id = parseInt("1");
//if (data.imaging[id]) console.log("hi");

module.exports = data;
