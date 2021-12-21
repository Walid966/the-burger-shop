<?php

$url = parse_url(getenv("CLEARDB_DATABASE_URL"));

$server = $url["host"];
$username = $url["user"];
$password = $url["pass"];
$db = substr($url["path"], 1);

// local
// $server = 'localhost';
// $username = 'root';
// $password = '';
// $db = 'tbsdb';

$pdo = new PDO("mysql:host=$server;dbname=$db", $username, $password);
