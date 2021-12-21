<?php
require_once('select-burgers.php');

// crud burgers
if (isset($_GET['burger-id'])) {
    $stmt = $pdo->prepare("SELECT * FROM burgers WHERE burger_id = :bid");
    $stmt->execute(array(':bid' => $_GET['burger-id']));
    $stmt->execute();
    $burger = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($burger) {
        header('Content-Type: application/json');
        $burger_row = ['name' => $burger['name'], 'price' => $burger['price'], 'description' => $burger['description'], 'id' => $burger['burger_id']];
        echo json_encode($burger_row);
        exit;
    } else {
        echo 'something went wrong!';
        exit;
    }
}
