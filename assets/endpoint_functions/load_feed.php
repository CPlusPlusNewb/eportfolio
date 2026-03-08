<?php
function load_feed($count, mysqli $db){
	$index = 0;

	$sql = "SELECT post_id, user_id, description FROM post";
	$result = $db->query($sql);
	
	if (!$result || $result->num_rows === 0) {
        return ["error" => "0 results"];
    }

	$return_value = [];
	
	while (($row = $result->fetch_assoc()) && $index < $count) {
		$return_value[] = [
			"post_id" => $row["post_id"],
			"user_id" => $row["user_id"],
			"description" => $row["description"],
		];
		$index++;
	}
	
	return $return_value;
}
?>