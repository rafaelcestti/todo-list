// Models
class project {
    constructor(id, title) {
        this.id = id;
        this.title = title;
        this.tasks = [];
    }

    addTask(givenTask) {
        this.tasks.push(newTask);
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
    // Creates our basic HTML elements, both dialogs for creating projects/tasks, the nav, and the main section
    constructor() {
        this.body = document.querySelector("body");
        this.#createProjectDialog();
        this.#createTaskDialog();
        this.#createNav();
        this.#createMain();
        this.main = document.querySelector("main"); // Will be used when creating new projects/tasks
    }

    #createProjectDialog() {
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

    #createTaskDialog() {
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

    #createNav() {
        const newNav = document.createElement("nav");

        // Create "Todo List" text
        const newH1 = document.createElement("h1");
        newH1.textContent = "Todo List";

        // Create "New Project" text
        const newH2 = document.createElement("h2");
        newH2.textContent = "New Project";

        // Append both to our nav
        newNav.appendChild(newH1);
        newNav.appendChild(newH2);

        // Append nav to the body
        this.body.appendChild(newNav);
    }

    #createMain() {
        const newMain = document.createElement("main");

        this.body.appendChild(newMain);
    }

    createProject(givenProject) {
        const newProject = document.createElement("div");
        newProject.setAttribute("class", "project");

        // Create project title
        const newProjectTitle = document.createElement("h1");
        newProjectTitle.textContent = `${givenProject.title}`;
        newProjectTitle.setAttribute("class", "title");

        // Create "Add Task" button
        const addTaskButton = document.createElement("button");
        addTaskButton.textContent = "Add Task";
        addTaskButton.setAttribute("id", `addTaskButton${givenProject.id}`); // Set project id to the add task button for our event listener

        // Append button to the title's h1 container
        newProjectTitle.appendChild(addTaskButton);

        // Create tasks container
        const tasksContainer = document.createElement("div");
        tasksContainer.setAttribute("class", "tasks");

        tasksContainer.setAttribute("id", `tasksContainer${givenProject.id}`); // Set project ID to the tasks container as this is where we will append the tasks for the project

        // Append project title and tasks container to project div
        newProject.appendChild(newProjectTitle);
        newProject.appendChild(tasksContainer);

        // Append project to main
        this.main.appendChild(newProject);
    }

    createTask(projectID, givenTask) {
        const tasksContainer = document.getElementById(`tasksContainer${projectID}`);
        const newTask = document.createElement("div");
        newTask.setAttribute("id", `${givenTask.id}`);
        newTask.setAttribute("class", "task");

        // Create task title
        const newTaskTitle = document.createElement("h1");
        newTaskTitle.textContent = `${givenTask.title}`;

        // Create task due date
        const newTaskDueDate = document.createElement("h1");
        newTaskDueDate.textContent = `${givenTask.dueDate}`;

        // Append title and due date to our new task
        newTask.appendChild(newTaskTitle);
        newTask.appendChild(newTaskDueDate);

        // Append new tasks to respective tasks container
        tasksContainer.appendChild(newTask);
    }
}

/*
// Controller
class todoController() {
    constructor() {
        // Project ID counter
        // Task ID counter
        // Sets event listener for new project button
        // Sets event listener for new task button
    }

    newProject() {
        // Creates a new project on backend with a specific id
        // Creates a new project on frontend with a specific id
    }

    newTask() {
        // Creates a new task with a specific id inside a project in backend 
        // Creates a new task with a specific id inside a project in frontend 
    }
}
*/

export { project, task, todoView };
