<?php
require_once "Post.php";

function create_post($user_id, $description, mysqli $db){
	try {
		$post = new Post($db);
		$post->user_id = $user_id;
		$post->description = $description;
		
		return post->create_post()

    } catch (mysqli_sql_exception $e) {
        error_log($e->__toString());
        return False;
    }
}
?>