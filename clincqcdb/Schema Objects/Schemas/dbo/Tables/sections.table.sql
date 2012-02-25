CREATE TABLE dbo.sections
(
	id INT PRIMARY KEY IDENTITY,
    -- road INT FOREIGN KEY REFERENCES roads,
    name VARCHAR(255),
    tag VARCHAR(50),
    attributes INT NOT NULL DEFAULT 0
)
