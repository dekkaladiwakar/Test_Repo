"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const data = require("../../loadFile");
const router = express.Router();
// @route   GET api/imaging
// desc     Get all imaging details
// acccess  Public
router.get("/", (req, res) => {
    res.status(200).json(data.imaging);
});
// @route   GET api/imaging/:id
// desc     Get specific imaging details based on id
// acccess  Public
router.get("/:id", (req, res) => {
    let id = parseInt(req.params.id);
    if (data.imaging[id]) {
        res.status(200).json(data.imaging[id]);
    }
    else
        res.status(404).json({ message: "Imaging not found!" });
});
module.exports = router;
