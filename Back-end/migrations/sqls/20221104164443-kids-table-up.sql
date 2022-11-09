CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE TABLE kids
(
    id    uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
    name  VARCHAR(50) NOT NULL,
    image VARCHAR     NOT NULL,
    user_id uuid REFERENCES users(id)
);