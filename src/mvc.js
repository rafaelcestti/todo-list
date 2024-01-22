// Models
class projectContainer {
    constructor() {
        this.projects = [];
    }

    addProject(givenProject) {
        this.projects.push(givenProject);
    }

    removeProject(givenProjectID) {
        // Loop over all of the project's tasks
        for (const [index, project] of this.projects.entries()) {
            // If project id is equal to the project id
            if (project.id == givenProjectID) {
                // Delete task at current index
                this.tasks.splice(index, 1);
            }
        }
    }

    selectProject(givenProjectID) {
        // Loop over all of the projects
        for (const project of this.projects) {
            // If project id is equal to the project id
            if (project.id == givenProjectID) {
                // Return the current project
                return project;
            }
        }
    }

    selectTask(givenTaskID) {
        let givenTask = false;
        // Loop over all of the projects
        for (const project of this.projects) {
            // Run select task inside current project and store it in a variable
            givenTask = project.selectTask(givenTaskID);
            // Keep doing this until we get our task
            if (givenTask != false) {
                return givenTask;
            }
        }
    }

    deleteTask(givenTaskID) {
        let givenTask = false;
        // Loop over all of the projects
        for (const project of this.projects) {
            // Run select task inside current project and store it in a variable
            givenTask = project.removeTask(givenTaskID);
            // Keep doing this until we delete our task
            if (givenTask != false) {
                return true;
            }
        }
    }
}

class project {
    constructor(id, title) {
        this.id = id;
        this.title = title;
        this.tasks = [];
    }

    addTask(givenTask) {
        this.tasks.push(givenTask);
    }

    removeTask(givenTaskID) {
        // Loop over all of the project's tasks
        for (const [index, task] of this.tasks.entries()) {
            // If task id is equal to the task id we want to delete
            if (task.id == givenTaskID) {
                // Delete task at current index
                this.tasks.splice(index, 1);
                return true;
            }
        }
        return false;
    }

    selectTask(givenTaskID) {
        // Loop over all of the project's tasks
        for (const task of this.tasks) {
            // If task id is equal to the task id we want to select
            if (task.id == givenTaskID) {
                // Return current task
                return task;
            }
        }
        // If task is not found, return false
        return false;
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
        this.#createEditTaskDialog();
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
        submitButton.setAttribute("class", "taskSubmitButton");

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

    #createEditTaskDialog() {
        const newDialog = document.createElement("dialog");
        newDialog.setAttribute("class", "editTaskDialog");

        const newForm = document.createElement("form");
        newForm.setAttribute("class", "editTaskForm");

        // Create X to delete current task
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete Task";
        deleteButton.setAttribute("class", "deleteTaskButton");
        deleteButton.setAttribute("type", "button");

        // Create title label & input
        const titleLabel = document.createElement("label");
        titleLabel.textContent = "Title";

        const titleInput = document.createElement("input");
        titleInput.setAttribute("type", "text");
        titleInput.setAttribute("id", "editTaskTitle");

        titleLabel.appendChild(titleInput);

        // Create description label & input
        const descriptionLabel = document.createElement("label");
        descriptionLabel.textContent = "Description";

        const descriptionInput = document.createElement("input");
        descriptionInput.setAttribute("type", "text");
        descriptionInput.setAttribute("id", "editTaskDescription");

        descriptionLabel.appendChild(descriptionInput);

        // Create due date label & input
        const dateLabel = document.createElement("label");
        dateLabel.textContent = "Due Date";

        const dateInput = document.createElement("input");
        dateInput.setAttribute("type", "date");
        dateInput.setAttribute("id", "editTaskDate");

        dateLabel.appendChild(dateInput);

        // Create priority label, select, & options
        const priorityLabel = document.createElement("label");
        priorityLabel.textContent = "Priority";

        const prioritySelect = document.createElement("select");
        prioritySelect.setAttribute("class", "prioritySelect");
        prioritySelect.setAttribute("id", "editTaskPriority");

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
        completedInput.setAttribute("id", "editTaskStatus");

        completedLabel.appendChild(completedInput);

        // Create submit button
        const submitButton = document.createElement("button");
        submitButton.textContent = "Submit";
        submitButton.setAttribute("type", "button");
        submitButton.setAttribute("class", "editTaskSubmitButton");

        // Append title label, description label, due date label, priority label, completed label & submit button to newForm
        newForm.append(deleteButton);
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
        newTask.setAttribute("id", `task${givenTask.id}`);
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

        // When user clicks task open up the task in detail
        newTask.addEventListener("click", () => {
            this.showTask(givenTask);
        });

        // Append new tasks to respective tasks container
        tasksContainer.appendChild(newTask);
    }

