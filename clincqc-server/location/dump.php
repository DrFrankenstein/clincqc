<?php
require_once '../lib/bootstrap.php';

$db = DatabaseConnection::getConnection();

$query = $db->query('EXEC dump_locations');

$result = array();
$idmap = array();
while($row = $query->fetch(PDO::FETCH_ASSOC))
{
    $loc = array(
        'id'        =>  $row['id'],
        'parent'    =>  $row['parent'],
        'code'      =>  $row['code'],
        'name'      =>  $row['name'],
        'locations' => array()
    );
    
    $result []= $loc;
    $idmap[$loc['id']] = &$result[count($result) - 1];
}

foreach($result as $loc)
{
    if($loc['parent'] !== null)
    {
        $idmap[$loc['id']]['locations'] []= &$loc;
    }
}

header('Content-Type: application/json');
echo json_encode($result);