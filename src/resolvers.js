module.exports = {
  Query: {
    people: (_, { page }, { dataSources }) =>
      dataSources.peopleAPI.getAllPeople({ page: page }),
    person: (_, { url }, { dataSources }) =>
      dataSources.peopleAPI.getPerson({ url: url })
  },
};