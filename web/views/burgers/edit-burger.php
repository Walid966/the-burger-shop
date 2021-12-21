<?php
require_once($_SERVER["DOCUMENT_ROOT"] . '/pdo.php');

// burgers
if (isset($_POST['action']) && isset($_POST['modal-id'])) {
    if ($_POST['action'] == 'edit' && !empty($_POST['modal-id'])) {
        $sql = "UPDATE burgers SET name=:name, description=:description, price=:price WHERE burger_id=:mid";
        $stmt = $pdo->prepare($sql);
        $stmt->execute(array(
            ':mid' => $_POST['modal-id'],
            ':name' => $_POST['burger-name'],
            ':description' => $_POST['burger-description'],
            ':price' => $_POST['burger-price']
        ));

        // select burger
        $stmt_one = $pdo->prepare("SELECT * FROM burgers WHERE burger_id = :mid");
        $stmt_one->execute(array(
            ':mid' => $_POST['modal-id']
        ));
        $burger = $stmt_one->fetch(PDO::FETCH_ASSOC);

        header('Content-Type: application/json');
        echo json_encode($burger);
        exit;
    }
}

if (isset($_GET['burger-id'])) {
    // select edited burger
    $stmt_one = $pdo->prepare("SELECT * FROM burgers WHERE burger_id = :bid");
    $stmt_one->execute(array(
        ':bid' => $_GET['burger-id']
    ));
    $row = $stmt_one->fetch(PDO::FETCH_ASSOC);

    header('Content-Type: application/json');
    echo json_encode($row);
    exit;
}
