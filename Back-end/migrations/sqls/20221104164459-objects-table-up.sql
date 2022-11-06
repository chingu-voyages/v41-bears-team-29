CREATE TABLE objects
(
    id     SERIAL PRIMARY KEY,
    name   VARCHAR(50) NOT NULL,
    image  VARCHAR     NOT NULL,
    kid_id uuid REFERENCES kids (id)
)