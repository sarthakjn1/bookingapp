import express from "express";
import Hotel from "../models/Hotel.js"
import { createError } from "../utils/error.js";
import { createHotel, updateHotel, deleteHotel, getHotel, getHotels, countByCity, countByType, getHotelRooms } from "../controllers/hotel.js";

const router = express.Router();

//CREATE, UPDATE, DELETE, GET
router.post ("/", createHotel)


//UPDATE
router.put ("/:id", updateHotel)

//DELETE
router.delete ("/:id", deleteHotel)

//GET
router.get ("/find/:id", getHotel)

router.get ("/countByCity", countByCity)

router.get("/countByType", countByType)

//GET ALL
router.get ("/", getHotels)

router.get ("/room/:id", getHotelRooms)



export default router;