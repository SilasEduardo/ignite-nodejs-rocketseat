import { Router } from "express";
const categoriesRoutes  = Router();


categoriesRoutes .get('/' , (req, res) => {
    res.json("cheguei");
})

export { categoriesRoutes }