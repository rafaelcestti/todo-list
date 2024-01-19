import "./static/reset.css";
import "./static/style.css";
import task from "./task.js";
import project from "./project.js";

let test = new task("test task", "hi this isn't real", "1/1/2001", "!!!");
let testTwo = new task("i want to be in the middle", "im just yapping", "21/1/2005", "!");
let exampleProject = new project("example project");

// This will be deleted

exampleProject.addTask(test);
exampleProject.addTask(testTwo);

exampleProject.removeTask(test);

console.log(exampleProject);
