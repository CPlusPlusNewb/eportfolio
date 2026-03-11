<?php
require_once "Post.php";

function delete_post($post_id, mysqli $db) {
    try {
        $post = new Post($db);
        $post->post_id = $post_id;

        return $post->delete_post();

    } catch (mysqli_sql_exception $e) {
        error_log($e->__toString());
        return False;
    }
}
?>