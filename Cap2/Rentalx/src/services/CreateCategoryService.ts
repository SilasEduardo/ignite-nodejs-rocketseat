import { CategoriesRepositores } from "../repositories/CategoriesRepositories";
interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryService {
  constructor(private categoriesRepositores: CategoriesRepositores ) {}

  execute({name, description }: IRequest): void {
    
    const categoryAlreadyExists =  this.categoriesRepositores.findBycategories(name);
    if (categoryAlreadyExists) {
      throw new Error("Category Already eExists!");
    }

    this.categoriesRepositores.create({ name, description });
  }
};

export { CreateCategoryService };
