const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3001;

// GraphQL schema
const schema = gql`
    type Query {
        message: String
    }
`;

// Root resolver
const root = {
    message: () => 'Hello World!'
};

app.use(bodyParser.json());

// Create an endpoint
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));