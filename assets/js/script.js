// Retrieve tasks and nextId from localStorage
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let nextId = JSON.parse(localStorage.getItem("nextId")) || 1;

$(document).ready(function() {
  $("#taskDueDate").datepicker({
  showOn: "focus"
  });
  renderTasks();
});



// Todo: create a function to generate a unique task id
$('#taskForm').submit(function(event) {
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

  createTaskCard(taskTitle, taskDueDate, taskDescription);
  $('#taskTitle').val('');
  $('#taskDueDate').val('');
  $('#taskDescription').val('');
  renderTasks();
});

// Todo: create a function to create a task card
function createTaskCard(title, dueDate, description) {
$('#tasks').append(
  `<div class="card">
    <div class="card-header">
      <h2 class="card-title">${title}</h2>
    </div>
    <div class="card-body">
      <h3 class="date">${dueDate}</h3>
      <p class="card-content">${description}</p>
    </div>
  </div>
  `);
};




// Todo: create a function to render the task list and make cards draggable
function renderTasks() {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  $('#taskList').empty();
  tasks.forEach(task => {
    createTaskCard(task.title, task.description, task.dueDate);
  });

  $('.card').draggable({
    revert: 'invalid',
    cursor: 'move',
    containment: 'document',
    scroll: false
  });
};

// Todo: create a function to handle adding a new task
function handleAddTask(event){

}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event){

}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {

});
