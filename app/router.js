import { AboutController } from "./controllers/AboutController.js";
import { HomeController } from "./controllers/HomeController.js";
import { HousesController } from "./controllers/HousesController.js";

export const router = [

  {
    path: '',
    controller: HomeController
  },
  {
    path: '#/about',
    controller: AboutController
  },
  {
    path: '#/houses',
    controller: HousesController
  }
]