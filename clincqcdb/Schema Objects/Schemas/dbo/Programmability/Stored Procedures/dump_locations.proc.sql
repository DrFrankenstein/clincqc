CREATE PROCEDURE dbo.dump_locations
AS
SELECT id, parent, code, name
    FROM locations
    ORDER BY parent;
RETURN 0