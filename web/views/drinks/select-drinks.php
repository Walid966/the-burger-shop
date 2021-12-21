<?php
require_once($_SERVER["DOCUMENT_ROOT"] . '/pdo.php');
// select burgers
$stmt_one = $pdo->prepare("SELECT * FROM drinks");
$stmt_one->execute();
$drinks = $stmt_one->fetchAll(PDO::FETCH_ASSOC);

header('Content-Type: application/json');
echo json_encode($drinks);
exit;
