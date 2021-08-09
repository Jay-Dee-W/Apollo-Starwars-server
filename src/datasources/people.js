const { RESTDataSource } = require('apollo-datasource-rest');

class PeopleAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://swapi.dev/api/';
    }
    async getPerson(url) {
 
        
        const response = await this.get(url.url)
 
        return this.peopleReducer(response.results[0]) 
    }

    async getHomewolrd(url) {
        const response = await this.get(url)
        return response.name

    }

    async getAllPeople(page) {
        page=page.page
        const response = await this.get(`people/?page=${page}`)
  
        return Array.isArray(response.results) ?
            response.results.map(person => {return {name : person.name} }  ) :
            [];
    }

    peopleReducer(person) {
console.log(person)
        return {
            url: person.url,
            name: person.name,
            height: person.height,
            mass: person.mass,
            gender: person.gender,
            homeworld: this.getHomewolrd(person.homeworld)
            
        }
    }

}

module.exports = PeopleAPI;
