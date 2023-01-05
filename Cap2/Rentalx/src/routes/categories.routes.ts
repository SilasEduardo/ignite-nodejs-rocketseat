import { Router } from "express";
import { CategoriesModel } from "../models/CategoriesModel";
const categoriesRoutes  = Router();

const catecories: CategoriesModel[] = []


categoriesRoutes.post('/' , (req, res) => {
    const {name, description} = req.body;

    const category = new CategoriesModel();

    Object.assign(category, {
        name,
        description,
        created_at: new Date()
    });

    catecories.push(category);

    res.status(201).json({category});
})

export { categoriesRoutes };