CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE TABLE users
(
    id       uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
    username VARCHAR(50)  NOT NULL,
    email    VARCHAR(100) NOT NULL UNIQUE,
    image    VARCHAR      NOT NULL,
    password VARCHAR      NOT NULL
);