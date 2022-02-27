const CONST_TASKS = "todo_app_tasks";
const input = document.getElementById("taskNameInput");
let tasks = JSON.parse(localStorage.getItem(CONST_TASKS)) || [];
const form = document.getElementById("taskForm");
const tasksSection = document.querySelector(".tasks-section");

const saveTasks = () => {
  localStorage.setItem(CONST_TASKS, JSON.stringify(tasks));
};

const addTask = (task) => {
  let id;
  if (tasks.length > 0) {
    id = tasks[tasks.length - 1].id + 1;
  } else {
    id = 1;
  }
  if (task !== "") {
    tasks.push({ title: task, id: id });
    saveTasks();
    refreshTasks();
    input.value = "";
    input.focus();
  }
};

const refreshTasks = () => {
  let html = tasks
    .slice()
    .reverse()
    .map((task) => {
      return `
            <div class="task">
                <div class="title">
                    <h4>${task.title}</h4>
                </div>
                <div class="delContainer">
                    <button class="btn" onclick="delItem(${task.id})">Delete</button>
                </div>
            </div>
        `;
    });
  tasksSection.innerHTML = html.join("");
};

const delItem = (id) => {
  tasks = tasks.filter(function (task) {
    return parseInt(id) !== parseInt(task.id);
  });
  saveTasks();
  refreshTasks();
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  addTask(input.value);
});

refreshTasks();
