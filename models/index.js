var mongoose = require("mongoose");
mongoose.connect( process.env.MONGODB_URI || "https://stark-fjord-10734.herokuapp.com/");

// module.exports.Campsite = require("./campsite.js.example");
