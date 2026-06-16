document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("backbtn").addEventListener("click", function () {
        window.location.href = "dashboard.html";
    });
    document.querySelector("form").addEventListener("submit", function (e) {
        e.preventDefault();
        const meeting = {
            title: document.getElementById("meetingtitle").value,
            type: document.getElementById("meetingytpe").value,
            date: document.getElementById("meetingdate").value,
            startTime: document.getElementById("starttime").value,
            endTime: document.getElementById("endtime").value,
            duration: document.getElementById("dhrs").value,
            organiser: document.getElementById("organiser").value,
            description: document.getElementById("description").value
        };
        localStorage.setItem("meeting", JSON.stringify(meeting));
        alert("Meeting saved successfully!");
        document.querySelector("form").reset();
    });

    document.getElementById("cancelbtn").addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector("form").reset();
        alert("All entered data cleared!");
    });

    document.getElementById("close-btn").addEventListener("click", function () {
        window.location.href ="dashboard.html";
    });
});