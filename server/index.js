const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json()); //req body

//ROUTES
// Create a race
app.post("/races", async(req, res) => {
  try {
    const { race, date } = req.body;
    const newRace = await pool.query(
      "INSERT INTO whippet_running_table (race, date) VALUES($1, $2)",
     [race, date]
     )
  } catch (err) {
    console.error(err.message);
  }
});

// Get all races
app.get("/races", async(req, res) => {
  try {
    const allRaces = await pool.query(
      "SELECT * FROM whippet_running_table"
      );
    res.json(allRaces.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// Get a race
app.get("/races/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const race = await pool.query(
      "SELECT * FROM whippet_running_table WHERE whippet_running_table_id = $1", [id]
      );
    res.json(race.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// Update a race. Doesn't seem to work.
app.put("/races/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { race, date } = req.body;
    const updateRace = await pool.query(
      "UPDATE whippet_running_table SET (race, date) = ($2, $3) WHERE whippet_running_table_id = ($4, $5)", [race, date, id]
      );
    res.json("Race was updated!");
  } catch (err) {
    console.error(err.message);
  }
})

// delete a race. Doesn't seem to work. Used with * and without
app.delete("./races/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteRace = await pool.query(
      "DELETE FROM whippet_running_table WHERE whippet_running_table_id = $1", [id]
      );
    res.json("Race was deleted!");
  } catch (err) {
    console.log(err.message);
  }
});


app.listen(5001, () => {
  console.log("Server has started on port 5001");
});