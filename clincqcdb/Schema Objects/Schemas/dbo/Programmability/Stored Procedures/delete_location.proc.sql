CREATE PROCEDURE dbo.delete_location
	@id INT
AS
	SET NOCOUNT ON;

    DELETE FROM locations
     WHERE id = @id;
        
RETURN 0