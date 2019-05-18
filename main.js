//import myotherController from './subset.js';

var myApp = angular.module("my-app",[]);

var myController = function($scope){
    $scope.message ='Angulr tut';
    var employees = [
        { name : 'voldemort',
          age : 10},
        { name : 'ron',
          age : 20} ,
        { name : 'harry',
          age : 40},
        { name : 'hermeione',
          age : 14 }  
    ];
    $scope.employees = employees;
    $scope.countries = [
        {
            cntry:'USA',
            capital:'Washington DC',
            cities:[
                {name:'Los Angeles'},
                {name:'New York'},
                {name:'San Francisco'}
            ]
        },
        {
            cntry:'India',
            capital:'New Delhi',
            cities:[
                {name:'Hyderabad'},
                {name:'Pune'},
                {name:'Bangalore'}
            ]
        },
        {
            cntry:'China',
            capital:'Bejing',
            cities:[
                {name:'Shanghai'},
                {name:'Macau'},
                {name:'Hong Kong'}
            ]
        },
        {
            cntry:'Russia',
            capital:'Moscow',
            cities:[
                {name:'Los Angeles'},
                {name:'New York'},
                {name:'San Francisco'}
            ]
        }
    ];
}
var diffController = function($scope){
    $scope.tech = [
        {name:'C',
        likes:0,
        dislikes:0},
        {name:'js',
        likes:0,
        dislikes:0},
        {name:'react',
        likes:0,
        dislikes:0},
        {name:'angular1',
        likes:0,
        dislikes:0}
    ];
    $scope.incrementLikes= function(tech){
        tech.likes++;
    }
    $scope.disLikes = function(tech) {
        tech.dislikes++;
    }
};
myApp.controller('myController',myController);
//myApp.controller('myotherController',myotherController);
myApp.controller('diffController',diffController);

//export myApp;


