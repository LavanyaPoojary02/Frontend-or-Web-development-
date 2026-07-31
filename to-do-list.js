const input = document.getElementById("taskInput");
const addbtn = document.getElementById("addBtn");
const tasklist = document.getElementById("taskList");
addbtn.addEventListener("click", function() {
    const taskText = input.value;
    const li = document.createElement("li");
    li.textContent = taskText;
    tasklist.appendChild(li);
});
