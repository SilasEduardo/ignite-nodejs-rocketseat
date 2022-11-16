import { request, response, Router } from "express";
import { CategoriesRepositores } from "../repositories/CategoriesRepositories";

const categoriesRepositores = new CategoriesRepositores()

const categoriesRoutes = Router();

categoriesRoutes.post("/", (request, response) => {
    const {name, description} = request.body;

    const categoryAlreadyExists = categoriesRepositores.findBycategories(name);
    if(categoryAlreadyExists){
        return response.status(400).json({"Error": "Category Aready Exists!"});
    }

    categoriesRepositores.create({name, description});

    return response.status(201).send()

});


categoriesRoutes.get("/", (request, response) => {
    const category = categoriesRepositores.list()

    response.status(201).json(category)
})


export { categoriesRoutes }