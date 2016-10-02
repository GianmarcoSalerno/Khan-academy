var recipeTitle = "Pizza";
var recipeServings = 4;
var recipeIngredients = ["Flour ", "Water ","Mozzarella "," Tomato Sauce"];

var recipe = {
    title: "Pizza",
    servings: 4,
    ingredients: ["Flour ", "Water ","Mozzarella "," Tomato Sauce"]
};

fill(26, 26, 26);
textSize(20);
text(recipe.title, 10, 23);
text("Serves: " + recipe.servings, 10, 55);
text("Ingredients: " + recipe.ingredients, 10, 85);
