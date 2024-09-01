"use strict";
class Notify {
    send(template, to) {
        console.log(`Sending ${template} to ${to}`);
    }
}
class LogInfo {
    log(message) {
        console.log(message);
    }
}
class Template {
    constructor() {
        this.templates = [
            { name: 'name', template: '<h1>Template!</h1>' },
        ];
    }
    get(name) {
        return this.templates.find(t => t.name === name);
    }
}
class NotificationFacade {
    constructor() {
        this.notify = new Notify();
        this.logger = new LogInfo();
        this.template = new Template();
    }
    send(template, to) {
        const templateInfo = this.template.get(template);
        if (!templateInfo) {
            this.logger.log('Template not found');
            return;
        }
        this.notify.send(templateInfo.template, to);
    }
}
const s = new NotificationFacade();
s.send('name', 'to');
