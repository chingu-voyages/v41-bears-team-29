# Requirements to Run Server side

## Tech Needed to install

- [Node](https://nodejs.org/en/)
- [Postgres](https://www.postgresql.org/download/)
- [Redis](https://redis.io/docs/getting-started/installation/)

## Dependencies

- typescript
- Express
- helmet
- cors
- pg
- db-migrate
- db-migrate-pg
- dotenv
- jsonwebtoken
- bcrypt
- jasmine
- jasmine Spec Reporter
- supertest
- ioredis
- formidable

## Setting up Database

**Update .env file with those variables**

```
    PORT=4000
    ENV=dev
    REDIS_HOST=YOUR-REDIS-HOST
    REDIS_PORT=6379
    POSTGRES_HOST=127.0.0.1
    POSTGRES_PORT=5432
    POSTGRES_DB=books
    POSTGRES_TEST_DB=books_test
    POSTGRES_USERNAME=YOUR-DATABASE-USERNAME
    POSTGRES_PASSWORD=YOUR-DATABASE-PASSWORD
    BCRYPT_PASSWORD=YOUR-BCRYPT-PASSWORD
    SALT_ROUNDS=10
    AUTH_SECRET=YOUR-SECRET
    RESET_PASSWORD_SECRET=YOUR-SECRET
    COOKIE_SECRET=YOUR-SECRET
```

**Create User**

```postgresql
CREATE USER dany WITH PASSWORD 'dany';
```

**Create Database**

```postgresql
CREATE DATABASE whats_that;
```

**Grant all privileges to both databases**

```postgresql
GRANT ALL PRIVILEGES ON DATABASE whats_that TO dany;
```
**Install all dependencies**
```
cd Back-end
npm install
```
**Make sure [db-migrate](https://db-migrate.readthedocs.io/en/latest/Getting%20Started/installation/) is installed then**

```
cd Back-end
db-migrate up
```
**Run the server**
```
cd Back-end
npm run dev
```

# Data Shapes For Tables

### Users

- `id - UUID`
- `username - VARCHAR`
- `email - VARCHAR`
- `image - VARCHAR`
- `password - VARCHAR`

### Kids

- `id - UUID`
- `name - VARCHAR`
- `image - VARCHAR`
- `user_id UUID`

### Objects

- `id - UUID`
- `name - VARCHAR`
- `image - VARCHAR`
- `kid_id - UUID`
