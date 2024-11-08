const form = document.getElementById("form");
const input = document.getElementById("input");
const list = document.getElementById("list");

// Vazifa qo'shish funksiyasi
form.addEventListener("submit", function (e) {
    e.preventDefault();
    const taskText = input.value.trim();
    if (taskText !== "") {
        addTask(taskText);
        input.value = ""; // Input maydonini tozalash
    }
});

// Vazifa qo'shish
function addTask(text) {
    const li = document.createElement("li");

    const span = document.createElement("span");
    span.className = "text";
    span.innerText = text;
    li.appendChild(span);

    // O'chirish tugmasi
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete_btn";
    deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
    deleteBtn.addEventListener("click", function () {
        li.remove();
    });
    li.appendChild(deleteBtn);

    // Checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "delete_check";
    checkbox.addEventListener("change", function () {
        span.style.textDecoration = checkbox.checked ? "line-through" : "none";
    });
    li.appendChild(checkbox);

    // Tahrirlash tugmasi
    const editBtn = document.createElement("button");
    editBtn.className = "edit_btn";
    editBtn.innerHTML = '<i class="fas fa-edit"></i>';
    editBtn.addEventListener("click", function () {
        editTask(span);
    });
    li.appendChild(editBtn);

    list.appendChild(li);
}

// Vazifani tahrirlash
function editTask(span) {
    const currentText = span.innerText;
    const newText = prompt("Edit the task:", currentText);
    if (newText !== null && newText.trim() !== "") {
        span.innerText = newText.trim();
    }
}
