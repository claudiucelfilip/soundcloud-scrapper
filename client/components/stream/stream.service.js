'use strict';

angular.module('soundcloudScrapperApp')
  .factory('Stream', function($http) {

    function Stream(url, title) {
      this.url = url;
      this.title = title;
    }
    Stream.prototype.fetch = function() {

      downloadURI('/api/stream/?url=' + encodeURI(this.url), this.title);
    };
    function downloadURI(uri, name) {
      var link = document.createElement("a");
      link.target = '_blank';
      link.download = name + '.mp3';
      link.href = uri;
      link.click();
    }

    return Stream;
  });
