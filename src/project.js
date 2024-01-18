export default class project {
    constructor(title) {
        this.title = title;
        this.tasks = [];
    }

    addTask(givenTask) {
        this.tasks.push(givenTask);
    }

    removeTask(givenTask) {
        // Loop over all of the project's tasks
        for (const [task, index] of this.tasks.entries()) {
            // If task name is equal to the task we want to delete
            if (task.name == givenTask.name) {
                // Delete item at current index
                this.tasks.splice(index, 1);
            }
        }
    }
}
