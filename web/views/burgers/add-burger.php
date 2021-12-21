<?php
require_once($_SERVER["DOCUMENT_ROOT"] . '/pdo.php');

// burgers
if (isset($_POST['burger-name']) && isset($_POST['burger-price'])) {
    // insert
    $stmt = $pdo->prepare("INSERT INTO burgers (name, description, price) 
                           VALUES (:burger_name, :burger_description, :burger_price)");

    $stmt->execute(array(
        ':burger_name' => $_POST['burger-name'],
        ':burger_description' => $_POST['burger-description'],
        ':burger_price' => $_POST['burger-price']
    ));

    // select added burger
    $stmt_one = $pdo->prepare("SELECT * FROM burgers ORDER BY burger_id DESC LIMIT 1");
    $stmt_one->execute();
    $row = $stmt_one->fetch(PDO::FETCH_ASSOC);
    header('Content-Type: application/json');
    echo json_encode($row);
    exit;
}
