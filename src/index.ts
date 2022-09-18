import { app } from "./app"
import { Recipe } from "./endpoints/Recipe"
import { User } from "./endpoints/User"

const user: User = new User()
const recipe: Recipe = new Recipe()

app.get("/login", user.login)
app.get("/user/profile", user.getUserProfile)
app.get("/user/feed", user.getUserFeed)
app.get("/user/:id", user.getAnotherUserProfile)
app.post("/signup", user.createUser)
app.post("/user/follow", user.followUser)
app.post("/user/unfollow", user.unfollowUser)

app.get("/recipe/:id", recipe.getRecipe)
app.post("/recipe", recipe.createRecipe)