<?php
// require_once('select-burgers.php');
require_once($_SERVER["DOCUMENT_ROOT"] . '/pdo.php');
// edit or delete
if (isset($_POST['action']) && isset($_POST['modal-id'])) {
    // burgers
    if ($_POST['action'] == 'delete' && !empty($_POST['modal-id'])) {
        $sql = "DELETE FROM burgers WHERE burger_id = :mid";
        $stmt = $pdo->prepare($sql);
        $stmt->execute(array(
            ':mid' => $_POST['modal-id']
        ));

        header('Content-Type: application/json');
        echo json_encode(array('success' => 'burger deleted'));
        exit;
    }
}

if (isset($_GET['burger-id'])) {
    // select burger
    $stmt_one = $pdo->prepare("SELECT * FROM burgers WHERE burger_id = :bid");
    $stmt_one->execute(array(
        ':bid' => $_GET['burger-id']
    ));
    $burger = $stmt_one->fetch(PDO::FETCH_ASSOC);

    header('Content-Type: application/json');
    echo json_encode($burger);
    exit;
}
