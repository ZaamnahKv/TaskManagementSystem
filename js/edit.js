document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("backbtn").addEventListener("click", function () {
        window.location.href = "dashboard.html";
    });
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
    document.getElementById("cancelbtn").addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelectorAll("input").forEach(input => {
        input.value = "";
    });
    document.querySelectorAll("textarea").forEach(textarea => {
        textarea.value = "";
    });
    document.querySelectorAll("select").forEach(select => {
        select.selectedIndex = -1;
    });
    alert("All entered data cleared!");
});
});