const path = require("path");

module.exports = function(app) {
    //When Continue or New Workout is selected in index.html, function is called:
    app.get("exercise", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/exercise.html"));
    });
    //When Tracker dashboard is selected, generates the workout summaries/graphs:
    app.get("/stats", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/stats.html"))
    });
};