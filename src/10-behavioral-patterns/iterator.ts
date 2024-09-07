class Task {
    constructor(public priority: number) {}
}

class TaskList {
    private tasks: Task[] = []

    public sortByPriority() {
        this.tasks.sort((a, b) => a.priority - b.priority)
    }

    public addTask(task: Task) {
        this.tasks.push(task)
    }

    public getTasks() {
        return this.tasks
    }

    public count() {
        return this.tasks.length
    }

    public getIterator() {
        return new PriorityIterator(this)
    }
}

interface IIterator<T> {
    current(): T | undefined
    next(): T | undefined
    prev(): T | undefined
    index(): number
}

class PriorityIterator implements IIterator<Task> {
    private position: number = 0
    private taskList: TaskList

    constructor(taskList: TaskList) {
        taskList.sortByPriority()
        this.taskList = taskList
    }

    current(): Task | undefined {
        return this.taskList.getTasks()[this.position]
    }

    next(): Task | undefined {
        this.position++
        return this.taskList.getTasks()[this.position]
    }

    prev(): Task | undefined {
        this.position--
        return this.taskList.getTasks()[this.position]
    }

    index(): number {
        return this.position
    }
}

const newTaskList = new TaskList()
newTaskList.addTask(new Task(4))
newTaskList.addTask(new Task(2))
newTaskList.addTask(new Task(3))

const iterator = newTaskList.getIterator()
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.current())
console.log(iterator.prev())

