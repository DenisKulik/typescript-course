interface Observer {
    update(subject: Subject): void;
}

interface Subject {
    attach(observer: Observer): void;
    detach(observer: Observer): void;
    notify(): void;
}

class Lead {
    constructor(public name: string, public email: string) {}
}

class NewLead implements Subject {
    private observers: Observer[] = [];
    public state: Lead

    attach(observer: Observer): void {
        const isExist = this.observers.includes(observer);
        if (isExist) {
            return console.log('Lead already exist');
        }
        this.observers.push(observer);
    }

    detach(observer: Observer): void {
        const observerIndex = this.observers.indexOf(observer);
        if (observerIndex === -1) {
            return
        }
        this.observers.splice(observerIndex, 1);
    }

    notify(): void {
        for (const observer of this.observers) {
            observer.update(this);
        }
    }
}

class NotificationService implements Observer {
    update(subject: Subject): void {
        if (subject instanceof NewLead) {
            console.log(`New lead notification: ${subject.state.name} - ${subject.state.email}`);
        }
    }
}

class LeadService implements Observer {
    update(subject: Subject): void {
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

