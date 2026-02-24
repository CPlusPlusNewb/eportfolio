"use strict";

/** User Class
 Represents a user account in the Social Media Message Board.
 
 Database Fields (from User table):
 user_id (int)          Unique identifier for each user
 username (text)        Username for login and display
 password_hash (text)   Hashed password stored in db  
*/
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