<?php

require_once '../lib/bootstrap.php';

if(!isset($_POST['id'])) exit;
$id = $_POST['id'];

$db = DatabaseConnection::getConnection();
$query = $db->prepare('EXEC delete_location :id');
$query->bindParam(':id', $id);
$query->execute();

$result = array('rows' => (int) $query->rowCount());
echo json_encode($result);