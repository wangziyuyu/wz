'use strict';

/**
 * @ngdoc function
 * @name twoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the twoApp
 */
angular.module('twoApp')
  .controller('MainCtrl', function ($scope,$http) {
    $http({
     url:'http://www.somenote.cn:1602/list1',
     method:'get'
    }).success(function(e){
          $scope.data=e
    })
  })
