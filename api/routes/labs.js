"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const data = require("../../loadFile");
const router = express.Router();
// @route   GET api/labs/:id
// desc     Get all lab details
// acccess  Public
router.get("/", (req, res) => {
    res.status(200).json(data.labs);
});
// @route   GET api/labs/:id
// desc     Get specific lab details based on id
// acccess  Public
router.get("/:id", (req, res) => {
    let id = parseInt(req.params.id);
    if (data.labs[id]) {
        res.status(200).json(data.labs[id]);
    }
    else
        res.status(404).json({ message: "Lab not found!" });
});
module.exports = router;
