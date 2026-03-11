<?php
header('Content-Type: application/json');
require_once "Post.php";
require_once "endpoint_functions/bookmark_post.php";	//
require_once "endpoint_functions/create_post.php";		//
require_once "endpoint_functions/delete_post.php";		//
require_once "endpoint_functions/edit_post.php";		//
require_once "endpoint_functions/like_post.php";		//
require_once "endpoint_functions/get_bookmarks.php"; 	//
require_once "endpoint_functions/load_feed.php";		//

// Database info
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "cs411";

try {
	//Get action from $_POST
    $action = $_POST['action'] ?? null;
    if (!$action) {
        echo json_encode(["error" => "Missing action"]);
        exit;
    }
	
	//Connect to database
    $db = new mysqli($servername, $username, $password, $dbname = "cs411");
	if ($db->connect_error) {
		throw new Exception("CONNECTION ERROR: " . $db->connect_error);
	}

	// Primary logic contol for endpoint calls
	// Access with $_POST action="case name"
    switch ($action) {
		
		// BOOKMARK POST
		case "bookmark_post":
			if (!isset($_POST['post_id'])) {
                echo json_encode(["error" => "Missing post_id"]);
                exit;
            }
			$post_id = intval($_POST['post_id']);
			$result = bookmark_post($post_id, $db);
			
			echo json_encode(["success" => $result]);
			
			break;
			
			
		// CREATE POST
		case "create_post":
			if (!isset($_POST['user_id']) || !isset($_POST['description'])) {
				echo json_encode(["error" => "Missing user_id or description"]);
				exit;
			}

			$user_id = intval($_POST['user_id']);
			$description = $_POST['description'];

			$success = create_post($user_id, $description, $db);

			echo json_encode(["success" => $success]);
			break;
		
		
		// DELETE POST
        case "delete_post":
            if (!isset($_POST['post_id'])) {
                echo json_encode(["error" => "Missing post_id"]);
                exit;
            }
			
			$post_id = intval($_POST['post_id']);
			$success = delete_post($post_id, $db);

			echo json_encode(["success" => $success]);
			break;
		
		
		// EDIT POST
		case "edit_post":
				if (!isset($_POST['post_id']) || !isset($_POST['description'])) {
				echo json_encode(["error" => "Missing post_id or description"]);
				exit;
			}

			$post_id = intval($_POST['post_id']);
			$description = $_POST['description'];

			$success = edit_post($post_id, $description, $db);

			echo json_encode(["success" => $success]);
			break;
		
		
		// LIKE POST
		case "like_post":
			if (!isset($_POST['post_id'])) {
				echo json_encode(["error" => "Missing post_id"]);
				exit;
			}

			$post_id = intval($_POST['post_id']);
			$success = like_post($post_id, $db);

			echo json_encode(["success" => $success]);
			break;

			
        // GET BOOKMARKS
        case "get_bookmarks":
            if (!isset($_POST['user_id'])) {
                echo json_encode(["error" => "Missing user_id"]);
                exit;
            }

            $user_id = intval($_POST['user_id']);
            $bookmarks = get_bookmarks($user_id);

            echo json_encode(["bookmarks" => $bookmarks]);
            break;


        // LOAD FEED
        case "load_feed":
            if (!isset($_POST['count'])) {
                echo json_encode(["error" => "Missing count"]);
                exit;
            }

            $count = intval($_POST['count']);
			$feed = load_feed($count, $db);
			
			echo json_encode($feed);
            break;
		
		
		//Fall through
        default:
            echo json_encode(["error" => "Switch error"]);
    }

    $db->close();

} catch (mysqli_sql_exception $e) {
    http_response_code(500);
    echo json_encode(["error" => $e->getMessage()]);
}
?>