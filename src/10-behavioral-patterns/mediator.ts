interface IMediator {
    notify(sender: string, event: string): void;
}

abstract class Mediated {
    mediator: IMediator;

    setMediator(mediator: IMediator) {
        this.mediator = mediator;
    }
}

class Notifications {
    send() {
        console.log('send');
    }
}

class LogClass {
    log(message: string) {
        console.log(message);
    }
}

class EventHandler extends Mediated {
    someEvent() {
        this.mediator.notify('EventHandler', 'someEvent');
    }
}

class NotificationMediator implements IMediator {

    constructor(
        private handler: EventHandler,
        private logger: LogClass,
        private notifications: Notifications
    ) {}

    notify(sender: string, event: string) {
        if (event === 'someEvent') {
            this.notifications.send();
            this.logger.log(`someEvent from ${sender}`);
        }
    }
}

const handler = new EventHandler();
const log = new LogClass();
const notifications = new Notifications();

const m = new NotificationMediator(
    handler,
    log,
    notifications
)
handler.setMediator(m)
handler.someEvent()