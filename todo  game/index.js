// Points and level variables
let points = 0;
let level = 1;
const pointsToLevelUp = 10;

// Get DOM elements
const pointsDisplay = document.getElementById('points');
const levelDisplay = document.getElementById('level');
const newTaskInput = document.getElementById('new-task');
const addTaskButton = document.getElementById('add-task');
const taskList = document.getElementById('task-list');

// Add a new task when the "Add Mission" button is clicked
addTaskButton.addEventListener('click', addTask);

function addTask() {
    const taskText = newTaskInput.value.trim();
    if (taskText === '') return; // Don't add if the input is empty

    // Create new task item
    const taskItem = document.createElement('li');
    taskItem.classList.add('task-item');
    taskItem.innerHTML = `
        ${taskText}
        <button onclick="completeTask(this)">Complete</button>
    `;
    
    // Add the task to the list
    taskList.appendChild(taskItem);
    
    // Clear input
    newTaskInput.value = '';
}

// Function to handle completing a task
function completeTask(button) {
    const taskItem = button.parentElement;
    
    // Remove the task from the list
    taskItem.remove();
    
    // Increase points and update the display
    points += 5;
    pointsDisplay.innerText = points;
    
    // Level up if enough points are earned
    if (points >= pointsToLevelUp * level) {
        level++;
        levelDisplay.innerText = level;
    }
}
