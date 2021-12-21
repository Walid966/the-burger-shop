<?php
require_once($_SERVER["DOCUMENT_ROOT"] . '/pdo.php');

if (isset($_POST['side-name']) && isset($_POST['side-price'])) {
    // insert
    $stmt = $pdo->prepare("INSERT INTO sides (name, description, price) 
                           VALUES (:side_name, :side_description, :side_price)");

    $stmt->execute(array(
        ':side_name' => $_POST['side-name'],
        ':side_description' => $_POST['side-description'],
        ':side_price' => $_POST['side-price']
    ));

    // select sides
    $stmt_one = $pdo->prepare("SELECT * FROM sides ORDER BY side_id DESC LIMIT 1");
    $stmt_one->execute();
    $side = $stmt_one->fetch(PDO::FETCH_ASSOC);
    header('Content-Type: application/json');
    echo json_encode($side);
    exit;
}
