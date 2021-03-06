// Argument parsing using the optimist module
module.exports = require('optimist')
    .usage('Usage: $0 --port [port]')
    .alias('port', 'p')
    .describe('port', 'Port number for the Express application.')
    .default('port', process.env.PORT || 8080)
    .argv;
