const express = require("express");

const router = express.Router();

const {
  createDestination,
  updateDestination,
  deleteDestination,
  getDestinationById,
  getDestinations,
} = require("../controllers/destination-ctrl");

router.post("/destination/create", createDestination);
router.put("/destination/update/:id", updateDestination);
router.delete("/destination/delete/:id", deleteDestination);
router.get("/destination/:id", getDestinationById);
router.get("/destinations", getDestinations);

module.exports = router;
