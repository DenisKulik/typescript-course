"use strict";
class Lead {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}
class NewLead {
    constructor() {
        this.observers = [];
    }
    attach(observer) {
        const isExist = this.observers.includes(observer);
        if (isExist) {
            return console.log('Lead already exist');
        }
        this.observers.push(observer);
    }
    detach(observer) {
        const observerIndex = this.observers.indexOf(observer);
        if (observerIndex === -1) {
            return;
        }
        this.observers.splice(observerIndex, 1);
    }
    notify() {
        for (const observer of this.observers) {
            observer.update(this);
        }
    }
}
class NotificationService {
    update(subject) {
        if (subject instanceof NewLead) {
            console.log(`New lead notification: ${subject.state.name} - ${subject.state.email}`);
        }
    }
}
class LeadService {
    update(subject) {
        if (subject instanceof NewLead) {
            console.log('LeadService send email to: ' + subject.state.email);
        }
    }
}
const newLead = new NewLead();
newLead.attach(new NotificationService());
newLead.attach(new LeadService());
newLead.state = new Lead('Jane', 'j@j.j');
newLead.notify();
