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
*/

// View
class todoView {
    // Creates our basic HTML elements, both dialogs for creating projects/tasks, the nav, and the main section
    constructor() {
        this.body = document.querySelector("body");
        this.createProjectDialog();
    }

    createProjectDialog() {
        const newDialog = document.createElement("dialog");
        const newForm = document.createElement("form");

        // Create title label & input
        const titleLabel = document.createElement("label");
        titleLabel.textContent = "Title";

        const titleInput = document.createElement("input");
        titleInput.setAttribute("type", "text");

        titleLabel.appendChild(titleInput);

        // Create submit button
        const submitButton = document.createElement("button");
        submitButton.textContent = "Submit";
        submitButton.setAttribute("type", "button");

        // Append title label & submit button to newForm
        newForm.appendChild(titleLabel);
        newForm.appendChild(submitButton);

        // Append our form to our dialog
        newDialog.appendChild(newForm);

        // Append our dialog to the body
        this.body.appendChild(newDialog);
    }
}
