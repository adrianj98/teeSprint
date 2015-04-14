var boardModel = require(__dirname + '/../libs/BoardSudoDBHandler.js');


module.exports = function (app) {
    app.get('/', index);
    app.get('/board/mark/:x/:y', markBoard);
    app.get('/board/get', getBoard);
    app.get('/board/clear', clearBoard);

};
// renders the root html file
var index = function (req, res) {
    res.render('index', { title: 'Tic Tac Toe' });
};

/**
 * gets the board data including winner and current player
 *
 * @route board/get
 * @param req
 * @param res
 */
var getBoard = function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.end(boardModel.toJson());
};

/**
 * clears the board for new game
 *
 * @route board/clear
 * @param req
 * @param res
 */
var clearBoard = function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    boardModel.clear();
    res.end(boardModel.toJson());
};

/**
 * marks a board
 *
 * @route board/mark/:x/:y
 * @param req
 * @param res
 */
var markBoard = function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    var x = req.params.x
    var y = req.params.y
    boardModel.markBox(x,y);
    res.end(boardModel.toJson());
};
