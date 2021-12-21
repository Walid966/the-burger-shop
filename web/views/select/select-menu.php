<?php

require_once($_SERVER["DOCUMENT_ROOT"] . '/pdo.php');

// select burgers
$stmt_one = $pdo->prepare("SELECT * FROM burgers");
$stmt_one->execute();
$burgers = $stmt_one->fetchAll(PDO::FETCH_ASSOC);

// select sides
$stmt_two = $pdo->prepare("SELECT * FROM sides");
$stmt_two->execute();
$sides = $stmt_two->fetchAll(PDO::FETCH_ASSOC);

// select drinks
$stmt_three = $pdo->prepare("SELECT * FROM drinks");
$stmt_three->execute();
$drinks = $stmt_three->fetchAll(PDO::FETCH_ASSOC);
