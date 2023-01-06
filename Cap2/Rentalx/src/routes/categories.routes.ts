import { Router } from "express";
import { CategoriesRepository } from "../repositories/Categories.Repository";

const categoriesRoutes  = Router();
const categoryRepository = new CategoriesRepository


categoriesRoutes.post('/' , (req, res) => {
    const {name, description} = req.body;

    const nameExist = categoryRepository.findByName(req.body.name)
    if(nameExist)return res.status(401).send();

    categoryRepository.create({name, description});
    res.status(201).send();
});


categoriesRoutes.get('/' , (req, res) => {
   const allCategory = categoryRepository.list()

    res.status(201).json({allCategory})
});

export { categoriesRoutes };