<?php
require_once($_SERVER["DOCUMENT_ROOT"] . '/pdo.php');

// add subscribers to newsletter
$res = [];
if (isset($_POST['sub-email'])) {
    if (!empty($_POST['sub-email'])) {
        $email = $_POST["sub-email"];
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $res['email-error'] = "Invalid email format";
        }
        if (empty($res)) {
            $stmt = $pdo->prepare("INSERT INTO newsletter (email) VALUES (:email)");
            $stmt->execute(array(':email' => $_POST['sub-email']));
        }
        if (!empty($res)) {
            header('Content-Type: application/json');
            echo json_encode($res);
            return;
        }
    }
}
