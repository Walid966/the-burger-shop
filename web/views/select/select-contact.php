<?php
require_once($_SERVER["DOCUMENT_ROOT"] . '/pdo.php');

// select contact form
$stmt_five = $pdo->prepare("SELECT * FROM contact_form ORDER BY `date-sent` DESC");
$stmt_five->execute();
$contact_form = $stmt_five->fetchAll(PDO::FETCH_ASSOC);
