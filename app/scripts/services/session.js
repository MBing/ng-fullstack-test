'use strict';

angular.module('fullstackNgTest1App')
  .factory('Session', function ($resource) {
    return $resource('/api/session/');
  });
