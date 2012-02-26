CREATE TABLE dbo.classes
(
    id INT PRIMARY KEY IDENTITY,
    location INT NOT NULL FOREIGN KEY REFERENCES locations,
    name NVARCHAR(255) NOT NULL,
    prefix VARCHAR(5) NOT NULL,
    importance TINYINT NOT NULL
)
