const express = require('express');
const router = express.Router();
const gpsController = require('../controllers/GpsController');

router.post('/', gpsController.addGpsData);       // Ajouter une donnée GPS
router.get('/', gpsController.getAllGpsData);     // Obtenir toutes les données GPS
router.get('/:gpsDataId', gpsController.getGpsDataById); // Obtenir une donnée GPS par ID
router.put('/:gpsDataId', gpsController.updateGpsData); // Mettre à jour une donnée GPS
router.delete('/:gpsDataId', gpsController.deleteGpsData); // Supprimer une donnée GPS

module.exports = router;
