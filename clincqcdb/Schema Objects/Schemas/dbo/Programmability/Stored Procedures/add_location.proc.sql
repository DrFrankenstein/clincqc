CREATE PROCEDURE dbo.add_location
	@parent INT,
    @code CHAR(2),
    @name NVARCHAR(255)
AS
    SET NOCOUNT ON;

    INSERT INTO locations (parent, code, name)
            VALUES (@parent, @code, @name);
	
RETURN 0;