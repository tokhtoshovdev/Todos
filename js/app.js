const form = document.getElementById("form");
const formInput = document.getElementById("input");
const formList = document.getElementById("list");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const inputValue = formInput.value;

    if (inputValue === "") {
        alert("Password must be at least 8 characters long");
        return;
    } else {
        const newLLi = document.createElement("li");
        newLLi.textContent = inputValue;
        formList.appendChild(newLLi);
    }

    formInput.value = "";
});
