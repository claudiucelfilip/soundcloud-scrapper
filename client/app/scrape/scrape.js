'use strict';
angular.module('soundcloudScrapperApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('scrape', {
        url: '/scrape',
        templateUrl: 'app/scrape/scrape.html',
        controller: 'ScrapeCtrl'
      });
  });
