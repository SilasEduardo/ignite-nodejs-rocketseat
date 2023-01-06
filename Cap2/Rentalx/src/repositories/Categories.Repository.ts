import { CategoriesModel } from "../models/CategoriesModel";

interface ICreateCategoryDTO {
    name: string,
    description: string
}
class CategoriesRepository {
    private catecories: CategoriesModel[] = []
    constructor() {
        this.catecories = []
    }

    create({description, name}: ICreateCategoryDTO): void {
        const category = new CategoriesModel();

        Object.assign(category, {
            name,
            description,
            created_at: new Date()
        });

        this.catecories.push(category);
    }

    list(): CategoriesModel[]{
        return this.catecories
    }
};

export { CategoriesRepository };