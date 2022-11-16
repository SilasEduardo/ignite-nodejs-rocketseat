import { CategoriesModel } from "../models/CategoriesModel";

interface ICreateCategory {
    name:string;
    description: string;
};

class CategoriesRepositores {

    private categories: CategoriesModel[];


    constructor(){
        this.categories = [];
    }

    create({name, description}: ICreateCategory){
        const category = new CategoriesModel();

        Object.assign(category, {
            name,
            description,
            created_at: new Date(),
        });

        this.categories.push(category);
    };

    list(): CategoriesModel[]{
        return this.categories;
    };

    findBycategories(name: string){
        const categoryAreadyExists = this.categories.find(categories => categories.name === name);
        return categoryAreadyExists;
    }
    
};


export {CategoriesRepositores}