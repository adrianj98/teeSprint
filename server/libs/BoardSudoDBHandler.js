/**
 * this is a sudo data store. If this was not a coding test this would
 * be stored in a DB
 */

var boardModel = require(__dirname + '/BoardModel.js');

module.exports = new boardModel.BoardModel(new boardModel.memoryDataHandler());