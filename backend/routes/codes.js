const express = require("express");
const db = require("../config/firebase-config");
const bodyParser = require("body-parser");
const cors = require("cors");

const router = express();

router.use(cors());
router.use(bodyParser.json());

router.post("/", async (req, res) => {
  try {
    const data = req.body;

    if (!data) {
      return res.status(400).send("Input data is missing");
    }

    const userDb = db.collection("programs");
    await userDb.add(data);

    res.status(200).json("Program successfully added");
  } catch (error) {
    console.error(error);
  }
});

router.get("/", (req, res) => {
  try {
    console.log("running");
    res.send("running");
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
