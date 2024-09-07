class UserItem {
    constructor(public userId: number) {
    }
}

class CommandHistory {
    public commands: Command[] = []

    addCommand(command: Command) {
        this.commands.push(command)
    }

    removeCommand(command: Command) {
        this.commands = this.commands.filter(c => c !== command)
    }
}

abstract class Command {
    public commandId: number

    abstract execute(): void

    protected constructor(public history: CommandHistory) {
        this.commandId = Math.random()
    }
}

class AddUserCommand extends Command {
    constructor(
        public user: UserItem,
        private receiver: UsersService,
        history: CommandHistory
    ) {
        super(history)
    }

    execute() {
        this.receiver.saveUser(this.user)
        this.history.addCommand(this)
    }

    undo() {
        this.receiver.deleteUser(this.user.userId)
        this.history.removeCommand(this)
    }
}

class UsersService {
    saveUser(user: UserItem) {
        console.log(`Saved user ${user.userId}`)
    }

    deleteUser(userId: number) {
        console.log(`Deleted user ${userId}`)
    }
}

class ControllerClass {
    receiver: UsersService;
    history: CommandHistory = new CommandHistory()

    addReceiver(receiver: UsersService) {
        this.receiver = receiver
    }

    run() {
        const addUserCommand = new AddUserCommand(
            new UserItem(1),
            this.receiver,
            this.history
        )
        addUserCommand.execute()
        console.log(addUserCommand.history)
        addUserCommand.undo()
        console.log(addUserCommand.history)
    }
}


const newController = new ControllerClass()
newController.addReceiver(new UsersService())
newController.run()