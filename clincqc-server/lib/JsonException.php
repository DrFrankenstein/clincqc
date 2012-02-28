<?php

class JsonException
    extends Exception
{
    static protected $codemap = array(
        JSON_ERROR_NONE             => 'No error has occured',
        JSON_ERROR_DEPTH            => 'The maximum stack depth has been exceeded',
        JSON_ERROR_STATE_MISMATCH   => 'Invalid or malformed JSON',
        JSON_ERROR_CTRL_CHAR        => 'Control character error, possibly incorrectly encoded',
        JSON_ERROR_SYNTAX           => 'Syntax error',
        JSON_ERROR_UTF8             => 'Malformed UTF-8 characters, possibly incorrectly encoded'
    );
    
    public function __construct($code)
    {
        $this->code = $code;
        $this->message = $codemap[$code];
    }
}