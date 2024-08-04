/* Необходимо реализовать абстрактный класс Logger с 2-мя методами
абстрактным - log(message): void
    printDate - выводящий в log дату
К нему необходимо сделать реальный класс, который бы имел метод: logWithDate,
    выводящий сначала дату, а потом заданное сообщение */

abstract class Logger {
    abstract log(message: any): void

    printDate(date: Date): void {
        this.log(date.toString())
    }
}

class ConsoleLogger extends Logger {
    log(message: string): void {
        console.log(message)
    }

    logWithDate(message: string): void {
        this.printDate(new Date())
        this.log(message)
    }
}

const logger = new ConsoleLogger()
logger.logWithDate('Hello')