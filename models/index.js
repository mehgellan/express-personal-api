// require mongoose module
var mongoose = require("mongoose");

// connect to mongoDB
mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/personal-api");

// module.exports.Campsite = require("./campsite.js.example");
module.exports.Album = require('./album.js');
