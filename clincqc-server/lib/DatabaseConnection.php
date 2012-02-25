<?php

class DatabaseConnection
{
    private static $connection = null;
    
    private static function createConnection()
    {
        $attrs = array(
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
        );

        $config = Configuration::getConfiguration();
        
        self::$connection = new PDO(
            $config->db->dsn,
            $config->db->username,
            $config->db->password,
            $attrs
        );
    }

    /**
     *
     * @return PDO
     */
    public static function getConnection()
    {
        if(self::$connection === null)
        {
            self::createConnection();
        }

        return self::$connection;
    }

}