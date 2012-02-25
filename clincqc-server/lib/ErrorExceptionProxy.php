<?php

class ErrorExceptionProxy
{
    /**
     * Callback that catches run-time errors and throws an exception
     * constructed from that error.
     * 
     * @param int $errno Level of the error raised 
     * @param string $errstr Error message
     * @param string $errfile Filename that the error was raised in
     * @param int $errline Line number the error was raised at
     */
    static public function handler($errno, $errstr, $errfile, $errline)
    {
        throw new ErrorException($errstr, 0, $errno, $errfile, $errline);
    }
    
    /**
     * Sets up the handler for run-time errors.
     * 
     *  This function must be called in order for this class to convert
     *  run-time errors into exceptions.
     */
    static public function init()
    {
        //set_error_handler(array('ErrorExceptionProxy', 'handler'));        
    }
}