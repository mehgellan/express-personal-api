// require express and other modules
var express = require('express'),
    app = express();

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
  // TODO: Document all your api endpoints below
  res.json({
    woops_i_has_forgot_to_document_all_my_endpoints: true, // CHANGE ME ;)
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
    social_media: [],
  });
});




/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});
