# Factory Digital Movies backend project

This project is an implementation of the Digital Factory technical Test.

This project are developed under **[Fastify](https://www.fastify.io)** a fast Nodejs framework like **express**

## Available Scripts

In the project directory, you can run:

### `npm run dev`

To start the app in dev mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm start`

For production mode

### `npm run test`

Run the test cases.

### `npm run lint`

Run linting check

### `npm run format`

For automatically fix linting issuses

## Quick start

Follow this steps to start project on local

```sh
# 1) Clone source code from this repsitory
git clone git@github.com:aghou/fdmovies.git

# 2) goto to project directory
cd fdmovies/

# 3) install dependencies
npm install

# 4) Install and run mongodb server on your local machine
# mongodb server should run on local and listen default port 27017
# this step est required to run project

# 5) Start application
npm start

# 6) Test application
curl localhost:3000/health

```

## Implementation details

```
Tech: Nodejs [ Backend engine ] / Typescript [ Language ] / Fastify [ Framework ]
---
Database: Mongodb
---
Movie database / API service: themoviedb
---
Tests & Coverage and TDD: Yes, TDD is adopted for [user module], [mongodb,swagger Plugin] and [root route]
---
Authentication & Authorization: Yes, Implementation to Bearer Authorization with Jwt access_token
---
Security & user input validation: Yes, improve it for each entrypoint with input format validation based on jsonschema and Ajv
---
Code Quality: Yes, improve quality with strict linting rules,
  processes and tools implemented on the project to guarantee the quality of the code produced
  and running automation on git hook like pre-commit.
---
Code source comment: Yes, code source is commented and documented with block comment and annotations.
---
API endpoints documentation: Yes, Documentation of api is automatically generated for each endpoint, based on OpenAPI specs
---
Features and Specs: All specs and features are implemented and work.

```

### API Endpoints

```txt

└── /
    ├── health (GET)
    │   health (HEAD)
    ├── documentation (GET)
    │   documentation (HEAD)
    ├── openapi (GET)
    │   openapi (HEAD)
    ├── movie (GET)
    │   movie (HEAD)
    │   ├── / (GET)
    │   │   / (HEAD)
    │   │   ├── :id (GET)
    │   │   │   :id (HEAD)
    │   │   │   └── /videos (GET)
    │   │   │       /videos (HEAD)
    │   │   ├── search (GET)
    │   │   │   search (HEAD)
    │   │   ├── top (GET)
    │   │   │   top (HEAD)
    │   │   └── favorites (GET)
    │   └── /favorites (POST)
    │       └── /:id (DELETE)
    ├── tv (GET)
    │   tv (HEAD)
    │   ├── / (GET)
    │   │   / (HEAD)
    │   │   ├── :id (GET)
    │   │   │   :id (HEAD)
    │   │   │   └── /videos (GET)
    │   │   │       /videos (HEAD)
    │   │   ├── search (GET)
    │   │   │   search (HEAD)
    │   │   ├── top (GET)
    │   │   │   top (HEAD)
    │   │   └── favorites (GET)
    │   └── /favorites (POST)
    │       └── /:id (DELETE)
    └── user/sign
        ├── in (POST)
        └── up (POST)

```
