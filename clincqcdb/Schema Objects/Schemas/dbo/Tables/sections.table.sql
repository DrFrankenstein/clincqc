CREATE TABLE dbo.sections
(
    id INT PRIMARY KEY IDENTITY,
    name VARCHAR(255),
    tag VARCHAR(50),
    -- We store both the encoded route data and the lat/lon array.
    -- We use the former for sending to the client and the latter for detecting multiplexes.
    routedata TEXT,
    attributes INT NOT NULL DEFAULT 0
)
