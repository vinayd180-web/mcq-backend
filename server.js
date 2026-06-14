const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/questions", (req, res) => {
  res.json([
    {
      question: "2 + 2 = ?",
      options: ["3", "4", "5", "6"],
      answer: "4"
    },
    {
      question: "Capital of India?",
      options: ["Mumbai", "Delhi", "Kolkata", "Chennai"],
      answer: "Delhi"
    }
  ]);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
  console.log("Server running on port " + PORT);
});