    editTask(givenTask) {
        const editTask = document.getElementById(`task${givenTask.id}`);

        // Clear html in current task
        editTask.innerHTML = "";

        // Create task title
        const newTaskTitle = document.createElement("h1");
        newTaskTitle.textContent = `${givenTask.title}`;

        // Create task due date
        const newTaskDueDate = document.createElement("h1");
        newTaskDueDate.textContent = `${givenTask.dueDate}`;

        // Append title and due date to our edit task div
        editTask.appendChild(newTaskTitle);
        editTask.appendChild(newTaskDueDate);
    }

    showTask(givenTask) {
        // Grab details for the task
        const taskTitle = givenTask.title;
        const taskDescription = givenTask.description;
        const taskDate = givenTask.dueDate;
        const taskPriority = givenTask.priority;
        const taskStatus = givenTask.status;

        // Grab input elements where we will store the current task details
        const taskTitleInput = document.getElementById("editTaskTitle");
        const taskDescriptionInput = document.getElementById("editTaskDescription");
        const taskDateInput = document.getElementById("editTaskDate");
        const taskPriorityInput = document.getElementById("editTaskPriority");
        const taskStatusInput = document.getElementById("editTaskStatus");

        // Set the value at each input to our current task
        taskTitleInput.value = taskTitle;
        taskDescriptionInput.value = taskDescription;
        taskDateInput.value = taskDate;
        taskPriorityInput.value = taskPriority;
        taskStatusInput.value = taskStatus;

        // Open up the task dialog
        this.showEditTaskDialog(givenTask.id);
    }

    deleteTask(givenTaskID) {
        // Grab the div for the corresponding task
        const deleteTaskDiv = document.getElementById(`task${givenTaskID}`);
        deleteTaskDiv.remove();
    }

    showProjectDialog() {
        const projectDialog = document.querySelector(".projectDialog");
        projectDialog.showModal();
    }

    resetProjectDialog() {
        const projectDialog = document.querySelector(".projectDialog");
        const projectForm = document.querySelector(".projectForm");
        projectDialog.close();
        projectForm.reset();
    }

    showTaskDialog(givenProjectID) {
        // Set the task submit button id to a given project id
        const taskSubmitButton = document.querySelector(".taskSubmitButton");
        taskSubmitButton.setAttribute("id", givenProjectID);
        const taskDialog = document.querySelector(".taskDialog");
        taskDialog.showModal();
    }

    resetTaskDialog() {
        const taskDialog = document.querySelector(".taskDialog");
        const taskForm = document.querySelector(".taskForm");
        taskDialog.close();
        taskForm.reset();
    }

    showEditTaskDialog(givenTaskID) {
        // Set the edit task submit button id to a given task id
        const editTaskSubmitButton = document.querySelector(".editTaskSubmitButton");
        editTaskSubmitButton.setAttribute("id", givenTaskID);
        // Set the delete task button id to a given task id
        const deleteTaskButton = document.querySelector(".deleteTaskButton");
        deleteTaskButton.setAttribute("id", givenTaskID);
        const editTaskDialog = document.querySelector(".editTaskDialog");
        editTaskDialog.showModal();
    }

    resetEditTaskDialog() {
        const editTaskDialog = document.querySelector(".editTaskDialog");
        const editTaskForm = document.querySelector(".editTaskForm");
        editTaskDialog.close();
        editTaskForm.reset();
    }
}

// Controller
class todoController {
    constructor(view) {
        this.elementCounter = 0; // Project/Task ID counter
        this.projects = new projectContainer();
        this.view = view;
        this.#projectEventListeners();
        this.#loadLocalStorage();
    }

    #projectEventListeners() {
        // Sets event listener for new project button
        const newProjectButton = document.querySelector(".newProjectButton");
        newProjectButton.addEventListener("click", () => {
            this.view.showProjectDialog();
        });

        const submitProjectButton = document.querySelector(".projectSubmitButton");
        submitProjectButton.addEventListener("click", () => {
            this.#newProject();
            this.view.resetProjectDialog();
        });

        const submitTaskButton = document.querySelector(".taskSubmitButton");
        submitTaskButton.addEventListener("click", () => {
            this.#newTask(submitTaskButton.id);
            this.view.resetTaskDialog();
        });

