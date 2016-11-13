'use strict';

/**
 * @ngdoc overview
 * @name twoApp
 * @description
 * # twoApp
 *
 * Main module of the application.
 */
angular
  .module('twoApp', ["ui.router"]).controller('con',['$scope','$http',function ($scope,$http) {
	  
	}]).config(['$stateProvider','$urlRouterProvider',function ($stateProvider,$urlRouterProvider){
			$stateProvider.state('new1',{
				url:'/new1',
				templateUrl:'views/main.html',
				controller:'MainCtrl'
			}).state('new2',{
				url:'/new2',
				templateUrl:'views/new.html',
				controller:'new'
			})
		}])

