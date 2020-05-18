"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const data = require("../../loadFile");
const router = express.Router();
// @route   GET api/meds
// desc     Get list of medication
// acccess  Public
router.get("/", (req, res) => {
    res.status(200).json(data.medications[0]);
});
// @route   GET api/meds/:medName
// desc     Get specific medication details
// acccess  Public
router.get("/:medName", (req, res) => {
    let name = req.params.medName;
    if (name in data.medications[0]) {
        res.status(200).json(data.medications[0][name][0]);
    }
    else
        res.status(404).json({ message: "Medication not found!" });
});
module.exports = router;
