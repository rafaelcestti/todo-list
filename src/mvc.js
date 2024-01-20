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
export default class todoView {
    // Creates our basic HTML elements, both dialogs for creating projects/tasks, the nav, and the main section
    constructor() {
        this.body = document.querySelector("body");
        this.createProjectDialog();
        this.createTaskDialog();
    }

    createProjectDialog() {
        const newDialog = document.createElement("dialog");
        newDialog.setAttribute("class", "projectDialog");
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
        submitButton.setAttribute("class", "projectSubmitButton");

        // Append title label & submit button to newForm
        newForm.appendChild(titleLabel);
        newForm.appendChild(submitButton);

        // Append our form to our dialog
        newDialog.appendChild(newForm);

        // Append our dialog to the body
        this.body.appendChild(newDialog);
    }

    createTaskDialog() {
        const newDialog = document.createElement("dialog");
        newDialog.setAttribute("class", "taskDialog");
        const newForm = document.createElement("form");

        // Create title label & input
        const titleLabel = document.createElement("label");
        titleLabel.textContent = "Title";

        const titleInput = document.createElement("input");
        titleInput.setAttribute("type", "text");

        titleLabel.appendChild(titleInput);

        // Create description label & input
        const descriptionLabel = document.createElement("label");
        descriptionLabel.textContent = "Description";

        const descriptionInput = document.createElement("input");
        descriptionInput.setAttribute("type", "text");

        descriptionLabel.appendChild(descriptionInput);

        // Create due date label & input
        const dateLabel = document.createElement("label");
        dateLabel.textContent = "Due Date";

        const dateInput = document.createElement("input");
        dateInput.setAttribute("type", "date");

        dateLabel.appendChild(dateInput);

        // Create priority label, select, & options
        const priorityLabel = document.createElement("label");
        priorityLabel.textContent = "Priority";

        const prioritySelect = document.createElement("select");
        prioritySelect.setAttribute("class", "prioritySelect");

        const priorityOptionOne = document.createElement("option");
        priorityOptionOne.textContent = "!";
        priorityOptionOne.setAttribute("value", "!");

        const priorityOptionTwo = document.createElement("option");
        priorityOptionTwo.textContent = "!!";
        priorityOptionTwo.setAttribute("value", "!!");

        const priorityOptionThree = document.createElement("option");
        priorityOptionThree.textContent = "!!!";
        priorityOptionThree.setAttribute("value", "!!!");

        // Append our three options to our select element
        prioritySelect.appendChild(priorityOptionOne);
        prioritySelect.appendChild(priorityOptionTwo);
        prioritySelect.appendChild(priorityOptionThree);

        priorityLabel.appendChild(prioritySelect);

        // Create completed label & input
        const completedLabel = document.createElement("label");
        completedLabel.textContent = "Completed?";

        const completedInput = document.createElement("input");
        completedInput.setAttribute("type", "checkbox");

        completedLabel.appendChild(completedInput);

        // Create submit button
        const submitButton = document.createElement("button");
        submitButton.textContent = "Submit";
        submitButton.setAttribute("type", "button");
        submitButton.setAttribute("class", "projectSubmitButton");

        // Append title label, description label, due date label, priority label, completed label & submit button to newForm
        newForm.appendChild(titleLabel);
        newForm.appendChild(descriptionLabel);
        newForm.appendChild(dateLabel);
        newForm.appendChild(priorityLabel);
        newForm.appendChild(completedLabel);
        newForm.appendChild(submitButton);

        // Append our form to our dialog
        newDialog.appendChild(newForm);

        // Append our dialog to the body
        this.body.appendChild(newDialog);
    }
}
