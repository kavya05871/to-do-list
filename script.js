document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskList = document.getElementById('task-list');
    const newTaskInput = document.getElementById('new-task');

    taskForm.addEventListener('submit', addTask);
    taskList.addEventListener('click', manageTask);

    function addTask(e) {
        e.preventDefault();
        const taskText = newTaskInput.value.trim();
        if (taskText) {
            const li = document.createElement('li');
            li.innerHTML = `
                <span>${taskText}</span>
                <button class="edit">Edit</button>
                <button class="delete">Delete</button>
            `;
            taskList.appendChild(li);
            newTaskInput.value = '';
        }
    }

    function manageTask(e) {
        if (e.target.classList.contains('delete')) {
            deleteTask(e.target);
        } else if (e.target.classList.contains('edit')) {
            editTask(e.target);
        } else if (e.target.tagName === 'LI' || e.target.tagName === 'SPAN') {
            toggleComplete(e.target);
        }
    }

    function deleteTask(button) {
        button.parentElement.remove();
    }

    function editTask(button) {
        const li = button.parentElement;
        const span = li.querySelector('span');
        const newText = prompt('Edit task:', span.textContent);
        if (newText !== null && newText.trim() !== '') {
            span.textContent = newText;
        }
    }

    function toggleComplete(element) {
        const li = element.tagName === 'LI' ? element : element.parentElement;
        li.classList.toggle('completed');
    }
});