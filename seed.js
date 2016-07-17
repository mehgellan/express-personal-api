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
    genre: 'Downtempo Electronic',
    artist: 'Alina Baraz and Galimatias'
  },
  {
    name: 'Voodoo',
    album_art: '/public/images/album_art/voodoo.jpg',
    genre: 'RnB',
    artist: "D'Angelo"
  },
  {
    name: 'Dusk to Dawn',
    album_art: '/public/images/album_art/dusk-to-dawn.jpg',
    genre: 'Instrumental Electronic',
    artist: 'Emancipator'
  },
  {
    name: 'Endtroducing...',
    album_art: 'public/images/album_art/endtroducing.jpg',
    genre: 'Instramental Turntablism',
    artist: 'DJ Shadow'
  },
  {
    name: 'After Midnight',
    album_art: 'public/images/album_art/after-midnight.jpg',
    genre: 'Easy Listening',
    artist: 'Nat King Cole'
  },
  {
    name: 'Yoshimi Battles the Pink Robots',
    album_art: 'public/images/album_art/yoshimi.jpg',
    genre: 'Alternative Rock',
    artist: 'The Flaming Lips'
  },
  {
    name: 'Poinciana',
    album_art: 'public/images/album_art/poinciana.jpg',
    genre: 'Jazz',
    artist: 'Ahmad Jamal'
  },
  {
    name: 'The Seshen',
    album_art: 'public/images/album_art/seshen.jpg',
    genre: 'Groove',
    artist: 'The Seshen'
  },
  {
    name: 'American Beauty',
    album_art: 'public/images/album_art/american-beauty.jpg',
    genre: 'Rock',
    artist: 'Grateful Dead'
  },
  {
    name: 'Getz/Gilberto',
    album_art: 'public/images/album_art/getz-gilberto.jpg',
    genre: 'Bossa Nova',
    artist: 'Stan Getz'
  },
  {
    name: 'Moondance',
    album_art: 'public/images/album_art/moondance.jpg',
    genre: 'Folk Rock',
    artist: 'Van Morrison'
  },
  {
    name: 'Young and Old',
    album_art: 'public/images/album_art/young-old.jpeg',
    genre: 'Lo-fi',
    artist: 'Tennis'
  },
  {
    name: 'Donuts',
    album_art: 'public/images/album_art/donuts.jpg',
    genre: 'Hip Hop',
    artist: 'J Dilla'
  },
  {
    name: 'The Earth is Not a Cold Dead Place',
    album_art: 'public/images/album_art/cold-dead-place.jpg',
    genre: 'Post-rock',
    artist: 'Explosions in the Sky'
  },
  {
    name: 'In Return',
    album_art: 'public/images/album_art/in-return.png',
    genre: 'Chillwave',
    artist: 'Odesza'
  },
  {
    name: 'In the Wee Small Hours',
    album_art: 'public/images/album_art/wee-small-hours.jpg',
    genre: 'Easy Listening',
    artist: 'Frank Sinatra'
  },
  {
    name: "What's Going On",
    album_art: 'public/images/album_art/whats-goin-on.jpg',
    genre: 'Motown',
    artist: 'Marvin Gaye'
  },
  {
    name: 'Modern Vampires of the City',
    album_art: 'public/images/album_art/vampire-weekend.png',
    genre: 'Indie',
    artist: 'Vampire Weekend'
  },
  {
    name: 'Legend',
    album_art: 'public/images/album_art/legend.jpg',
    genre: 'Reggae',
    artist: 'Bob Marley'
  },
  {
    name: 'Loveless',
    album_art: 'public/images/album_art/loveless.jpg',
    genre: 'Shoegaze',
    artist: 'My Blood Valentine'
  },
  {
    name: 'Fleet Foxes',
    album_art: 'public/images/album_art/fleet-foxes.jpg',
    genre: 'Indie Folk',
    artist: 'Fleet Foxes'
  },
  {
    name: 'Agaetis Byrjun',
    album_art: 'public/images/album_art/sigur-ros.jpg',
    genre: 'Post-rock',
    artist: 'Sigur Ros'
  },
  {
    name: 'The Freewheelin Bob Dylan',
    album_art: 'public/images/album_art/bob-dylan.jpg',
    genre: 'Folk rock',
    artist: 'Bob Dylan'
  },
  {
    name: 'Pet Sounds',
    album_art: 'public/images/album_art/pet-sounds.jpg',
    genre: '60s rock',
    artist: 'Beach Boys'
  },
  {
    name: 'Led Zeppelin I',
    album_art: 'public/images/album_art/led-zep.png',
    genre: 'Rock',
    artist: 'Led Zeppelin'
  },
  {
    name: 'Willy and the Poor Boys',
    album_art: 'public/images/album_art/ccr.jpg',
    genre: 'Classic rock',
    artist: 'Creedence Clearwater Revival'
  },
  {
    name: 'Crosby, Stills and Nash',
    album_art: 'public/images/album_art/crosby-stills-nash.jpg',
    genre: 'Classic Rock',
    artist: 'Crosby, Stills and Nash'
  },
  {
    name: 'The Essential Django Reinhardt',
    album_art: 'public/images/album_art/django.jpg',
    genre: 'Gypsy Jazz',
    artist: 'Django Reinhardt'
  },
  {
    name: 'Flight of the Conchords',
    album_art: 'public/images/album_art/fotc.jpg',
    genre: 'Indie comedy',
    artist: 'Flight of the Conchords'
  },
  {
    name: "The Shepard's Dog",
    album_art: 'public/images/album_art/shepards-dog.jpg',
    genre: 'Folk',
    artist: 'Iron and Wine'
  },
  {
    name: 'Kind of Blue',
    album_art: 'public/images/album_art/kind-of-blue.jpg',
    genre: 'Jazz',
    artist: 'Miles Davis'
  },
  {
    name: 'Wolfgang Amadeus Phoenix',
    album_art: 'public/images/album_art/phoenix.png',
    genre: 'Indie',
    artist: 'Phoenix'
  },
  {
    name: 'The Essential Yo-Yo Ma',
    album_art: 'public/images/album_art/yo-yo-ma.jpeg',
    genre: 'Classical',
    artist: 'Yo-Yo Ma'
  },
  {
    name: 'Beats, Rhymes and Life',
    album_art: 'public/images/album_art/atqc.jpg',
    genre: 'Hip Hop',
    artist: 'A Tribe Called Quest'
  },
  {
    name: 'Mecca and the Soul Brother',
    album_art: 'public/images/album_art/mecca.jpg',
    genre: 'Hip Hop',
    artist: 'Pete Rock and C.L. Smooth'
  },
  {
    name: 'The Harder They Come',
    album_art: 'public/images/album_art/harder-they-come.jpg',
    genre: 'Reggae',
    artist: 'Jimmy Cliff'
  },
  {
    name: 'Favorite Noise',
    album_art: 'public/images/album_art/fav-noise.jpg',
    genre: 'Ska',
    artist: 'Reel Big Fish'
  },
  {
    name: 'Ella and Louis',
    album_art: 'public/images/album_art/ella-louis.jpg',
    genre: 'Jazz',
    artist: 'Ella Fitzgerald and Louis Armstrong'
  },
  {
    name: 'Greatest Hits',
    album_art: 'public/images/album_art/queen.JPG',
    genre: 'Classic Rock',
    artist: 'Queen'
  },
  {
    name: 'Surrealistic Pillow',
    album_art: 'public/images/album_art/surrealistic-pillow',
    genre: 'Psych Rock',
    artist: 'Jefferson Airplane'
  },
  {
    name: 'Mind Bokeh',
    album_art: 'public/images/album_art/mind-bokeh.jpg',
    genre: 'Folktronica',
    artist: 'Bibio'
  },
  {
    name: 'Cerulean',
    album_art: 'public/images/album_art/cerulean.jpg',
    genre: 'IDM',
    artist: 'Baths'
  },
  {
    name: 'Time for a Change',
    album_art: 'public/images/album_art/fkj.jpg',
    genre: 'Downtempo Electronic',
    artist: 'FKJ'
  },
  {
    name: 'The Warning',
    album_art: 'public/images/album_art/the-warning.png',
    genre: 'Poptron',
    artist: 'Hot Chip'
  },
  {
    name: 'Anything in Return',
    album_art: 'public/images/album_art/toro-y-moi.png',
    genre: 'Chillwave',
    artist: 'Toro y Moi'
  },
  {
    name: 'Paracosm',
    album_art: 'public/images/album_art/paracosm.png',
    genre: 'Lo-fi',
    artist: 'Washed Out'
  },
  {
    name: 'Cold Spring Fault Less Youth',
    album_art: 'public/images/album_art/cold-spring-faultless-youth.jpeg',
    genre: 'IDM',
    artist: 'Mount Kimbie'
  },
  {
    name: 'Funky Kingston',
    album_art: 'public/images/album_art/funky-kingston.jpg',
    genre: 'Reggae',
    artist: 'Toots and the Maytals'
  },
  {
    name: 'Devotion',
    album_art: 'public/images/album_art/devotion.jpg',
    genre: 'Indie',
    artist: 'Beach House'
  },



];

db.Album.remove({}, function(err, albums) {
  console.log('REMOVED ALL ALBUMS');
  db.Album.create(albums_list, function(err, savedAlbum) {
    if (err) {
      return console.log('ERROR: ', err);
    }
    console.log('CREATED NEW ALBUM' + savedAlbum);
    console.log('CREATED', savedAlbum.length, 'ALBUMS');
    process.exit();
  });
});





// db.Campsite.create(new_campsite, function(err, campsite){
//   if (err){
//     return console.log("Error:", err);
//   }

//   console.log("Created new campsite", campsite._id)
//   process.exit(); // we're all done! Exit the program.
// })
