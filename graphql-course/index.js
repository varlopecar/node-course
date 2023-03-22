const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const { loadFilesSync } = require('@graphql-tools/load-files');
const { makeExecutableSchema } = require('@graphql-tools/schema');
const products = require('./schema/products/products.model');
const orders = require('./schema/orders/orders.model');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3002;

const typesArray = loadFilesSync(`${__dirname}/schema/*.graphql`);

const schema = makeExecutableSchema({
    typeDefs: typesArray
});  

// Root resolver
const root = {
    products: () => products,
    orders: () => orders,
};

app.use(bodyParser.json());

// Create an endpoint
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));