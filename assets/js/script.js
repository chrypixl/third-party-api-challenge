const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let nextId = JSON.parse(localStorage.getItem("nextId")) || 1;

$(document).ready(function() {
  $("#taskDueDate").datepicker({
  showOn: "focus"
  });
  renderTasks();
  $('#taskForm').on("submit", submitHandler);
});



// Todo: create a function to generate a unique task id
function submitHandler(event) {
  event.preventDefault();

  const taskTitle = $('#taskTitle').val();
  const taskDueDate = $('#taskDueDate').val();
  const taskDescription = $('#taskDescription').val();

  const task = {
    id: nextId,
    title: taskTitle,
    dueDate: taskDueDate,
    description: taskDescription
  };

  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  localStorage.setItem("nextId", nextId + 1);

  createTaskCard(task);
  $('#taskTitle').val('');
  $('#taskDueDate').val('');
  $('#taskDescription').val('');
  renderTasks();
};

// Todo: create a function to create a task card
function createTaskCard(task) {
return `<div class="card">
    <div class="card-header">
      <h2 class="card-title">${task.title}</h2>
    </div>
    <div class="card-body">
      <h3 class="date">${task.dueDate}</h3>
      <p class="card-content">${task.description}</p>
    </div>
    <div>
      <button type="button" class="btn btn-delete" id="delete-btn" data-bs-dismiss="modal">Delete Task</button>
    </div>  
  </div>`;
};




// Todo: create a function to render the task list and make cards draggable
function renderTasks() {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  const todoList = $("#todo-cards");
  todoList.empty();
  tasks.forEach(task => {
    todoList.append(createTaskCard(task));
  });

  $('.card').draggable({
    revert: 'invalid',
    cursor: 'move',
    containment: 'document',
    scroll: false
  });
};

// Todo: create a function to handle adding a new task


// Todo: create a function to handle deleting a task
$(document).on("click", ".btn-delete", function() {
  $(this).closest(".card").remove();
});

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {

});
