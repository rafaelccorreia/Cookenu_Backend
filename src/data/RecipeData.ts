import { RecipeEntity } from "../entities/RecipeEntity"
import BaseDataBase from "./BaseDataBase"

class RecipeData extends BaseDataBase {
    public recipeTableName = "cookenu_recipe"

    async insertRecipe(recipe: RecipeEntity): Promise<void> {
        await this.getConnection().insert({
            id: recipe.getId(),
            title: recipe.getTitle(),
            description: recipe.getDescription(),
            creation_date: recipe.getDate()
        })
            .into(this.recipeTableName)
    }

    async linkRecipeToUser(userId: string, recipeId: string): Promise<void> {
        await this.getConnection().insert({
            user_id: userId,
            recipe_id: recipeId
        })
            .into("cookenu_link_recipe_user")
    }

    public async selectRecipeById(id: string): Promise<any> {
        const result = await this.getConnection()
            .select("*")
            .from(this.recipeTableName)
            .where({ id })

        return new RecipeEntity(result[0].id, result[0].title, result[0].description, result[0].creation_date)
    }
}

export default RecipeData