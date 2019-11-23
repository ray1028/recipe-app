import { Component, OnInit, Input } from "@angular/core";
import { Recipe } from "../recipe.model";
import { RecipeService } from "../recipe.service";
// import { ShoppingListService } from "src/app/shopping-list/shopping-list.service";

@Component({
  selector: "app-recipe-detail",
  templateUrl: "./recipe-detail.component.html",
  styleUrls: ["./recipe-detail.component.css"]
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;

  // constructor(private shoppingListService: ShoppingListService) {}
  constructor(private recipeService: RecipeService) {}

  ngOnInit() {}

  // onAddToList() {
  //   this.recipe.ingredients.forEach(ingredient => {
  //     this.shoppingListService.addIngredients(ingredient);
  //   });
  // }

  onAddToList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }
}
