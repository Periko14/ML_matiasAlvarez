const express = require ("express");
const path = require('path');
const app = express();

const port = 3030;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'views')));

// Ruta para servir 'home.html' cuando se accede a la raíz '/'
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'home.html'));
});

app.listen(port, () => console.log(`Servidor corriendo en puerto ${port}`));

app.get("/", (req, res) => {
    res.send("Hola Mundo");
})