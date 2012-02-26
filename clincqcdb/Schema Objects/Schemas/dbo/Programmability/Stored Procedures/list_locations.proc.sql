CREATE PROCEDURE dbo.list_locations
    @parent INT = NULL
AS

IF @parent IS NULL
    SELECT id, parent, code, name
        FROM locations
        WHERE parent IS NULL;
ELSE
    SELECT id, parent, code, name
        FROM locations
        WHERE parent = @parent;
    
RETURN 0;