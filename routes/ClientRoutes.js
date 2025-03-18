const express = require('express');
const router = express.Router();
const clientController = require('../controllers/clientController');

router.post('/register', clientController.register);
router.post('/login', clientController.login);
router.get('/', clientController.getAllClients);
router.get('/:id', clientController.getByid);
router.put('/:id', clientController.updateClient);
router.patch('/:id/deactivate', clientController.deactivateClient);
router.delete('/:id', clientController.deleteClient);
router.post('/addvoiture/:clientId', clientController.addVoitureToClient);
// Supprimer une voiture d'un client
router.delete('/deletevoiture/:clientId', clientController.removeVoitureFromClient);

module.exports = router;
