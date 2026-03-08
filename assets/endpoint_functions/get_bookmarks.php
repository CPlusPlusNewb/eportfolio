<?php
function get_bookmarks($user_id, mysqli $db){
	try {
		//create an array to temporarily store bookmarked posts
		$bookmarked_posts = [];
	
		//protect against SQL injection with prepared statements, ? is used as a placeholder
		//Select all posts where the entered user id is located
        $stmt = $db->prepare("SELECT post_id FROM bookmarks WHERE user_id = ?");
		
		//i for integer as defined in the table, binds the value to the placeholder
        $stmt->bind_param("i", $user_id);
        $stmt->execute();

        $result = $stmt->get_result();

        while ($row = $result->fetch_assoc()) {
            $bookmarked_posts[] = $row['post_id'];
        }

        $stmt->close();
        $db->close();

        return $bookmarked_posts;

    } catch (mysqli_sql_exception $e) {
        error_log($e->__toString());
        return False;
    }
}
?>