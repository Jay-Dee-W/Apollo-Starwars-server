

const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const PeopleAPI = require('./datasources/people')

const server = new ApolloServer({ 
    typeDefs,
    resolvers,
    dataSources: () => ({
        peopleAPI: new PeopleAPI()
    })
 });
server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
    console.log(`
    Server is ready at ${url}
    `);
  });
  