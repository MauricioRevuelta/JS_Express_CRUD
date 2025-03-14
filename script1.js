/* Lab Assignment 3
Students: Ildar Ziganshin, Mauricio Revuelta, and Thiago Marquetti Sansivieri
Course:  JavaScript Frameworks
*/

// Import the express module
import express from "express";

// Create an express application
const app = express();
const port = 3000;

// Define a route for the home page to display the names of our group members
//URL: http://localhost:3000/home
app.get("/home", (req, res) => {
  res.send(
    "Ildar Ziganshin, Mauricio Revuelta and Thiago Marquetti Sansivieri"
  );
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
