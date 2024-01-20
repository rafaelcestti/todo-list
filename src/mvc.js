/*
// Models
class project {
    constructor(id, title) {
        this.id = id;
        this.title = title;
        this.tasksID = 0;
        this.tasks = [];
    }

    addTask(givenTitle, givenDescription, givenDueDate, givenPriority) {
        const newTask = new task(this.tasksID, givenTitle, givenDescription, givenDueDate, givenPriority);
        this.tasks.push(newTask);
        this.tasksID += 1;
    }

    removeTask(givenTaskID) {
        // Loop over all of the project's tasks
        for (const [task, index] of this.tasks.entries()) {
            // If task id is equal to the task id we want to delete
            if (task.id == givenTaskID) {
                // Delete task at current index
                this.tasks.splice(index, 1);
            }
        }
    }

class task {
    constructor(id, title, description, dueDate, priority) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.status = false;
    }

    changeStatus() {
        this.status = !this.status;
    }
}

// View
class todoView {
    constructor() {
        this.main = document.querySelector()
    }
}












*/
