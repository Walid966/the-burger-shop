<?php
require_once($_SERVER["DOCUMENT_ROOT"] . '/pdo.php');
// delete message
if (isset($_POST['msg-id'])) {
    // drinks
    if (!empty($_POST['msg-id'])) {
        $sql = "DELETE FROM contact_form WHERE id = :mid";
        $stmt = $pdo->prepare($sql);
        $stmt->execute(array(
            ':mid' => $_POST['msg-id']
        ));

        header('Content-Type: application/json');
        echo json_encode('Message deleted.');
        exit;
    }
}

// select one row
if (isset($_GET['contact-id'])) {
    $stmt_one = $pdo->prepare("SELECT * FROM contact_form  WHERE id = :cid");
    $stmt_one->execute(array(
        ':cid' => $_GET['contact-id']
    ));
    $row = $stmt_one->fetch(PDO::FETCH_ASSOC);

    header('Content-Type: application/json');
    echo json_encode($row);
    exit;
}
