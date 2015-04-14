'use strict';

/* Services */

var board = angular.module('board');


board.factory('boardData',['$resource',
    function($resource){


        var result = $resource(
            "board/:action/:x/:y",
            {
                action: "@action",
                x: "@x",
                y: "@y"
            },
            {
                pull: {
                    method: "GET",
                    params: {
                        action: "get"
                    }
                },
                clear: {
                    method: "GET",
                    params: {
                        action: "clear"
                    }
                },
                mark: {
                    method: "GET",
                    params: {
                        action: "mark"
                    }
                }
            });


        return result
    }]);