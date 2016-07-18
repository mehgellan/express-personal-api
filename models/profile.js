var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProfileSchema = new Schema({
  name: String,
  github_link: String,
  github_profile_image: String,
  location: Array,
  social_media: Array,
  dob: String,
  days_old: Number
});

// compile Schema into active model
var Profile = mongoose.model('Profile', ProfileSchema);

// export
module.exports = Profile;
