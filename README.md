# test-backend

## Install dependencies

We are using [Yarn](https://yarnpkg.com/en/) to install the project dependencies:

```bash
yarn
```

or you can use npm instead of yarn:

```bash
npm install
```

## How to run?

You can start the service with the following command:

```bash
yarn serve
```

or

```bash
npm run serve
```

## What does this service?

After starting the service will listen on port 3000. It has 2 endpoints:

- `GET /` -> health check, it should give back 200 OK.
- `GET /items` -> this endpoint gives back data from the backend.
