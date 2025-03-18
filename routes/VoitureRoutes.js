const express = require('express');
const router = express.Router();
const voitureController = require('../controllers/VoitureController');

router.post('/', voitureController.createVoiture);       // Ajouter une voiture
router.put('/:voitureId', voitureController.updateVoiture); // Mettre à jour une voiture
router.delete('/:voitureId', voitureController.deleteVoiture); // Supprimer une voiture
router.get('/', voitureController.getAllVoitures);       // Obtenir toutes les voitures
router.get('/:voitureId', voitureController.getVoitureById); // Obtenir une voiture par ID


module.exports = router;
