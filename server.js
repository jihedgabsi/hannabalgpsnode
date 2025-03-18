const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/database');

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());


// Routes API
app.use('/api/clients', require('./routes/ClientRoutes'));
app.use('/api/voitures', require('./routes/VoitureRoutes'));
app.use('/api/gps', require('./routes/GpsRoutes'));

// Démarrer le serveur
const PORT = process.env.API_PORT || 3000;
app.listen(PORT, () => console.log(`Serveur API en écoute sur le port ${PORT}`));
