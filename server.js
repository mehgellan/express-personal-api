// require express and other modules
var express = require('express'),
    app = express(),
    data;

// parse incoming urlencoded form data
// and populate the req.body object
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

// allow cross origin requests (optional)
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

/************
 * DATABASE *
 ************/

var db = require('./models');

/**********
 * ROUTES *
 **********/

// Serve static files from the `/public` directory:
// i.e. `/images`, `/scripts`, `/styles`
app.use(express.static('public'));

/*
 * HTML Endpoints
 */

app.get('/', function homepage(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


/*
 * JSON API Endpoints
 */

// get all root API info
app.get('/api', function api_index(req, res) {
  res.json({
    woops_i_has_forgot_to_document_all_my_endpoints: false, // CHANGE ME ;)
    message: "Welcome to my personal api! Here's what you need to know!",
    documentation_url: 'https://github.com/mehgellan/express-personal-api/README.md',
    base_url: 'http://stark-fjord-10734.herokuapp.com',
    endpoints: [
      {method: 'GET', path: '/api', description: 'Describes all available endpoints'},
      {method: 'GET', path: '/api/profile', description: 'My generally important data'},
      {method: 'GET', path: '/api/albums', description: 'Data about my favorite albums'},
      {method: 'GET', path: '/api/albums/:id', description: 'Find one album'},
      {method: 'POST', path: '/api/albums', description: 'Create a new album'},
      {method: 'PUT', path: '/api/albums/:id', description: 'Edit existing albums'},
      {method: 'DELETE', path: '/api/albums/:id', description: 'Destroy one album'}
    ]
  });
});

app.get('/api/profile', function profile_index(req, res) {
  //TODO: Document all my profile attributes below
  res.json({
      name: 'Meg Bauman',
      github_link: 'https://github.com/mehgellan',
      github_profile_image: 'public/images/meg.jpeg',
      location: [ {current: 'San Francisco, CA'}, {start: 'Chicago, IL'} ],
      social_media: [ {name: 'SoundCloud', href: 'https://soundcloud.com/mehgellan'}, {name: 'LinkedIn', href: 'https://www.linkedin.com/in/megbauman'}, {name: 'Instagram', href:'https://www.instagram.com/mehgellan/'} ],
      dob: '05/19/1991',
      days_old: daysBetweenDate('05/19/1991'),
      is_awake: is_awake()
    });
});

app.get('/api/albums', function albums_index(req, res) {
  db.Album.find({}, function(err, allAlbums) {
    if (err) { res.sendStatus(404); }
    res.json({ albums: allAlbums });
  });
});

app.get('/api/albums/:id', function album_show(req, res) {
  var albumId = req.params.id;
    db.Album.findById({_id: albumId}, function(err, album) {
      if (err) { res.sendStatus(404); }
      res.json(album);
    });
});

app.post('/api/albums', function(req, res) {
  var newAlbum = new db.Album({
    name: req.body.name,
    album_art: req.body.album_art,
    genre: req.body.genre,
    artist: req.body.artist
  });
  console.log(req.body.name);
  newAlbum.save(function handleDBAlbumSaved(err, savedAlbum) {
    if (err) { res.sendStatus(404); }
    res.json(savedAlbum);
  });
});

app.put('/api/albums/:id', function(req, res) {
  var albumId = req.params.id;
  db.Album.findOne({_id: albumId}, function(err, foundAlbum) {
    foundAlbum.name = req.body.name;
    foundAlbum.genre = req.body.genre;
    foundAlbum.artist = req.body.artist;
    foundAlbum.save(function(err, savedAlbum) {
      if (err) { res.sendStatus(404); }
      res.json(savedAlbum);
    });
  });
});

app.delete('/api/albums/:id', function(req, res) {
  // console.log(req.params);
  var albumId = req.params.id;
  db.Album.findOneAndRemove({_id: albumId}, function(err, deletedAlbum) {
    if (err) { res.sendStatus(410); }
    res.json(deletedAlbum);
  });
});

function daysBetweenDate(string) {
  var dateToCheck = new Date(string);
  var currentDate = new Date();
  var diff = Math.floor((currentDate - dateToCheck)/86400000);
  return diff;
}

function is_awake() {
    var start = new Date(2016,6,18,8).getTime();
    var now = new Date().getTime();
    var end = new Date(2016,6,18,22).getTime();
    var is_awake;
    if( (start < now ) && (now < end )) {
      is_awake = true;
    }
    else {
     is_awake = false;
    }
    return is_awake;
}





/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});
