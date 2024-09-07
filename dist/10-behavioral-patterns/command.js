"use strict";
class UserItem {
    constructor(userId) {
        this.userId = userId;
    }
}
class CommandHistory {
    constructor() {
        this.commands = [];
    }
    addCommand(command) {
        this.commands.push(command);
    }
    removeCommand(command) {
        this.commands = this.commands.filter(c => c !== command);
    }
}
class Command {
    constructor(history) {
        this.history = history;
        this.commandId = Math.random();
    }
}
class AddUserCommand extends Command {
    constructor(user, receiver, history) {
        super(history);
        this.user = user;
        this.receiver = receiver;
    }
    execute() {
        this.receiver.saveUser(this.user);
        this.history.addCommand(this);
    }
    undo() {
        this.receiver.deleteUser(this.user.userId);
        this.history.removeCommand(this);
    }
}
class UsersService {
    saveUser(user) {
        console.log(`Saved user ${user.userId}`);
    }
    deleteUser(userId) {
        console.log(`Deleted user ${userId}`);
    }
}
class ControllerClass {
    constructor() {
        this.history = new CommandHistory();
    }
    addReceiver(receiver) {
        this.receiver = receiver;
    }
    run() {
        const addUserCommand = new AddUserCommand(new UserItem(1), this.receiver, this.history);
        addUserCommand.execute();
        console.log(addUserCommand.history);
        addUserCommand.undo();
        console.log(addUserCommand.history);
    }
}
const newController = new ControllerClass();
newController.addReceiver(new UsersService());
newController.run();
