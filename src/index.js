

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
server.listen().then(() => {
    console.log(`
      Server is running!
      Listening on port 4000
    `);
  });
  