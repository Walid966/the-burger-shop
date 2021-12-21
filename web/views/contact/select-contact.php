<?php
require_once($_SERVER["DOCUMENT_ROOT"] . '/pdo.php');

// select all contact form
$stmt_all = $pdo->prepare("SELECT * FROM contact_form ORDER BY `date-sent` DESC");
$stmt_all->execute();
$contacts = $stmt_all->fetchAll(PDO::FETCH_ASSOC);

header('Content-Type: application/json');
echo json_encode($contacts);
exit;
