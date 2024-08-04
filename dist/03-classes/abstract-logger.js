"use strict";
class Logger {
    printDate(date) {
        this.log(date.toString());
    }
}
class ConsoleLogger extends Logger {
    log(message) {
        console.log(message);
    }
    logWithDate(message) {
        this.printDate(new Date());
        this.log(message);
    }
}
const logger = new ConsoleLogger();
logger.logWithDate('Hello');
