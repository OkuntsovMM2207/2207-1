function addTask() {
    const inputValue = document.getElementById('task-input').value;
    if (inputValue.trim() !== '') {
      const taskList = document.getElementById('task-list');
      const newTask = document.createElement('li');
      newTask.textContent = inputValue;
  
      // Create close button
      const closeButton = document.createElement('button');
      closeButton.classList.add('close-button');
      closeButton.innerHTML = "&#10006";
      closeButton.onclick = function() {
        newTask.style.display = "none";
      };
      newTask.appendChild(closeButton);
  
      taskList.appendChild(newTask);
      document.getElementById('task-input').value = '';
  
      newTask.onclick = function() {
        if (newTask.classList.contains('checked')) {
          newTask.classList.remove('checked');
        } else {
          newTask.classList.add('checked');
        }
      };
    }
  }
