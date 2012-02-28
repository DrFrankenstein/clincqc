CREATE PROCEDURE dbo.update_location
	@id INT,
    @parent INT,
    @code CHAR(2),
    @name NVARCHAR(255)
AS
	SET NOCOUNT ON;

    UPDATE locations
       SET parent = @parent,
           code   = @code,
           name   = @name
     WHERE id     = @id;

RETURN 0;