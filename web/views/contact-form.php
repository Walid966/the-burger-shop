<?php
require_once($_SERVER["DOCUMENT_ROOT"] . '/pdo.php');

// contact form
$res = [];
if (isset($_POST['name']) && isset($_POST['email']) && isset($_POST['message'])) {
    $message = $_POST['message'];
    $name = $_POST["name"];
    if (!preg_match("/^[a-zA-Z-' ]*$/", $name)) {
        $res['name-error'] = "Invalid name";
        // $res['name'] = $name;
    }

    $email = $_POST["email"];
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $res['email-error'] = "Invalid email format";
    }

    if (empty($res) && !empty($message)) {
        $stmt = $pdo->prepare("INSERT INTO contact_form (name, email, message) 
                               VALUES (:name, :email, :message)");

        $stmt->execute(array(
            ':name' => $_POST['name'],
            ':email' => $_POST['email'],
            ':message' => $_POST['message']
        ));

        header('Content-Type: application/json');
        echo json_encode('success');
        return;
    }
    if (!empty($res)) {
        $res['status'] = 'error';
        $res['message'] = $message;
        $res['email'] = $email;
        $res['name'] = $name;
        header('Content-Type: application/json');
        echo json_encode($res);
        return;
    }
}
