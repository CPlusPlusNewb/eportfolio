const container = document.getElementById("container");
const postContainer = document.getElementById("postContainer");

class Feed {
	// Public
	feed_posts = []; // Array of posts using int IDs
	bookmarked_ids = []; // Array of bookedmarked post_id
	user_id = null;
	
	constructor(user_id) {
		// Potentially replace this with a sessionid check?
		this.user_id = user_id;
		this.update_feed();
	}
	
	// Use this method to refresh feed
	update_feed(){
		//These may need to be async, but I've never used that before
		this.#get_bookmarks();
		this.#load_posts();
	}
	
	render_feed(){
		let html = "";

		for (const post of this.feed_posts) 
		{
			html += post.render();
		}

		return html;
	}
	
	// Private
	#load_posts(){
		// Placeholder for how many posts to get
		const post_count = 5;
		
		// Reset array of posts
		this.feed_posts = [];
		
		//Make the POST structure
		const formData = new FormData();
		formData.append("count", post_count);
		
		fetch("index.php",{
		   method: 'POST',
		   body: formData
		}).then(response =>{
			if(!response.ok){
				throw new Error("Network response bad");
			}
			return response.json(); 
		}).then(posts => {
			// Make sure posts is always an array
			if (!Array.isArray(posts)){
				posts = [];
			}
			posts.reverse().forEach(post => {
				//Put the posts into the array
				this.feed_posts.push(post);
				
				const div = document.createElement('div');
				div.className = 'post';
				div.innerHTML = `
					<strong>User ${post.user_id}</strong>
					<p contenteditable="true" data-id="${post.post_id}">${post.description}</p>
					<button data-id="${post.post_id}">Save</button>
				`;
				postContainer.appendChild(div);
			});
		});//A catch statement could go here for debugging
	}
	
	#get_bookmarks() {
		//Build the POST form
		const formData = new FormData();
		formData.append("action", "get_bookmarks");
		formData.append("user_id", this.user_id);

		fetch("functions.php", {
			method: "POST",
			body: formData
		})
		.then(response => response.json())
		.then(data => {
			if (data.bookmarks) {
				this.bookmarked_ids = data.bookmarks;
			} else {
				this.bookmarked_ids = [];
			}
		})
		.catch(err => {
			console.log("#get_bookmarks call failed:", err);
			this.bookmarked_ids = [];
		});
	}
}

class Post {
    //Will include all the fields in the database 
    constructor(post_id, user_id, description, post_date, post_time, likes, bookmarks) 
    {
        this.post_id = post_id;
        this.user_id = user_id;
        this.description = description;
        this.post_date = post_date; 
        this.post_time = post_time; 
        //Default value will be zero 
        //Unless specified
        this.likes = likes || 0; 
        this.bookmarks = bookmarks || 0; 
     
    }

    // CREATE
    create_post() 
    {
        console.log("Creating post:", this);
        // DB INSERT would go here
    }

    // EDIT
    edit_post(new_description) 
    {
        this.description = new_description;
        console.log("Post updated:", this);
        // DB UPDATE would go here
    }

    // DELETE
    delete_post() 
    {
        console.log("Deleting post ID:", this.post_id);
        // DB DELETE would go here
    }

    // BOOKMARK
    // I am not sure how you guys want to save the bookmark information
    bookmark_post() 
    {
        this.bookmarks += 1;
        console.log("Post bookmarked. Total bookmarks:", this.bookmarks);
        // DB UPDATE bookmarks
    }

    // REMOVE BOOKMARK
    remove_bookmark() 
    {
        if (this.bookmarks > 0) 
        {
            this.bookmarks -= 1;
        }
        console.log("Bookmark removed. Total bookmarks:", this.bookmarks);
        // DB UPDATE bookmarks
    }

    // LIKE
    like_post() 
    {
        this.likes += 1;
        console.log("Post liked. Total likes:", this.likes);
        // DB UPDATE likes
    }

