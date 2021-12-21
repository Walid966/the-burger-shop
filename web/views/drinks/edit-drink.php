<?php
require_once($_SERVER["DOCUMENT_ROOT"] . '/pdo.php');
// drinks
if (isset($_POST['action']) && isset($_POST['modal-id'])) {
    if ($_POST['action'] == 'edit' && !empty($_POST['modal-id'])) {
        $sql = "UPDATE drinks SET name=:name, description=:description, price=:price WHERE drink_id=:mid";
        $stmt = $pdo->prepare($sql);
        $stmt->execute(array(
            ':mid' => $_POST['modal-id'],
            ':name' => $_POST['drink-name'],
            ':description' => $_POST['drink-description'],
            ':price' => $_POST['drink-price']
        ));

        // select drink
        $stmt_one = $pdo->prepare("SELECT * FROM drinks WHERE drink_id = :mid");
        $stmt_one->execute(array(
            ':mid' => $_POST['modal-id']
        ));
        $drink = $stmt_one->fetch(PDO::FETCH_ASSOC);

        header('Content-Type: application/json');
        echo json_encode($drink);
        exit;
    }
}

if (isset($_GET['drink-id'])) {
    // select edited drink
    $stmt_one = $pdo->prepare("SELECT * FROM drinks WHERE drink_id = :bid");
    $stmt_one->execute(array(
        ':bid' => $_GET['drink-id']
    ));
    $row = $stmt_one->fetch(PDO::FETCH_ASSOC);

    header('Content-Type: application/json');
    echo json_encode($row);
    exit;
}
