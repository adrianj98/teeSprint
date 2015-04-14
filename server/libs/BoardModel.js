/**
 * model for board data
 *
 * @param $dataHandler
 * @constructor
 */
function BoardModel($dataHandler) {
    this.handler = $dataHandler;

    this.winner = null;

}


BoardModel.prototype = {
    /**
     * marks a box
     * @param x
     * @param y
     * @returns {boolean}
     */
    markBox: function (x, y) {
        var who = this.getPlayer();
        if ((who !== 'x' ) && ( who !== 'o' )) {
            return false;
        }
        if (this.getWinner()) return false;
        var boxes = this.handler.getBoxes();
        if (boxes[x][y] !== null) {
            return false;
        }
        this.handler.setBox(x, y, who);
        this.getWinner();

        this.handler.setPlayer(who === 'x' ? 'o' : 'x');
        return true;
    },
    /**
     * gets all the boxes on the board
     * @returns {*}
     */
    getBoxes: function () {
        return this.handler.getBoxes();
    },
    /**
     * calculates and returns the winner or "c" if CAT else null
     * @returns {*}
     */
    getWinner: function () {
        return this.winner = this.checkWin();
    },
    checkWin: function () {
        var boxes = this.getBoxes();
        for (var x = 0; x < 3; x++) {
            if (( boxes[x][0] !== null) &&
                ( boxes[x][1] === boxes[x][0]) &&
                ( boxes[x][2] === boxes[x][0]))
                return boxes[x][0];
            if (( boxes[0][x] !== null) &&
                ( boxes[1][x] === boxes[0][x]) &&
                ( boxes[2][x] === boxes[0][x]))
                return boxes[0][x];
        }
        if (( boxes[0][0] !== null) &&
            ( boxes[1][1] === boxes[0][0]) &&
            ( boxes[2][2] === boxes[0][0]))
            return boxes[0][0];
        if (( boxes[0][2] !== null) &&
            ( boxes[1][1] === boxes[0][2]) &&
            ( boxes[2][0] === boxes[0][2]))
            return boxes[0][2];
        var count = 0;
        for(var x = 0; x < 3; x++){
            for(var y = 0; y < 3; y++){
                  count += (boxes[x][y] === null)?1:0;
            }
        }
        if (count === 0) return 'c';
        return null;

    },
    /**
     * clears board for new game
     */
    clear : function(){
        this.handler.clear();
    },
    /** gets the current player that it is his/her turn
     *
     * @returns {*}
     */
    getPlayer: function () {
        return this.handler.getPlayer();
    },
    getBoard: function () {
        return {
            boxes: this.getBoxes(),
            player: this.getPlayer(),
            winner: this.getWinner()
        };
    },
    toJson: function () {
        return JSON.stringify(this.getBoard());

    }
}

/**
 * this is a data abstract layer so that in memory or db can be used
 */
function memoryDataHandler() {
    this.board = {};
    this.clear();
    this.board.player = (Math.random() * 2 > 1) ? 'x' : 'o';

}

memoryDataHandler.prototype = {
    getBoxes: function () {
        return this.board.boxes;
    },
    setBox: function (x, y, who) {
        this.board.boxes[x][y] = who;
    },
    getPlayer: function () {
        return this.board.player;
    },
    setPlayer: function (who) {
        this.board.player = who;
    },
    clear: function () {
        this.board.boxes = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ];
    }


}


    module.exports = {memoryDataHandler: memoryDataHandler, BoardModel: BoardModel};
