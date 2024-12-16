const form = document.getElementById("form");
const input = document.getElementById("input");
const list = document.getElementById("list");

const editModal = document.getElementById("editModal");
const editInput = document.getElementById("editInput");
const saveBtn = document.getElementById("saveBtn");
const cancelBtn = document.getElementById("cancelBtn");

let currentTaskSpan = null;

form.addEventListener("submit", function (e) {
    e.preventDefault();
    const taskText = input.value.trim();
    if (taskText !== "") {
        addTask(taskText);
        input.value = "";
    }
});

function addTask(text) {
    const li = document.createElement("li");

    const span = document.createElement("span");
    span.className = "text";
    span.innerText = text;
    li.appendChild(span);

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete_btn";
    deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
    deleteBtn.addEventListener("click", function () {
        li.remove();
    });
    li.appendChild(deleteBtn);

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "delete_check";
    checkbox.addEventListener("change", function () {
        span.style.textDecoration = checkbox.checked ? "line-through" : "none";
    });
    li.appendChild(checkbox);

    const editBtn = document.createElement("button");
    editBtn.className = "edit_btn";
    editBtn.innerHTML = '<i class="fas fa-edit"></i>';
    editBtn.addEventListener("click", function () {
        openModal(span);
    });
    li.appendChild(editBtn);

    list.appendChild(li);
}

function openModal(taskSpan) {
    currentTaskSpan = taskSpan;
    editInput.value = taskSpan.innerText;
    editModal.style.display = "flex";
}

function closeModal() {
    editModal.style.display = "none";
    currentTaskSpan = null;
}

saveBtn.addEventListener("click", function () {
    if (currentTaskSpan && editInput.value.trim() !== "") {
        currentTaskSpan.innerText = editInput.value.trim();
    }
    closeModal();
});

cancelBtn.addEventListener("click", closeModal);

window.addEventListener("click", function (e) {
    if (e.target === editModal) {
        closeModal();
    }
});
