<?php
require_once($_SERVER["DOCUMENT_ROOT"] . '/pdo.php');
// drinks
if (isset($_POST['drink-name']) && isset($_POST['drink-price'])) {
    // insert
    $stmt = $pdo->prepare("INSERT INTO drinks (name, description, price) 
                           VALUES (:drink_name, :drink_description, :drink_price)");

    $stmt->execute(array(
        ':drink_name' => $_POST['drink-name'],
        ':drink_description' => $_POST['drink-description'],
        ':drink_price' => $_POST['drink-price']
    ));

    // select drinks
    $stmt_one = $pdo->prepare("SELECT * FROM drinks ORDER BY drink_id DESC LIMIT 1");
    $stmt_one->execute();
    $drink = $stmt_one->fetch(PDO::FETCH_ASSOC);
    header('Content-Type: application/json');
    echo json_encode($drink);
    exit;
}
