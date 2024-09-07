"use strict";
class Task {
    constructor(priority) {
        this.priority = priority;
    }
}
class TaskList {
    constructor() {
        this.tasks = [];
    }
    sortByPriority() {
        this.tasks.sort((a, b) => a.priority - b.priority);
    }
    addTask(task) {
        this.tasks.push(task);
    }
    getTasks() {
        return this.tasks;
    }
    count() {
        return this.tasks.length;
    }
    getIterator() {
        return new PriorityIterator(this);
    }
}
class PriorityIterator {
    constructor(taskList) {
        this.position = 0;
        taskList.sortByPriority();
        this.taskList = taskList;
    }
    current() {
        return this.taskList.getTasks()[this.position];
    }
    next() {
        this.position++;
        return this.taskList.getTasks()[this.position];
    }
    prev() {
        this.position--;
        return this.taskList.getTasks()[this.position];
    }
    index() {
        return this.position;
    }
}
const newTaskList = new TaskList();
newTaskList.addTask(new Task(4));
newTaskList.addTask(new Task(2));
newTaskList.addTask(new Task(3));
const iterator = newTaskList.getIterator();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.current());
console.log(iterator.prev());
