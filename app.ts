require ('dotenv').config('');
var express = require("express");
var mongoose = require("mongoose");
var graphqlHTTP = require("express-graphql").graphqlHTTP;
var graphqlSchema = require("./graphql/schemas");
var graphqlResolvers = require("./graphql/resolvers");
var app = express();
app.use("/graphql", graphqlHTTP({
    schema: graphqlSchema,
    rootValue: graphqlResolvers,
    graphiql: true,
}));
var uri = process.env.uriDB
var options = { useNewUrlParser: true, useUnifiedTopology: true };
mongoose
    .connect(uri, options)
    .then(function () { return app.listen(3100, console.log("Server is running")); })
    .catch(function (error) {
    throw error;
});
