// Simple CRUD task management system
let tasks = [];

function addTask(id, name, description) {
    tasks.push({ id, name, description });
}

function getTasks() {
    return tasks;
}

function updateTask(id, newName, newDescription) {
    const task = tasks.find(task => task.id === id);
    if (task) {
        task.name = newName;
        task.description = newDescription;
    }
}

function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
}

// Example usage
addTask(1, 'Study', 'Prepare for the exam');
addTask(2, 'Exercise', 'Go to the gym');
updateTask(1, 'Study', 'Review JavaScript');
deleteTask(2);

console.log(getTasks());
