<?php
require_once($_SERVER["DOCUMENT_ROOT"] . '/pdo.php');

// sides
if (isset($_POST['action']) && isset($_POST['modal-id'])) {
    if ($_POST['action'] == 'edit' && !empty($_POST['modal-id'])) {
        $sql = "UPDATE sides SET name=:name, description=:description, price=:price WHERE side_id=:mid";
        $stmt = $pdo->prepare($sql);
        $stmt->execute(array(
            ':mid' => $_POST['modal-id'],
            ':name' => $_POST['side-name'],
            ':description' => $_POST['side-description'],
            ':price' => $_POST['side-price']
        ));

        // select side
        $stmt_one = $pdo->prepare("SELECT * FROM sides WHERE side_id = :mid");
        $stmt_one->execute(array(
            ':mid' => $_POST['modal-id']
        ));
        $side = $stmt_one->fetch(PDO::FETCH_ASSOC);

        header('Content-Type: application/json');
        echo json_encode($side);
        exit;
    }
}

if (isset($_GET['side-id'])) {
    // select edited side
    $stmt_one = $pdo->prepare("SELECT * FROM sides WHERE side_id = :bid");
    $stmt_one->execute(array(
        ':bid' => $_GET['side-id']
    ));
    $row = $stmt_one->fetch(PDO::FETCH_ASSOC);

    header('Content-Type: application/json');
    echo json_encode($row);
    exit;
}
