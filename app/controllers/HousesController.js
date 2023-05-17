import { AppState } from "../AppState.js";
import { House } from "../models/House.js";
import { housesService } from "../services/HousesService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

function drawHouses() {
   let template = ''
  AppState.houses.forEach(h => 
    { template += h.HouseCard}); 
    setHTML('houses',template)
}

function _drawButton() {
  if (AppState.account) {
    setHTML('the-place-to-put-the-button', '<button class="btn btn-dark square" data-bs-toggle="modal" data-bs-target="#the-target-id" >OPEN THE MODAL</button>')
  }
}



export class HousesController {
constructor(){
this.getHousesFromApi()
 AppState.on('houses', drawHouses)
 
 setHTML('modal-guts', House.HouseForm())
 AppState.on('account', _drawButton)
// console.log(House)
}


async getHousesFromApi() {
    try {
      await housesService.getHousesFromApi()
    } catch (error) {
      Pop.error(error)
    }
  }

  
  async createHouse() {
    try {
      // we are submitting a form.... 
      window.event.preventDefault()
      // 🛩️ target acquired
      const form = window.event.target
      // how do we extract the data from the form?
      const formData = getFormData(form)
      console.log('what is in the formData', formData)
      await housesService.createHouse(formData)
    
      form.reset()
      
      bootstrap.Modal.getOrCreateInstance('#targetId').hide()

    } catch (error) {
      Pop.error(error)
    }
  }

}