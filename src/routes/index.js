import express from "express";
import categorias from "./categoriaRoutes.js";

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({titulo: "Ecomm"})
    })

    app.use(
        express.json(),
        categorias
    )
}

export default routes;