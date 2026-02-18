const mysql = require('mysql2');
const db = mysql.createConnection
({
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: '',
    database: 'cs411',
});
db.connect((err) => 
{
    if (err) 
	{
        console.log('connection failed:', err);
        return;
    }
    console.log('connected');
});
class Feed {
	// Public
	feed_posts = []; // Array of posts using int IDs
	bookmarked_ids = []; // Array of bookedmarked post_id
	user_id;
	constructor(user_id) {
		// Potentially replace this with a sessionid check?
		this.user_id = user_id;
		this.update_feed();
	}
	// Use this method to refresh feed
	update_feed(){
		this.#get_bookmarks();
		this.#load_posts();
	}
	// Private
	#load_posts(){
		// Placeholder for how many posts to get
		const post_count = 5;
		// Reset array of posts
		this.feed_posts = []
		db.query('SELECT post_id FROM post ORDER BY RAND() LIMIT ?', [post_count], (err, results) => 
		{
			if (err) 
			{
				console.log('error loading posts:', err);
				return;
			}
			for (const row of results) 
			{
				this.feed_posts.push(row.post_id);
			}
			console.log('loaded post IDs:', this.feed_posts);
		});
	}
	#get_bookmarks()
	{
		// Database call to get list of post_id WHERE user_id = this.user_id
		db.query('SELECT post_id FROM bookmarks WHERE user_id = ?', [this.user_id], (err, results) => 
		{
			if (err) 
			{
				console.log('error getting bookmarks:', err);
				return;
			}
			this.bookmarked_ids = [];
			for (const row of results) 
			{
				this.bookmarked_ids.push(row.post_id);
			}
			console.log('bookmark IDs:', this.bookmarked_ids);
		});
	}
}