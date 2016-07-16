// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require('./models');

var albums_list = [
  {
    name: 'Greatest Hits',
    album_art: 'https://images-na.ssl-images-amazon.com/images/I/518mmyBw1VL.jpg',
    genre: 'Soul',
    artist: 'Al Green'
  },
  {
    name: 'Urban Flora',
    album_art: 'https://i1.sndcdn.com/artworks-000117201209-y1l5g2-t500x500.jpg',
    genre: 'Downtempo',
    artist: 'Alina Baraz & Galimatias'
  }
];

db.Album.create(albums_list, function(err, album) {
  if (err) {
    return console.log('Error: ', err);
  }
  console.log('Created new album', album);
});
// db.Campsite.create(new_campsite, function(err, campsite){
//   if (err){
//     return console.log("Error:", err);
//   }

//   console.log("Created new campsite", campsite._id)
//   process.exit(); // we're all done! Exit the program.
// })
