<?php

class ExceptionHandler
{
    static public function init()
    {
        set_exception_handler(array('ExceptionHandler', 'handler'));
    }
    
    static public function handler($ex)
    {
        header('Content-Type: application/json');
        header('Status: 500 Internal Server Error');
        $output = array('error' => $ex);
        echo json_encode($output);
    }
}
