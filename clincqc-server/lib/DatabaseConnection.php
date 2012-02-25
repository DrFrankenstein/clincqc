<?php
class DatabaseConnection
	extends PDO
{
	private static $connection = null;
	
	private function __construct()
	{
		$attrs = array(
			PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
		);
        
        $config = Configuration::getConfiguration();
		
		parent::__construct($config->db->dsn,
							$config->db->username,
                            $config->db->password,
                            $attrs);		
	}
	
	/**
	 * 
	 * @return DatabaseConnection
	 */
	public static function getConnection()
	{
		if(self::$connection === null)
		{
			self::$connection = new DatabaseConnection();
		}
		
		return self::$connection;
	}
}
