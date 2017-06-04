var searchYouTube = (options, callback) => {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {
      part: 'snippet',
      key: options.key,
      q: options.query,
      maxResults: options.max,
      videoEmbeddable: true,
      type: 'video'
    },
    success: function (data) {
      callback(data.items);
      console.log('succesfully received data ', data);
    }, 
    error: function (data) {
      console.error('failed to receive data ', data);
    }
  });
};

window.searchYouTube = searchYouTube;