        const submitEditTaskButton = document.querySelector(".editTaskSubmitButton");
        submitEditTaskButton.addEventListener("click", () => {
            this.#editTask(submitEditTaskButton.id);
            this.view.resetEditTaskDialog();
        });

        const deleteTaskButton = document.querySelector(".deleteTaskButton");
        deleteTaskButton.addEventListener("click", () => {
            this.#deleteTask(deleteTaskButton.id);
            this.view.resetEditTaskDialog();
        });
    }

    #loadLocalStorage() {
        // Retrieve the projects array stored in local storage
        const localProjects = JSON.parse(localStorage.getItem("projects"));

        // Create new project for each of our local projects
        for (const project of localProjects.projects) {
            // Set title in project dialog
            document.getElementById("projectTitle").value = project.title;
            // Create new project
            this.#newProject();
            // Reset project idalog
            this.view.resetProjectDialog();
            // Store our project ID
            let currentProjectID = this.elementCounter - 1; // element counter - 1 because we incremented it when we created our project

            // Create new task for each task inside our local project
            for (const task of project.tasks) {
                // Set data for each input in task inputs
                document.getElementById("taskTitle").value = task.title;
                document.getElementById("taskDescription").value = task.description;
                document.getElementById("taskDate").value = task.dueDate;
                document.getElementById("taskPriority").value = task.priority;
                document.getElementById("taskStatus").value = task.status;
                // Run new task with our project ID
                this.#newTask(currentProjectID);
                // Reset task dialog
                this.view.resetTaskDialog();
            }
        }
    }

    #newProject() {
        // Grab title from project dialog
        const projectTitle = document.getElementById("projectTitle").value;
        // Creates a new project on backend with a specific id
        const newProject = new project(this.elementCounter, projectTitle);
        // Add project to our projects element
        this.projects.addProject(newProject);
        // Creates a new project on frontend with a specific id
        this.view.createProject(newProject);
        // Add event listener inside project's add task button to show the task dialog
        const addTaskButton = document.getElementById(`addTaskButton${newProject.id}`);
        addTaskButton.addEventListener("click", () => this.view.showTaskDialog(newProject.id));
        // Increment ID counter
        this.elementCounter += 1;
        // Update our projects array in local storage
        localStorage.setItem("projects", JSON.stringify(this.projects));
    }

    #newTask(givenProjectID) {
        // Grab user input for the new task
        const taskTitle = document.getElementById("taskTitle").value;
        const taskDescription = document.getElementById("taskDescription").value;
        const taskDate = document.getElementById("taskDate").value;
        const taskPriority = document.getElementById("taskPriority").value;
        const taskStatus = document.getElementById("taskStatus").value;
        // Creates a new task
        const newTask = new task(this.elementCounter, taskTitle, taskDescription, taskDate, taskPriority);
        // Add our new task to the project given
        const givenProject = this.projects.selectProject(givenProjectID);
        givenProject.addTask(newTask);
        // Creates a new task with a specific id inside a project in frontend
        this.view.createTask(givenProjectID, newTask);
        // Increment ID counter
        this.elementCounter += 1;
        // Update our projects array in local storage
        localStorage.setItem("projects", JSON.stringify(this.projects));
    }

    #editTask(givenTaskID) {
        // Grab user input for the new task
        const taskTitle = document.getElementById("editTaskTitle").value;
        const taskDescription = document.getElementById("editTaskDescription").value;
        const taskDate = document.getElementById("editTaskDate").value;
        const taskPriority = document.getElementById("editTaskPriority").value;
        const taskStatus = document.getElementById("editTaskStatus").value;
        // Select the current task
        const givenTask = this.projects.selectTask(givenTaskID);
        // Set task properties to user's inputs
        givenTask.title = taskTitle;
        givenTask.description = taskDescription;
        givenTask.dueDate = taskDate;
        givenTask.priority = taskPriority;
        givenTask.status = taskStatus;
        // Run edit task in viewer
        this.view.editTask(givenTask);
        // Update our projects array in local storage
        localStorage.setItem("projects", JSON.stringify(this.projects));
    }

    #deleteTask(givenTaskID) {
        // Remove task with given ID in the backend
        this.projects.deleteTask(givenTaskID);
        // Remove task with given ID in the frontend
        this.view.deleteTask(givenTaskID);
        // Update our projects array in local storage
        localStorage.setItem("projects", JSON.stringify(this.projects));
    }
}

export { todoView, todoController };
