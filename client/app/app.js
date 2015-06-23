'use strict';

angular.module('soundcloudScrapperApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap',
  'gapi'
])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  })
  .value('GoogleApp', {
    apiKey: 'AIzaSyDsdc99v5CXjUprFL6-I_zoU6b5P4QF-Xw',
    clientId: '743828080393-sneohfpj4h7ou66334cb25stg4tenu06.apps.googleusercontent.com',
    scopes: [

      'https://www.googleapis.com/auth/drive',
      'https://www.googleapis.com/auth/youtube',
      'https://www.googleapis.com/auth/userinfo.profile'

    ]
  });
