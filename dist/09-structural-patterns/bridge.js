"use strict";
class TelegramProvider {
    sendMessage(message) {
        console.log(`Telegram: ${message}`);
    }
    connect(config) {
        console.log(`Telegram: Connected with ${config}`);
    }
    disconnect() {
        console.log(`Telegram: Disconnected`);
    }
}
class WhatsAppProvider {
    sendMessage(message) {
        console.log(`WhatsApp: ${message}`);
    }
    connect(config) {
        console.log(`WhatsApp: Connected with ${config}`);
    }
    disconnect() {
        console.log(`WhatsApp: Disconnected`);
    }
}
class NotificationSender {
    constructor(provider) {
        this.provider = provider;
    }
    send(message) {
        this.provider.connect(message);
        this.provider.sendMessage(message);
        this.provider.disconnect();
    }
}
class DelayedNotificationSender extends NotificationSender {
    constructor(provider, delay) {
        super(provider);
        this.delay = delay;
    }
    sendDelay(message) {
        setTimeout(() => {
            this.send(message);
        }, this.delay);
    }
}
const sender = new NotificationSender(new TelegramProvider());
sender.send('Hello, World!');
const delayedSender = new DelayedNotificationSender(new TelegramProvider(), 3000);
delayedSender.sendDelay('Hello, World!');
