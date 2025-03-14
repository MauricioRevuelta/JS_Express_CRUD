// Import express
import express from "express";

// Create an express application
const app = express();
const PORT = 3000;

// URL: http://localhost:3000/
app.get("/", (req, res) => {
  res.send("<h1>Welcome to Lab Assignment 3<h1>");
});

// URL => http://localhost:3000/create
app.post("/create", (req, res) => {
  res.send(
    '<h1 style="color: green;">The data has been created successfully!</h1>'
  );
});

// URL => http://localhost:3000/read
app.get("/read", (req, res) => {
  res.send(
    '<h1 style="color: purple;">The data has been read successfully!</h1>'
  );
});

// URL => http://localhost:3000/update
app.put("/update", (req, res) => {
  res.send(
    '<h1 style="color: blue;">The data has been updated successfully!</h1>'
  );
});

// URL => http://localhost:3000/delete
app.delete("/delete", (req, res) => {
  res.send(
    '<h1 style="color: red;">The data has been deleted successfully!</h1>'
  );
});

app.listen(PORT, () => {
  console.log(`Example app listening on: http://localhost:${PORT}`);
});
