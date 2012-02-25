<?php
function __autoload($name)
{    
    require_once "$name.php";
}