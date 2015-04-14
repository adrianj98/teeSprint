var boardModel = require(__dirname + '/../libs/BoardSudoDBHandler.js');


module.exports = function (app) {
    app.get('/', index);
    app.get('/board/mark/:x/:y', markBoard);
    app.get('/board/get', getBoard);
    app.get('/board/clear', clearBoard);

};

var index = function (req, res) {
    res.render('index', { title: 'Tic Tac Toe' });
};


var getBoard = function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.end(boardModel.toJson());
};
var clearBoard = function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    boardModel.clear();
    res.end(boardModel.toJson());
};
var markBoard = function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    var x = req.params.x
    var y = req.params.y
    boardModel.markBox(x,y);
    res.end(boardModel.toJson());
};
