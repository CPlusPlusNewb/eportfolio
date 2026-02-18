document.getElementById("postForm").addEventListener("submit", function(event) 
{
    event.preventDefault(); // stop normal form submit
    const username = document.querySelector("input[name='username']").value;
    const subject = document.querySelector("input[name='subject']").value;
    const description = document.querySelector("textarea[name='description']").value;
    const post = 
            {
        username: username,
        subject: subject,
        description: description,
        date: new Date().toLocaleString(),
        likes: 0,
        bookmarks: 0
    };
    let posts = JSON.parse(localStorage.getItem("posts")) || [];
    posts.push(post);
    localStorage.setItem("posts", JSON.stringify(posts));
    window.location.href = "index.html";
});
