const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

// ruta  (e.g., HTML, CSS)
app.use(express.static('public'));

// obtener datos de un Pokémon por su nombre
app.get('/pokemon/:name', async (req, res) => {
  const { name } = req.params;
  
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
    res.json(response.data);
  } catch (error) {
    res.status(404).send('Pokémon no encontrado');
  }
});

// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});