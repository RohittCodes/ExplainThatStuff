const express = require("express");
const dotenv = require("dotenv");

const codes = require("./routes/codes.js");
const codeExplain = require("./routes/code-explanation.js");

dotenv.config();

const PORT = process.env.PORT;
const app = express();

app.use("/codes", codes);
app.use("/code-explain", codeExplain);

app.listen(PORT, () => {
  console.log(`Listening to the server on port: http://localhost:${PORT}`);
});
