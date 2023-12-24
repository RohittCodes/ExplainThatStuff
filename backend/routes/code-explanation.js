const express = require("express");
const dotenv = require("dotenv");
const { GoogleGenerativeAI } = require("@google/generative-ai");
const bodyParser = require("body-parser");
const cors = require("cors");

dotenv.config();
const router = express();

const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

router.use(cors(corsOptions));

router.use(bodyParser.json());
const API_KEY = process.env.GEMINI_API_KEY;

const genAI = new GoogleGenerativeAI(API_KEY);

async function run(data) {
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  const result = await model.generateContent(data);
  const response = await result.response;
  return response.text();
}

router.post("/", async (req, res) => {
  try {
    const inputData = req.body.input;
    const processedData = await run(`Explain this code: ${inputData}`);
    res.send({ result: processedData });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Internal Server Error" });
  }
});

router.get("/", async (req, res) => {
  try {
    res.send("Running");
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
