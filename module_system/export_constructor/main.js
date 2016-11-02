//file main.js

var Logger = require('./logger');

var dbLogger = new Logger('DB');
dbLogger.info("This is an info");

var accessLogger = new Logger('ACCESS');
accessLogger.verbose("This is a verbose");