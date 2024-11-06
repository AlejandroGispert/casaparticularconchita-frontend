# This is the frontend of the room booking app

I created this booking app to help my growing old parents to manage their room booking requests.

## Run

In the project directory:

### `npm run build`

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Features

- **GraphQL API**: A flexible API for querying and mutating data.
- **MongoDB**: A NoSQL database for storing application data.
- **Authentication**: Custom middleware for handling authentication.
- **Modular Structure**: Models, resolvers, and schema are organized for scalability and clarity.

## Technologies Used

- **Node.js**: Server-side JavaScript runtime.
- **Express.js**: Web framework for Node.js.
- **GraphQL**: API query language and runtime.
- **MongoDB**: NoSQL database.
- **Mongoose**: ODM for MongoDB to interact with the database using models.
- **body-parser**: Parses incoming request bodies in middleware.
- **express-graphql**: GraphQL HTTP server middleware for Express.

## Project Structure

```bash
├── models/         # Mongoose models for MongoDB collections
├── resolvers/      # GraphQL resolvers for handling queries and mutations
├── schema/         # GraphQL schema definitions
├── middleware/     # Custom middleware (e.g., authentication)
├── app.js          # Main application entry point
├── package.json    # NPM dependencies and scripts
└── .gitignore      # Files and directories to ignore in Git
```

Explanation:
Models: Define the data structure in MongoDB using Mongoose schemas.
Resolvers: Define how to respond to GraphQL queries and mutations.
Schema: Define the GraphQL schema that specifies available queries, mutations, and their structure.

Usage
GraphQL API
The GraphQL API allows you to perform queries (fetch data) and mutations (modify data).

Queries: Fetch data from MongoDB via the GraphQL endpoint.
Mutations: Modify data (e.g., create, update, delete records) using GraphQL mutations.
Example GraphQL Queries
Fetch All Users

```bash
query {
  users {
    _id
    name
    email
  }
}
```
