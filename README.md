# Cat API

This is a simple API that serves random images of cats. It is built using Node.js and Express.js.

## Installation

To run the code locally, you'll need to have Node.js installed on your machine.

1. Clone this repository to your local machine or download the source code.
2. Open a terminal and navigate to the project directory.
3. Run the following command to install the dependencies:

```shell
yarn install
```

or

```shell
npm install
```

## Usage

To start the server and access the API, use the following command:

```shell
npm start
```

The server will start running on `http://localhost:3000`.

## API Endpoint

### `GET /cat/random`

This endpoint returns a random cat image from the server's `cat-images` folder.

Example usage:

```shell
curl http://localhost:3000/cat/random
```
