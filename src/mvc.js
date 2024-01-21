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
        newForm.setAttribute("class", "projectForm");

        // Create title label & input
        const titleLabel = document.createElement("label");
        titleLabel.textContent = "Title";

        const titleInput = document.createElement("input");
        titleInput.setAttribute("type", "text");
        titleInput.setAttribute("id", "projectTitle");

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
        newForm.setAttribute("class", "taskForm");

        // Create title label & input
        const titleLabel = document.createElement("label");
        titleLabel.textContent = "Title";

        const titleInput = document.createElement("input");
        titleInput.setAttribute("type", "text");
        titleInput.setAttribute("id", "taskTitle");

        titleLabel.appendChild(titleInput);

        // Create description label & input
        const descriptionLabel = document.createElement("label");
        descriptionLabel.textContent = "Description";

        const descriptionInput = document.createElement("input");
        descriptionInput.setAttribute("type", "text");
        descriptionInput.setAttribute("id", "taskDescription");

        descriptionLabel.appendChild(descriptionInput);

        // Create due date label & input
        const dateLabel = document.createElement("label");
        dateLabel.textContent = "Due Date";

        const dateInput = document.createElement("input");
        dateInput.setAttribute("type", "date");
        dateInput.setAttribute("id", "taskDate");

        dateLabel.appendChild(dateInput);

        // Create priority label, select, & options
        const priorityLabel = document.createElement("label");
        priorityLabel.textContent = "Priority";

        const prioritySelect = document.createElement("select");
        prioritySelect.setAttribute("class", "prioritySelect");
        prioritySelect.setAttribute("id", "taskPriority");

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
        completedInput.setAttribute("id", "taskStatus");

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
        newH2.setAttribute("class", "newProjectButton");

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

    showProjectDialog() {
        const projectDialog = document.querySelector(".projectDialog");
        projectDialog.showModal();
    }

    resetProjectDialog() {
        const projectForm = document.querySelector(".projectForm");
        projectForm.reset();
    }

    showTaskDialog() {
        const taskDialog = document.querySelector(".taskDialog");
        taskDialog.showModal();
    }

    resetTaskDialog() {
        const taskForm = document.querySelector(".taskForm");
        taskForm.reset();
    }
}

// Controller
class todoController {
    constructor(project, task, view) {
        // Project/Task ID counter
        let elementCounter = 0;
        this.projects = [];
        this.projectClass = project;
        this.taskClass = task;
        this.view = view;
    }

    projectEventListeners() {
        // Sets event listener for new project button
        const newProjectButton = document.querySelector(".newProjectButton");
        newProjectButton.addEventListener("click", () => {
            view.showProjectDialog();
        });

        const submitProjectButton = document.querySelector(".projectSubmitButton");
        submitProjectButton.addEventListener("click", () => {
            this.newProject();
            this.view.resetProjectDialog();
        });
    }

    newProject() {
        // Grab title from project dialog
        // Creates a new project on backend with a specific id
        // Creates a new project on frontend with a specific id
        // Add event listener inside project's add task button to run newTask() with new project's id
        // Increment ID counter
    }

    newTask() {
        // Creates a new task with a specific id inside a project in backend
        // Creates a new task with a specific id inside a project in frontend
    }
}
/*
 */

export { project, task, todoView, todoController };

// TODO: Add specific ID's to all our form inputs, then fill out the rest of the pseudocode inside the controller
