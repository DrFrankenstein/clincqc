CREATE TABLE dbo.sections_roads
(
    section INT NOT NULL FOREIGN KEY REFERENCES sections,
    road INT NOT NULL FOREIGN KEY REFERENCES roads,
    PRIMARY KEY (section, road)
)
