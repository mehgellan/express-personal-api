var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AlbumSchema = new Schema({
  name: String,
  album_art: String,
  genre: Array,
});

// compile Schema into active model
var Album = mongoose.model('Album', AlbumSchema);

// export
module.exports = Album;
