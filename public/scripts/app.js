console.log("Sanity Check: JS is working!");
var template;
var $albumsList;
var allAlbums = [];

$(document).ready(function(){
  $albumsList = $('#target');
  var source = $('#albums-template').html();
  template = Handlebars.compile(source);

  $.ajax({
    method: 'GET',
    url: '/api/albums',
    success: onSuccess,
    error: onError
  });

  $('form').on('submit', function(e) {
    e.preventDefault();
    $.ajax({
      method: 'POST',
      url: '/api/albums',
      data: $('form').serialize(),
      success: newAlbumSuccess,
      error: newAlbumError
    });
  });

  $albumsList.on('click', '.deleteBtn', function() {
    $.ajax({
      method: 'DELETE',
      url: '/api/albums/' + $(this).attr('data-id'),
      success: deleteAlbumSuccess,
      error: deleteAlbumError
    });
  });

});

function render() {
  $albumsList.empty();
  var albumsHtml = template({albums: allAlbums.albums});
  $albumsList.append(albumsHtml);
}

function onSuccess(json) {
  allAlbums = json;
  render();
}

function onError(e) {
  console.log('ajax get request error');
  $albumsList.text('Failed to load albums, check the server');
}

function newAlbumSuccess(json) {
  $('form input').val('');
  (allAlbums.albums).push(json);
  render();
}

function newAlbumError(e) {
  $('#errorTarget').text('Failed to make new album');
}

function deleteAlbumSuccess(json) {
  var album = json;
  var albumId = album._id;
  for(var index = 0; index < allAlbums.albums.length; index++) {
    if(allAlbums.albums[index]._id === albumId) {
      allAlbums.albums.splice(index, 1);
      break;
    }
  }
  render();
}

function deleteAlbumError() {
  $('#errorTarget').text('Failed to delete album by id');
  console.log('Failed to delete album by id');
}
