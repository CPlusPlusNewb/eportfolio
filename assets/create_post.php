<?php
header('Content-Type: application/json');
require_once "Post.php";

try {
    $db = new mysqli("127.0.0.1", "root", "", "social_app");

    $post = new Post($db);
    $post->user_id = $_POST['user_id'];
    $post->description = $_POST['description'];

    $success = $post->create_post();

    echo json_encode(["success" => $success]);

    $db->close();

} catch (mysqli_sql_exception $e) {
    http_response_code(500);
    echo json_encode(["error" => $e->getMessage()]);
}
?>