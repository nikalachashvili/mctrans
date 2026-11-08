const carsRouter = require("express").Router();
const { addCars } = require("../function/cars/addCars.js");
const { getCars } = require("../function/cars/cars.js");
const { getCarsId } = require("../function/cars/carsId.js");
const { deleteCars } = require("../function/cars/deleteCars.js");
const { editCars } = require("../function/cars/editCars.js");

carsRouter.get("/", getCars);
carsRouter.get("/:id", getCarsId);
carsRouter.post("/", addCars);
carsRouter.put("/:id", editCars);
carsRouter.delete("/:id", deleteCars);

module.exports = carsRouter;