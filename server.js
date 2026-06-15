const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// 🧠 QUESTIONS DATABASE
let questions = [
  {
    testId: "heat-01",
    question: "Heat flows from?",
    options: ["Cold to hot", "Hot to cold", "Both", "None"],
    answer: "Hot to cold",
    explanation: "Heat always flows from higher temperature to lower temperature."
  },
  {
    testId: "heat-01",
    question: "Unit of heat is?",
    options: ["Joule", "Newton", "Watt", "Pascal"],
    answer: "Joule",
    explanation: "Heat is a form of energy measured in Joules."
  }
];

// 📥 GET QUESTIONS (FILTER BY TEST ID)
app.get("/questions", (req, res) => {
  const testId = req.query.testId;
  const filtered = questions.filter(q => q.testId === testId);
  res.json(filtered);
});

// 📤 SAVE RESULT
app.post("/result", (req, res) => {
  console.log("Student Result:", req.body);
  res.json({ status: "saved" });
});

// 🚀 SERVER START
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});