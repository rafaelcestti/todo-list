import "./static/reset.css";
import "./static/style.css";
import { todoView, todoController } from "./mvc.js";

let viewTest = new todoView();
let controllerTest = new todoController(viewTest);
