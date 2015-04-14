var board = angular.module('board', ['ngResource']);

board.controller('boardController', ['$scope','boardData', function ($scope,boardData) {

    $scope.addPlayer = function(x,y){
        var board = boardData.mark({x:x,y:y},function() {
            $scope.board = board;
        });

    };
    $scope.resetBoard = function(){
        var board = boardData.clear(function() {
            $scope.board = board;
        });

    }
    var poll = function(){
        var board = boardData.pull(function() {
            $scope.board = board;
        });
        setTimeout(poll,1000);
    }
    poll();


}]);