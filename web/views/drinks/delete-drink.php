<?php
require_once($_SERVER["DOCUMENT_ROOT"] . '/pdo.php');
// edit or delete
if (isset($_POST['action']) && isset($_POST['modal-id'])) {
    // drinks
    if ($_POST['action'] == 'delete' && !empty($_POST['modal-id'])) {
        $sql = "DELETE FROM drinks WHERE drink_id = :mid";
        $stmt = $pdo->prepare($sql);
        $stmt->execute(array(
            ':mid' => $_POST['modal-id']
        ));

        header('Content-Type: application/json');
        echo json_encode(array('success' => 'drink deleted'));
        exit;
    }
}

if (isset($_GET['drink-id'])) {
    // select drink
    $stmt_one = $pdo->prepare("SELECT * FROM drinks WHERE drink_id = :bid");
    $stmt_one->execute(array(
        ':bid' => $_GET['drink-id']
    ));
    $drink = $stmt_one->fetch(PDO::FETCH_ASSOC);

    header('Content-Type: application/json');
    echo json_encode($drink);
    exit;
}
