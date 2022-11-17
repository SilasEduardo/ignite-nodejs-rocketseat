import {  Router } from "express";
import { CategoriesRepositores } from "../repositories/CategoriesRepositories";
import { CreateCategoryService } from "../services/CreateCategoryService";

const categoriesRepositores = new CategoriesRepositores()
const categoriesRoutes = Router();



categoriesRoutes.post("/", (request, response) => {
    const {name, description} = request.body;
    const createCategoriesService = new CreateCategoryService(categoriesRepositores);
    createCategoriesService.execute({name, description})
    
    return response.status(201).send()

});


categoriesRoutes.get("/", (request, response) => {
    const category = categoriesRepositores.list()

    response.status(201).json(category)
})


export { categoriesRoutes }