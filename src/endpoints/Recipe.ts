import { Request, Response } from "express"
import RecipeData from "../data/RecipeData"
import { RecipeEntity } from "../entities/RecipeEntity"
import { MissingFields } from "../error/MissingFields"
import { GetData } from "../services/GetData"
import { IdGenerator } from "../services/IdGenerator"

export class Recipe {
    public async createRecipe(req: Request, res: Response) {
        try {
            const token = req.headers.authorization as string
            const { title, description } = req.body

            if(!title || !description) {
                throw new MissingFields()
            }

            const getData: GetData = new GetData()

            const userId = getData.getData(token).id

            const recipeData: RecipeData = new RecipeData()

            const id: IdGenerator = new IdGenerator()

            const recipe: RecipeEntity = new RecipeEntity(id.generateId(), title, description, new Date(Date.now()))

            await recipeData.insertRecipe(recipe)
            await recipeData.linkRecipeToUser(userId, recipe.getId())

            res.status(200).send({
                message: "Recipe created successfully"
            })

        } catch (error: any) {
            res.status(error.statusCode || 500).send({ message: error.sqlMessage || error.message })
        }
    }

    public async getRecipe(req: Request, res: Response) {
        try {

            const token = req.headers.authorization as string
            const { id } = req.params

            const getData: GetData = new GetData()
            const authenticationData = getData.getData(token)

            const recipeData: RecipeData = new RecipeData()

            const recipe = await recipeData.selectRecipeById(id)

            res.status(200).send({
                id: recipe.id,
                title: recipe.title,
                description: recipe.description,
                createdAt: recipe.creation_date
            })

        } catch (error: any) {
            res.status(error.statusCode || 500).send({ message: error.sqlMessage || error.message })
        }
    }
}