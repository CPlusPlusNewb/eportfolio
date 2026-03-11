<?php

class Post {

    private $db;

    public $post_id;
    public $user_id;
    public $description;

    public function __construct($db) {
        $this->db = $db;
    }

    // CREATE POST
    public function create_post() {

        $stmt = $this->db->prepare(
            "INSERT INTO posts (user_id, description)
             VALUES (?, ?)"
        );

        $stmt->bind_param("is", $this->user_id, $this->description);

        return $stmt->execute();
    }

    // EDIT POST
    public function edit_post() {

        $stmt = $this->db->prepare(
            "UPDATE posts
             SET description = ?
             WHERE post_id = ?"
        );

        $stmt->bind_param("si", $this->description, $this->post_id);

        return $stmt->execute();
    }

    // DELETE POST
    public function delete_post() {

        $stmt = $this->db->prepare(
            "DELETE FROM posts
             WHERE post_id = ?"
        );

        $stmt->bind_param("i", $this->post_id);

        return $stmt->execute();
    }

    // BOOKMARK POST
    public function bookmark_post() {

        $stmt = $this->db->prepare(
            "UPDATE posts
             SET bookmarks = bookmarks + 1
             WHERE post_id = ?"
        );

        $stmt->bind_param("i", $this->post_id);

        return $stmt->execute();
    }
    // LIKE POST
    public function like_post() {
    $stmt = $this->db->prepare(
        "UPDATE posts
         SET likes = likes + 1
         WHERE post_id = ?"
    );

    $stmt->bind_param("i", $this->post_id);

    return $stmt->execute();
    }
}
?>