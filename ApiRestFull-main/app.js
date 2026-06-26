const express = require("express");
const cors = require("cors");
const sequelize = require("./config");

require("./relaciones");

const Rol = require("./modelos/Rol");
const Persona = require("./modelos/Persona");
const Usuario = require("./modelos/Usuario");

const app = express();
app.use(cors());

app.use(express.json());

app.post("/rol", async (req, res) => {
    try {
        const rol = await Rol.create(req.body);
        res.status(201).json(rol);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
});

app.get("/roles", async (req, res) => {
    try {
        const roles = await Rol.findAll();
        res.json(roles);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
});

app.post("/personas", async (req, res) => {
    try {
        const persona = await Persona.create(req.body);
        res.status(201).json(persona);
    } catch (error) {
        res.status(500).json({
            mensaje: error.message
        });
    }
});

app.get("/personas", async (req, res) => {
    try {
        const personas = await Persona.findAll();
        res.json(personas);
    } catch (error) {
        res.status(500).json({
            mensaje: error.message
        });
    }
});

app.post("/usuarios", async (req, res) => {
    try {
        const usuario = await Usuario.create(req.body);
        res.status(201).json(usuario);
    } catch (error) {
        res.status(500).json({
            mensaje: error.message
        });
    }
});

app.get("/usuarios", async (req, res) => {
    try {
        const usuarios = await Usuario.findAll({
            include: [Persona, Rol]
        });

        res.json(usuarios);
    } catch (error) {
        res.status(500).json({
            mensaje: error.message
        });
    }
});

sequelize.sync({ alter: true })
.then(() => {
    console.log("Base sincronizada");

    app.listen(3001, () => {
        console.log("Servidor en puerto 3001");
    });
})
.catch(err => {
    console.log(err);
});