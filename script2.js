/* Lab Assignment 3
Students: Ildar Ziganshin, Mauricio Revuelta, and Thiago Marquetti Sansivieri
Course:  JavaScript Frameworks
*/

// Import the express module
import express from "express";

// Import the galaxies data from the JSON file
import galaxies from "./data/galaxies.json" assert { type: "json" };

const app = express();
const port = 3000;

// Define a route for the home page to display the objects in the galaxies json file
//URL: http://localhost:3000/galaxies
app.get("/galaxies", (req, res) => {
  res.json(galaxies);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
