interface IProvider {
    sendMessage(message: string): void;

    connect(config: unknown): void;

    disconnect(): void;
}

class TelegramProvider implements IProvider {
    sendMessage(message: string) {
        console.log(`Telegram: ${message}`);
    }

    connect<T>(config: T) {
        console.log(`Telegram: Connected with ${config}`);
    }

    disconnect() {
        console.log(`Telegram: Disconnected`);
    }
}


class WhatsAppProvider implements IProvider {
    sendMessage(message: string) {
        console.log(`WhatsApp: ${message}`);
    }

    connect<T>(config: T) {
        console.log(`WhatsApp: Connected with ${config}`);
    }

    disconnect() {
        console.log(`WhatsApp: Disconnected`);
    }
}

class NotificationSender {
    private provider: IProvider;

    constructor(provider: IProvider) {
        this.provider = provider;
    }

    send(message: string) {
        this.provider.connect(message);
        this.provider.sendMessage(message);
        this.provider.disconnect();
    }
}

class DelayedNotificationSender extends NotificationSender {
    private delay: number;
    constructor(provider: IProvider, delay: number) {
        super(provider);
        this.delay = delay;
    }

    sendDelay(message: string) {
        setTimeout(() => {
            this.send(message);
        }, this.delay);
    }
}

const sender = new NotificationSender(new TelegramProvider());
sender.send('Hello, World!');
const delayedSender = new DelayedNotificationSender(new TelegramProvider(), 3000);
delayedSender.sendDelay('Hello, World!');