    // UNLIKE
    unlike_post() 
    {
        if (this.likes > 0) 
        {
            this.likes -= 1;
        }
        console.log("Like removed. Total likes:", this.likes);
        // DB UPDATE likes
    }
}
/** User Class
 Represents a user account in the Social Media Message Board.
 
 Database Fields (from User table):
 user_id (int)          Unique identifier for each user
 username (text)        Username for login and display
 password_hash (text)   Hashed password stored in db  
*/
//module.exports = Post;
class User
{
    /* Constructor
    Initializes a User object with database fields.
     * @param {number} user_id
     * @param {string} username
     * @param {string} password_hash
     */
    constructor(user_id = 0, username = "", password_hash = "")
    {
        this.user_id = user_id;
        this.username = username;
        this.password_hash = password_hash;
    }

    /* login()
     Authenticates a user by checking username and password.
     n a full implementation, this would:
       - Query the database
       - Compare hashed passwords
       - Create a session
     For Sprint 3: Simulates login using simple comparison.
     
     * @param {string} username
     * @param {string} password
     * @returns {boolean} true if login successful
     */
    login(username, password) {

        //login logic (placeholder)
        if (username === "demo" && password === "password123") {
            this.user_id = 1;
            this.username = username;
            return true;
        }

        return false;
    }

    /* create_post()
     Creates a new post 
     * @param {number} user_id
     * @param {string} text
     */
    create_post(user_id, text) {
        console.log(`create_post called for user_id: ${user_id}`);
        //Database insert would occur here
    }

    /*edit_post()
     Edits an existing post.
      * @param {number} user_id
     * @param {number} post_id
     * @param {string} new_text
     */
    edit_post(user_id, post_id, new_text) {
        console.log(`edit_post called for post_id: ${post_id}`);
        // Database update would occur here
    }

    /* delete_post()
    * Deletes an existing post
    * @param {number} user_id
    * @param {number} post_id
    */
    delete_post(user_id, post_id) 
    {
        console.log(`delete_post called for post_id: ${post_id} by user_id: ${user_id}`);   
        // Database delete record 
    }

    /* bookmark_post()
    * Saves a post to the user's bookmarks
    * @param {number} user_id
    * @param {number} post_id
    */
    bookmark_post(user_id, post_id)
    {
        console.log(`bookmark_post called for post_id: ${post_id} by user_id: ${user_id}`);
        // Database insert bookmark record
    }


    /* remove_bookmark()
    * Removes a post from the user's bookmarks
    * @param {number} user_id
    * @param {number} post_id
    */
    remove_bookmark(user_id, post_id)
    {
        console.log(`remove_bookmark called for post_id: ${post_id} by user_id: ${user_id}`);
        // Database delete bookmark record
    }


    /* get_bookmarks()
    * Retrieves all bookmarked posts for a user
    * @param {number} user_id
    * @returns {Array} list of bookmarked post IDs (placeholder)
    */
    get_bookmarks(user_id)
    {
        console.log(`get_bookmarks called for user_id: ${user_id}`);
        // Database query would return bookmarks

        return []; // placeholder empty list
    }

}

function renderPosts(posts, currentUserId) {

    const feedContainer = document.getElementById("feed");
    feedContainer.innerHTML = "";

    posts.forEach(post => {

        const postDiv = document.createElement("div");
        postDiv.className = "post";

        postDiv.innerHTML = `
            <p>Post ID: ${post.post_id}</p>
        `;

        // Only show buttons if owner
        if (post.is_owner) {

            const editBtn = document.createElement("button");
            editBtn.textContent = "Edit Post";
            //editBtn.onclick = () => Post.edit_post(post.post_id);
			//I think this is the proper way, Post class doesn't support use without construction
			const p = new Post(post.post_id, post.user_id, post.description);
			editBtn.onclick = () => p.edit_post("new text");


            const deleteBtn = document.createElement("button");
            deleteBtn.textContent = "Delete Post";
            deleteBtn.onclick = () => Post.delete(post.post_id);

            const bookmarkBtn = document.createElement("button");
            bookmarkBtn.textContent = "Bookmark Post";
            bookmarkBtn.onclick = () => Post.bookmark(post.post_id);

            postDiv.appendChild(editBtn);
            postDiv.appendChild(deleteBtn);
            postDiv.appendChild(bookmarkBtn);
        }

        feedContainer.appendChild(postDiv);
    });
}

const currentFeed = new Feed(1);