import { AppState } from "../AppState.js";

export class House {
    constructor(data){
        this.bedrooms = data.bedrooms
        this.bathrooms = data.bathrooms
        this.levels = data.levels
        this.imgUrl = data.imgUrl
        this.year = data.year
        this.description = data.description
        this.price = data.price
    }

get HouseCard(){
return  `
<div class="col-md-4 my-3">
<div class="card rounded-top elevation-5">
<h1 class="card-title">${this.price}</h1>
<img class="rounded-top image-fluid" src="${this.imgUrl}" alt="$${this.levels}">
<div class="cardBody">
  <span>
    ${this.bedrooms} 
  </span>
<span>
${this.bathrooms}
</span>
<p>
${this.description}
</p>
</div>          

</div>
</div>`

}

static HouseForm() {
  return /*html*/`
  <div class="modal-header">
    <h1 class="modal-title fs-5" id="exampleModalLabel">List House</h1>
    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
  </div>

  <form onsubmit="app.HousesController.createHouse()">
    <div class="modal-body container-fluid">
      <section class="row">
        <div class="mb-3 col-6">
          <label for="make" class="form-label">Bedrooms</label>
          <input required minlength="1" maxlength="20" type="number" class="form-control" id="bedrooms" name="bedrooms"
            placeholder="BedRooms">
        </div>
        <div class="mb-3 col-6">
          <label for="model" class="form-label">Bathrooms</label>
          <input required minlength="1" maxlength="20" type="number" class="form-control" id="bathrooms" name="bathrooms"
            placeholder="bathrooms">
        </div>
        <div class="mb-3 col-6">
          <label for="levels" class="form-label">Levels</label>
          <input required min="1" type="number" class="form-control" id="Levels" name="Levels"  placeholder="Levels">
        </div>
        <div class="mb-3 col-6">
          <label for="price" class="form-label">List Price</label>
          <input required min="2000" max="1000000" type="number" class="form-control" id="price" name="price"
            placeholder="List Price">
        </div>
        <div class="mb-3 col-12">
          <label for="description" class="form-label">Description</label>
          <input required minlength="3" maxlength="50" type="text" class="form-control" id="description" name="description"
            placeholder="House Description">
        </div>
        <div class="mb-3 col-12">
          <label for="imgUrl" class="form-label">House Image</label>
          <input required type="text" class="form-control" id="imgUrl" name="imgUrl" placeholder="House Image">
        </div>
      </section>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      <button type="submit" class="btn btn-primary">Create Listing</button>
    </div>
  </form>
  `
}

}