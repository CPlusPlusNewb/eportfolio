window.addEventListener("DOMContentLoaded", function() 
{
    const container = document.getElementById("postcontainer");
    const clearBtn = document.getElementById("clearpostsbtn");
    //const delposts = document.getElementById("delPostsBtn");

    const user_id = 1;

    clearBtn.addEventListener("click", function() 
    {
        location.reload();
    });
    loadFeed();
    function loadFeed() 
    {
        container.innerHTML = "Loading posts...";
        fetch(`/api/bookmarks?user_id=${user_id}`)
            .then(response => response.json())
            .then(bookmarks => 
            {
                const bookmarked_ids = bookmarks.map(b => b.post_id);
                fetch(`/api/feed?user_id=${user_id}`)
                    .then(response => response.json())
                    .then(posts => 
                    {
                        container.innerHTML = "";
                        /*posts.forEach(post => 
                        {
                            const is_bookmarked = bookmarked_ids.includes(post.post_id);
                            const postdiv = document.createElement("div");
                            postdiv.className = "post" + (is_bookmarked ? " bookmarked" : "");
                            postdiv.innerHTML = `
                                <div class="username">${post.username}</div>
                                <div class="description">${post.description}</div>
                                <div class="datetime">${post.post_date} ${post.post_time}</div>
                                <div class="stats">❤️ ${post.likes} | 🔖 ${post.bookmarks}${is_bookmarked ? " | <strong>Saved by you</strong>" : ""}</div>
                            `;
                            container.appendChild(postdiv);
                        });*/
                        posts.forEach(post => 
                        {
                            const is_bookmarked = bookmarked_ids.includes(post.post_id);
                            container.innerHTML += `
                                <div class="post ${is_bookmarked ? "bookmarked" : ""}">
                                    <div class="username">${post.username}</div>
                                    <div class="description">${post.description}</div>
                                    <div class="datetime">${post.post_date} ${post.post_time}</div>
                                    <div class="stats"> ❤️ ${post.likes} | 🔖 ${post.bookmarks}
                                        ${is_bookmarked ? " | <strong>Saved by you</strong>" : ""}/div>
                                    <button class="likeBtn">Like</button>
                                    <button class="bookmarkBtn">Bookmark</button>
                                </div>
                            `;
                        });
                    });
            })
            .catch(err => 
            {
                console.log("Error fetching posts:", err);
                container.innerText = "Failed to load posts.";
            });
    }
});