function openPopup(page){
    document.getElementById("popup-overlay").style.display = "flex";
    document.getElementById("popup-frame").src = page;
}

function closePopup(){
    document.getElementById("popup-overlay").style.display = "none";
    document.getElementById("popup-frame").src = "";
}

document.addEventListener("DOMContentLoaded", function () {
    function showDashboard() {

    document.getElementById("dashboard-content").style.display = "block";

    document.getElementById("page-content").style.display = "none";

    document.getElementById("page-content").innerHTML = "";
}

document.getElementById("dashboardbtn").addEventListener("click", showDashboard);

    document.getElementById("worklogsbtn").addEventListener("click", function () {
        openPopup("log.html");
    });
    document.getElementById("usersbtn").addEventListener("click", function () {
        openPopup("user.html");
    });
    document.getElementById("reportsbtn").addEventListener("click", function () {
        openPopup ("report.html");
    });
    document.getElementById("settingsbtn").addEventListener("click", function () {
        openPopup( "settings.html");
    });

    const menuBtn = document.querySelector(".menu-btn");
    const sidebar = document.querySelector(".sidebar");
  menuBtn.addEventListener("click", function () {
    sidebar.classList.toggle("collapsed");
    document.getElementById("popup-overlay").classList.toggle("collapsed");
});

const taskBtn = document.getElementById("taskbtn");
const taskSubmenu = document.getElementById("tasksubmenu");
taskBtn.addEventListener("click", function () {
    if(sidebar.classList.contains("collapsed")){
        taskSubmenu.classList.toggle("show");
        taskSubmenu.classList.toggle("popup-mode");
        taskSubmenu.style.top = taskBtn.offsetTop + "px";
    }else{
        taskSubmenu.classList.remove("popup-mode");
        taskSubmenu.classList.toggle("show");

    }
});
document.getElementById("taskpagebtn").addEventListener("click", function () {
    openPopup ("task.html");
});
document.getElementById("addtaskbtn").addEventListener("click", function () {
    openPopup ("addtask.html");
});
document.getElementById("edittaskbtn").addEventListener("click", function () {
    openPopup ("edit.html");
});
document.getElementById("taskdetailsbtn").addEventListener("click", function () {
    openPopup("details.html");
});

const meetingBtn = document.getElementById("meetingbtn");
const meetingSubmenu = document.getElementById("meetingsubmenu");
meetingBtn.addEventListener("click", function () {
    if(sidebar.classList.contains("collapsed")){
        meetingSubmenu.classList.toggle("show");
        meetingSubmenu.classList.toggle("popup-mode");
        meetingSubmenu.style.top = meetingBtn.offsetTop + "px";

    }else{
        meetingSubmenu.classList.remove("popup-mode");
        meetingSubmenu.classList.toggle("show");
    }
});
document.getElementById("addmeetingbtn").addEventListener("click", function () {
    openPopup( "add.html");
});
document.getElementById("meetingdetailsbtn").addEventListener("click", function () {
    openPopup("meetinglist.html");
});
document.getElementById("out-btn").addEventListener("click", function () {
    window.location.href = "../index.html";
});
});

