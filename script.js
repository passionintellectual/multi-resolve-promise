// Code goes here
angular.module("gtpWebApp.core", []);
angular.module('gtpWebApp.core').
controller('dg', ['$scope', '$timeout',
    '$gq',
    function($scope, $timeout, $gq) {

        $scope.model = {};
        var name = $scope.model.name += 'ganesh';
        var gq = new $gq();

        console.log(gq);
        gq.promise().then(function(result) {
            $scope.model.name += result;
        },function(result) {
            $scope.model.name += 'err '+result;
        })

        gq.promise().catch(function(err) {
            console.log(
                'error', err)
        })
console.log = function (txt) {
    $scope.model.name += txt + '<br>';
}
        gq.promise().finally(function(argument) {
            console.log('promise is done', argument);
        })
        gq.resolve('test');

        $timeout(function(argument) {
            gq.resolve('test1');

        }, 1000);
        $timeout(function(argument) {
            gq.reject('test31');

        }, 2000);
        
         $timeout(function(argument) {
              
            gq.resolve('test after reject');

        }, 3000);
        
        $scope.managers = [{
            name: 'managers',
            age: 32
        }, {
            name: 'managers1',
            age: 321
        }, {
            name: 'managers2',
            age: 322
        }, {
            name: 'managers3',
            age: 323
        }, {
            name: 'managers4',
            age: 324
        }, {
            name: 'managers5',
            age: 325
        }, ];

        $scope.members = [{
            name: 'ganesh',
            age: 32
        }, {
            name: 'ganesh1',
            age: 321
        }, {
            name: 'ganesh2',
            age: 322
        }, {
            name: 'ganesh3',
            age: 323
        }, {
            name: 'ganesh4',
            age: 324
        }, {
            name: 'ganesh5',
            age: 325
        }, ];

    }
])