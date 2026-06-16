document.addEventListener("DOMContentLoaded", function () {

    document.querySelector(".add-btn").addEventListener("click", function () {
           window.parent.openPopup("add.html");
    });
});