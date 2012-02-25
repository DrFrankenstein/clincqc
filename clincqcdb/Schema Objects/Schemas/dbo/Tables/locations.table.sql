CREATE TABLE dbo.locations
(
    id INT PRIMARY KEY IDENTITY,
    parent INT FOREIGN KEY REFERENCES locations,
    code CHAR(2) NOT NULL,
    name NVARCHAR(255) NOT NULL
)