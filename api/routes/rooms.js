import express from "express";
import Room from "../models/Room.js"
import { createError } from "../utils/error.js";
import { createRoom, updateRoom, deleteRoom, getRoom, getRooms, updateRoomAvailability } from "../controllers/room.js";

const router = express.Router();

//CREATE, UPDATE, DELETE, GET
router.post ("/:hotelid", createRoom)


//UPDATE
router.put ("/:id", updateRoom)

router.put ("/availability/:id", updateRoomAvailability);

//DELETE
router.delete ("/:id/:hotelid", deleteRoom)

//GET
router.get ("/:id", getRoom)

//GET ALL
router.get ("/rooms/:id", getRooms)



export default router;