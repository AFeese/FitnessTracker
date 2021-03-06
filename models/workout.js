//Requires Mongoose
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Creating new Mongoose Schema class:
const workoutSchema = new Schema(
    {
        day: {
            type: Date,
            default: Date.now
        },
        exercises: [
            {
                type: {
                    type: String,
                    trim: true,
                    required: "Enter Exercise Type"
                },
                name: {
                    type: String,
                    trim: true,
                    required: "Enter Exercise Name"
                },
                duration: {
                    type: Number,
                    required: "Enter Exercise Duration in Minutes"
                },
                weight: {
                    type: Number
                },
                reps: {
                    type: Number
                },
                sets: {
                    type: Number
                },
                distance: {
                    type: Number
                }
            }
        ]
    },
    {
        toJSON: {
            virtuals: true
        }
    }
);

workoutSchema.virtual("totalDuration").get(function () {
    //Reduces the array of exercises down to the sum of the durations
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration;
    }, 0);
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;