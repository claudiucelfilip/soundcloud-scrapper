'use strict';

angular.module('soundcloudScrapperApp')
  .controller('ScrapeCtrl', function ($scope, $http, Stream, Youtube) {

    SC.initialize({
      client_id: '1ddf703a5625bc962e31189ab5e64e2b',
      redirect_uri: 'http://localhost:9000/scrape'
    });

    $scope.getSoundcloud = function() {
      // initiate auth popup
      SC.connect(function() {
        SC.get('/me', function(me) {


          SC.get('/me/favorites',{

              limit: 999999999

          },function(favorites) {
            var i;

            for (i = 0; i < favorites.length; i++) {
              (function(i) {
                setTimeout(function() {

                  SC.stream(favorites[i].uri, function(sound){
                    var stream = new Stream(sound.url, favorites[i].title);
                    stream.fetch()

                  });
                }, Math.floor(Math.random() * 1000));

              })(i);

            }
          });

        });

      });
    };

    $scope.getYoutube = function() {
      $scope.videos = Youtube.search({ part: 'snippet', q: 'Search terms' })
    };

    $scope.stream = function(url) {
      SC.stream(url, function(sound){
        downloadURI(sound.url, 'sound');
      });
    };



    function downloadURI(uri, name) {
      var link = document.createElement("a");
      link.download = 'aaaa';

      link.href = uri;
      link.click();
    }
  });
