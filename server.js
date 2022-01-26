const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

app.post("/loginIn", async (req, res) => {
  const { body } = req;
  const { dataResponse } = await axios.post(
    "https://fn-uks-dev-eng-fe-mock-svc.azurewebsites.net/api/sign-in",
    body
  );

  res.send(dataResponse);
});

app.listen(PORT, () => {
  console.log(`Express Server listening on port ${PORT}`);
});
