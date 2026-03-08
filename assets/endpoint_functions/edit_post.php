<?php
require_once "Post.php";

function edit_post($post_id, $description, mysqli $db)
	try {
		$post = new Post($db);
		$post->post_id = $post_id;
		$post->description = $description;

		return $post->edit_post();

    } catch (mysqli_sql_exception $e) {
        error_log($e->__toString());
        return False;
    }
}
?>