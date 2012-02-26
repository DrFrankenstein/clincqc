<?php
require_once '../lib/bootstrap.php';

$db = DatabaseConnection::getConnection();

if(isset($_REQUEST['parent']))
{
    $query = $db->prepare('EXEC list_locations :parent');
    $query->bindParam(':parent', $_REQUEST['parent'], PDO::PARAM_INT);
}
else
{
    $query = $db->prepare('EXEC list_locations');
}

$query->execute();

$result = array();
while($row = $query->fetch(PDO::FETCH_ASSOC))
{
    $result []= $row;
}

header('Content-Type: application/json');
echo json_encode($result);