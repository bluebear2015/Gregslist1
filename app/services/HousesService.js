import { AppState } from "../AppState.js";
import { House } from "../models/House.js";
import { api } from "./AxiosService.js"





class HousesService {

async getHousesFromApi(){
    const res = await api.get('api/houses')
    // console.log(res.data);
    AppState.houses = res.data.map(h => new House(h))
    console.log('houses in the appState', AppState.houses);

}
async createHouse(formData) {
    // STEP 1 - Send the form data to be validated and Create a new Car
    // 📡 let's send the form data to the api
    const res = await api.post('api/houses', formData)
    // we only reach here if the server thought the formData was good...
    console.log('what is the data', res.data)
   

    // STEP 2 - take the response and let the user know their form was successful
    // we add the data to the AppState 
    const newHouse = new House(res.data)
    AppState.houses.push(newHouse)
    // 👂triggers the listeners 
    AppState.emit('House')
}
}

export const housesService = new HousesService()