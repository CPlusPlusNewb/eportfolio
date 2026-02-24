class Post {
    //Will include all the fields in the database 
    constructor(post_id, user_id, description, description, post_date, post_time, likes, bookmarks) 
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
        console.log("Deleting post ID:", post_id);
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

module.exports = Post;