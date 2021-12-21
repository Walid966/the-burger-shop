<?php
require_once($_SERVER["DOCUMENT_ROOT"] . '/pdo.php');

// select newsletter
$stmt_four = $pdo->prepare("SELECT * FROM newsletter");
$stmt_four->execute();
$subs = $stmt_four->fetchAll(PDO::FETCH_ASSOC);
