import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json("Cheguei agora");
});

app.post("/courses", (req, res) => {
  const { name } = req.body;

  res.status(201).json(name);
});

app.listen(3333, () => {
  console.log("Server on");
});
