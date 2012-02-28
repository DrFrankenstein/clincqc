<?php
require_once "../lib/bootstrap.php";

$input = file_get_contents('php://input');
$data = json_decode($input);

if($data === null)
{
    throw new JsonException(json_last_error());
}

$db = DatabaseConnection::getConnection();
$query = $db->prepare('EXEC add_location :parent, :code, :name');
$query->bindParam(':parent', $parent, PDO::PARAM_INT);
$query->bindParam(':code', $code, PDO::PARAM_STR);
$query->bindParam(':name', $name, PDO::PARAM_STR);

if(!is_array($data)) $data = array($data);

foreach($data as $loc)
{
    $parent = $loc->parent;
    $code   = $loc->code;
    $name   = $loc->name;
    $query->execute();
}

$result = array('id' => (int) $db->lastInsertId());
echo json_encode($result);