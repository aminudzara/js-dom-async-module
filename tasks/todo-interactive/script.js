const tasks = document.querySelectorAll("#todo-list li");
                      
tasks.forEach((task) => {
    task.addEventListener("click", () => {
        task.classList.toggle("completed");
    });
});