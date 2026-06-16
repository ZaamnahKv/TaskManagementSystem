document.addEventListener("DOMContentLoaded", function () {
    
    document.querySelector(".edittaskbtn").addEventListener("click", function () {
       window.parent.openPopup("edit.html");
    });

    const commentInput = document.querySelector(".comment-box input");
    const commentBtn = document.querySelector(".comment-box button");
    const commentsSection = document.querySelector(".comments-section");
    commentBtn.addEventListener("click", function () {
        const commentText = commentInput.value.trim();
        if (commentText === "") {
            alert("Please enter a comment");
            return;
        }
});
});