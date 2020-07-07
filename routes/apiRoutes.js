// const db = require("../models");

// module.exports = function(app) {

//     //api.js uses this to get the last workout
//     app.get("/api/workouts", (req, res) => {
//         db.Workout.find({})
//         .then(workout => {
//             res.json(workout);
//         })
//         .catch(err => {
//             res.json(err);
//         });
//     });

//     //Generates a new workout in the database
//     app.post("/api/workouts", async (req, res) => {
//         try{
//             const response = await db.Workout.create({type: "workout"})
//             res.json(response);
//         }
//         catch(err){
//             console.log("Workout not created: ", err)
//         }
//     })
//     //api.js calls to add an exercise to the workout session, creates the id

// }