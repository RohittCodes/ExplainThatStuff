const express = require("express");

const router = express();

router.get("/", (req, res) => {
  try {
    console.log("running");
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
