class Notify {
    send(template: string, to: string) {
        console.log(`Sending ${template} to ${to}`);
    }
}

class LogInfo {
    log(message: string) {
        console.log(message);
    }
}

class Template {
    private templates = [
        {name: 'name', template: '<h1>Template!</h1>'},
    ]

    get(name: string) {
        return this.templates.find(t => t.name === name);
    }
}

class NotificationFacade {
    private notify: Notify;
    private logger: LogInfo;
    private template: Template;

    constructor() {
        this.notify = new Notify();
        this.logger = new LogInfo();
        this.template = new Template();
    }

    send(template: string, to: string) {
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
