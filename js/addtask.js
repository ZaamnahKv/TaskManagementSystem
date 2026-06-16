document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("form").addEventListener("submit", function (e) {
        e.preventDefault();
        const task = {
            title: document.getElementById("title").value,
            description: document.getElementById("description").value,
            assignedTo: document.getElementById("assignedto").value,
            priority: document.getElementById("priority").value,
            startDate: document.getElementById("startdate").value,
            dueDate: document.getElementById("duedate").value,
            status: document.getElementById("status").value
        };
        localStorage.setItem("task", JSON.stringify(task));
        alert("Task saved successfully!");
        document.querySelector("form").reset();
    });
    document.getElementById("cancelbtn").addEventListener("click", function () {
        document.querySelector("form").reset();
        alert("All entered data cleared!");
    });
});