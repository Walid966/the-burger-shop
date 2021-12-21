<?php
require_once($_SERVER["DOCUMENT_ROOT"] . '/pdo.php');
// edit or delete
if (isset($_POST['action']) && isset($_POST['modal-id'])) {
    // sides
    if ($_POST['action'] == 'delete' && !empty($_POST['modal-id'])) {
        $sql = "DELETE FROM sides WHERE side_id = :mid";
        $stmt = $pdo->prepare($sql);
        $stmt->execute(array(
            ':mid' => $_POST['modal-id']
        ));

        header('Content-Type: application/json');
        echo json_encode(array('success' => 'side deleted'));
        exit;
    }
}

if (isset($_GET['side-id'])) {
    // select side
    $stmt_one = $pdo->prepare("SELECT * FROM sides WHERE side_id = :bid");
    $stmt_one->execute(array(
        ':bid' => $_GET['side-id']
    ));
    $side = $stmt_one->fetch(PDO::FETCH_ASSOC);

    header('Content-Type: application/json');
    echo json_encode($side);
    exit;
}
