CREATE PROCEDURE dbo.dump_locations
AS
SET NOCOUNT ON;
SELECT id, parent, code, name
    FROM locations
    ORDER BY parent;
RETURN 0;