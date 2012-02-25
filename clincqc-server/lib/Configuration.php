<?php
/**
 * This file defines the {@link Configuration} class.
 * 
 * @author Carl Tessier
 */

define('CONFIG_PATH', '../config.json');

/** 
 * Provides access to the application's configuration.
 * 
 * @internal
 * The configuration is stored in the '<pre>config.json</pre>' file.
 * 
 * @author Carl Tessier
 */
class Configuration
{
    private static $data = null;
    
    public static function getConfiguration()
    {
        if(self::$data === null)
        {
            self::$data = self::read();
        }

        return self::$data;
    }

    
    private static function read()
    {
        try
        {
            $contents = file_get_contents(CONFIG_PATH);
        }
        catch(ErrorException $ex)
        {
            throw new ConfigurationException('Cannot open config file', 0, $ex); 
        }
        
        $obj = json_decode($contents);
        
        if($obj === null)
        {
            $err = json_last_error();
            throw new ConfigurationException("Parse error in config file : $err");            
        }
        
        return $obj;
    }
}