import { Recipe } from "./recipe.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      "a Test Recipe",
      "this is a simple test",
      "https://media3.s-nbcnews.com/j/MSNBC/Components/Video/201808/tdy_food_klg_chicken_180828_1920x1080.today-inline-vid-featured-desktop.jpg",
      [new Ingredient("Meat", 1), new Ingredient("French Fries", 20)]
    ),
    new Recipe(
      "a Test Recipe",
      "this is a simple test",
      "https://images2.minutemediacdn.com/image/upload/c_crop,h_1126,w_2000,x_0,y_181/f_auto,q_auto,w_1100/v1554932288/shape/mentalfloss/12531-istock-637790866.jpg",
      [new Ingredient("Buns", 2), new Ingredient("Meat", 2)]
    )
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }
}
