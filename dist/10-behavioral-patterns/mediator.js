"use strict";
class Mediated {
    setMediator(mediator) {
        this.mediator = mediator;
    }
}
class Notifications {
    send() {
        console.log('send');
    }
}
class LogClass {
    log(message) {
        console.log(message);
    }
}
class EventHandler extends Mediated {
    someEvent() {
        this.mediator.notify('EventHandler', 'someEvent');
    }
}
class NotificationMediator {
    constructor(handler, logger, notifications) {
        this.handler = handler;
        this.logger = logger;
        this.notifications = notifications;
    }
    notify(sender, event) {
        if (event === 'someEvent') {
            this.notifications.send();
            this.logger.log(`someEvent from ${sender}`);
        }
    }
}
const handler = new EventHandler();
const log = new LogClass();
const notifications = new Notifications();
const m = new NotificationMediator(handler, log, notifications);
handler.setMediator(m);
handler.someEvent();
