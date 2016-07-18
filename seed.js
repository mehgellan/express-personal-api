// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require('./models');

var profile = [
  {
    name: 'Meg Bauman',
    github_link: 'https://github.com/mehgellan',
    github_profile_image: 'public/images/meg.jpeg',
    location: [ {current: 'San Francisco, CA'}, {start: 'Chicago, IL'} ],
    social_media: [ {name: 'SoundCloud', href: ''}, {name: 'LinkedIn', href: 'https://www.linkedin.com/in/megbauman'}, {name: '#', href:'#'} ],
    dob: '05/19/1991'
  }
];

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
    album_art: 'http://cdn3.pitchfork.com/albums/18585/homepage_large.8f50f1bb.jpg',
    genre: 'RnB',
    artist: "D'Angelo"
  },
  {
    name: 'Dusk to Dawn',
    album_art: '/images/dusk-to-dawn.jpg',
    genre: 'Instrumental Electronic',
    artist: 'Emancipator'
  },
  {
    name: 'Endtroducing...',
    album_art: '/images/endtroducing.jpg',
    genre: 'Instramental Turntablism',
    artist: 'DJ Shadow'
  },
  {
    name: 'After Midnight',
    album_art: '/images/after-midnight.jpg',
    genre: 'Easy Listening',
    artist: 'Nat King Cole'
  },
  {
    name: 'Yoshimi Battles the Pink Robots',
    album_art: '/images/yoshimi.jpg',
    genre: 'Alternative Rock',
    artist: 'The Flaming Lips'
  },
  {
    name: 'Poinciana',
    album_art: '/images/poinciana.jpg',
    genre: 'Jazz',
    artist: 'Ahmad Jamal'
  },
  {
    name: 'The Seshen',
    album_art: '/images/seshen.jpg',
    genre: 'Groove',
    artist: 'The Seshen'
  },
  {
    name: 'American Beauty',
    album_art: '/images/american-beauty.jpg',
    genre: 'Rock',
    artist: 'Grateful Dead'
  },
  {
    name: 'Getz/Gilberto',
    album_art: '/images/getz-gilberto.jpg',
    genre: 'Bossa Nova',
    artist: 'Stan Getz'
  },
  {
    name: 'Moondance',
    album_art: '/images/moondance.jpg',
    genre: 'Folk Rock',
    artist: 'Van Morrison'
  },
  {
    name: 'Young and Old',
    album_art: '/images/young-old.jpeg',
    genre: 'Lo-fi',
    artist: 'Tennis'
  },
  {
    name: 'Donuts',
    album_art: '/images/donuts.jpg',
    genre: 'Hip Hop',
    artist: 'J Dilla'
  },
  {
    name: 'The Earth is Not a Cold Dead Place',
    album_art: '/images/cold-dead-place.jpg',
    genre: 'Post-rock',
    artist: 'Explosions in the Sky'
  },
  {
    name: 'In Return',
    album_art: '/images/in-return.png',
    genre: 'Chillwave',
    artist: 'Odesza'
  },
  {
    name: 'In the Wee Small Hours',
    album_art: '/images/wee-small-hours.jpg',
    genre: 'Easy Listening',
    artist: 'Frank Sinatra'
  },
  {
    name: "What's Going On",
    album_art: '/images/whats-goin-on.jpg',
    genre: 'Motown',
    artist: 'Marvin Gaye'
  },
  {
    name: 'Modern Vampires of the City',
    album_art: '/images/vampire-weekend.png',
    genre: 'Indie',
    artist: 'Vampire Weekend'
  },
  {
    name: 'Legend',
    album_art: '/images/legend.jpg',
    genre: 'Reggae',
    artist: 'Bob Marley'
  },
  {
    name: 'Loveless',
    album_art: '/images/loveless.jpg',
    genre: 'Shoegaze',
    artist: 'My Blood Valentine'
  },
  {
    name: 'Fleet Foxes',
    album_art: '/images/fleet-foxes.jpg',
    genre: 'Indie Folk',
    artist: 'Fleet Foxes'
  },
  {
    name: 'Agaetis Byrjun',
    album_art: '/images/sigur-ros.jpg',
    genre: 'Post-rock',
    artist: 'Sigur Ros'
  },
  {
    name: 'The Freewheelin Bob Dylan',
    album_art: '/images/bob-dylan.jpg',
    genre: 'Folk rock',
    artist: 'Bob Dylan'
  },
  {
    name: 'Pet Sounds',
    album_art: '/images/pet-sounds.jpg',
    genre: '60s rock',
    artist: 'Beach Boys'
  },
  {
    name: 'Led Zeppelin I',
    album_art: '/images/led-zep.png',
    genre: 'Rock',
    artist: 'Led Zeppelin'
  },
  {
    name: 'Willy and the Poor Boys',
    album_art: '/images/ccr.jpg',
    genre: 'Classic rock',
    artist: 'Creedence Clearwater Revival'
  },
  {
    name: 'Crosby, Stills and Nash',
    album_art: '/images/crosby-stills-nash.jpg',
    genre: 'Classic Rock',
    artist: 'Crosby, Stills and Nash'
  },
  {
    name: 'The Essential Django Reinhardt',
    album_art: '/images/django.jpg',
    genre: 'Gypsy Jazz',
    artist: 'Django Reinhardt'
  },
  {
    name: 'Flight of the Conchords',
    album_art: '/images/fotc.jpg',
    genre: 'Indie comedy',
    artist: 'Flight of the Conchords'
  },
  {
    name: "The Shepard's Dog",
    album_art: '/images/shepards-dog.jpg',
    genre: 'Folk',
    artist: 'Iron and Wine'
  },
  {
    name: 'Kind of Blue',
    album_art: '/images/kind-of-blue.jpg',
    genre: 'Jazz',
    artist: 'Miles Davis'
  },
  {
    name: 'Wolfgang Amadeus Phoenix',
    album_art: '/images/phoenix.png',
    genre: 'Indie',
    artist: 'Phoenix'
  },
  {
    name: 'The Essential Yo-Yo Ma',
    album_art: '/images/yo-yo-ma.jpeg',
    genre: 'Classical',
    artist: 'Yo-Yo Ma'
  },
  {
    name: 'Beats, Rhymes and Life',
    album_art: '/images/atqc.jpg',
    genre: 'Hip Hop',
    artist: 'A Tribe Called Quest'
  },
  {
    name: 'Mecca and the Soul Brother',
    album_art: '/images/mecca.jpg',
    genre: 'Hip Hop',
    artist: 'Pete Rock and C.L. Smooth'
  },
  {
    name: 'The Harder They Come',
    album_art: '/images/harder-they-come.jpg',
    genre: 'Reggae',
    artist: 'Jimmy Cliff'
  },
  {
    name: 'Favorite Noise',
    album_art: '/images/fav-noise.jpg',
    genre: 'Ska',
    artist: 'Reel Big Fish'
  },
  {
    name: 'Ella and Louis',
    album_art: '/images/ella-louis.jpg',
    genre: 'Jazz',
    artist: 'Ella Fitzgerald and Louis Armstrong'
  },
  {
    name: 'Greatest Hits',
    album_art: '/images/queen.JPG',
    genre: 'Classic Rock',
    artist: 'Queen'
  },
  {
    name: 'Surrealistic Pillow',
    album_art: '/images/surrealistic-pillow.jpg',
    genre: 'Psych Rock',
    artist: 'Jefferson Airplane'
  },
  {
    name: 'Mind Bokeh',
    album_art: '/images/mind-bokeh.jpg',
    genre: 'Folktronica',
    artist: 'Bibio'
  },
  {
    name: 'Cerulean',
    album_art: '/images/cerulean.jpg',
    genre: 'IDM',
    artist: 'Baths'
  },
  {
    name: 'Time for a Change',
    album_art: '/images/fkj.jpg',
    genre: 'Downtempo Electronic',
    artist: 'FKJ'
  },
  {
    name: 'The Warning',
    album_art: '/images/the-warning.png',
    genre: 'Poptron',
    artist: 'Hot Chip'
  },
  {
    name: 'Anything in Return',
    album_art: '/images/toro-y-moi.png',
    genre: 'Chillwave',
    artist: 'Toro y Moi'
  },
  {
    name: 'Paracosm',
    album_art: '/images/paracosm.png',
    genre: 'Lo-fi',
    artist: 'Washed Out'
  },
  {
    name: 'Cold Spring Fault Less Youth',
    album_art: '/images/cold-spring-faultless-youth.jpeg',
    genre: 'IDM',
    artist: 'Mount Kimbie'
  },
  {
    name: 'Funky Kingston',
    album_art: '/images/funky-kingston.jpg',
    genre: 'Reggae',
    artist: 'Toots and the Maytals'
  },
  {
    name: 'Devotion',
    album_art: '/images/devotion.jpg',
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
