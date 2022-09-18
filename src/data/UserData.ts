import { UserEntity } from "../entities/UserEntity"
import BaseDataBase from "./BaseDataBase"

class UserData extends BaseDataBase {
    public userTableName = "cookenu_user"

    async insertUser(user: UserEntity): Promise<void> {
        await this.getConnection().insert({
            id: user.getId(),
            name: user.getName(),
            email: user.getEmail(),
            password: user.getPassword(),
            role: user.getRole()
        })
            .into(this.userTableName)
    }

    async selectUserByEmail(email: string): Promise<UserEntity> {
        const result = await this.getConnection()
            .select("*")
            .from(this.userTableName)
            .where({ email })

        return new UserEntity(result[0].id, result[0].name, result[0].email, result[0].password, result[0].role)
    }

    public async selectUserById(id: string): Promise<any> {
        const result = await this.getConnection()
            .select("*")
            .from(this.userTableName)
            .where({ id })

        return new UserEntity(result[0].id, result[0].name, result[0].email, result[0].password, result[0].role)
    }

    public async insetFollow(idFollower: string, idFollowed: string): Promise<void> {
        await this.getConnection()
        .insert({
            id_follower: idFollower,
            id_followed: idFollowed
        })
        .into("cookenu_followers")
    }

    public async deleteFollow(idFollower: string, idFollowed: string): Promise<void> {
        await this.getConnection()
        .delete()
        .from("cookenu_followers")
        .where({id_follower: idFollower})
        .andWhere({id_followed: idFollowed})
    }

    public async selectFeed(id: string) {
        const result = await this.getConnection()
        .select("cookenu_recipe.*", "cookenu_user.name")
        .from("cookenu_followers")
        .innerJoin("cookenu_user", "cookenu_followers.id_followed", "cookenu_user.id")
        .innerJoin("cookenu_link_recipe_user", "cookenu_followers.id_followed", "cookenu_link_recipe_user.user_id")
        .innerJoin("cookenu_recipe", "cookenu_link_recipe_user.recipe_id", "cookenu_recipe.id")
        .where({"cookenu_followers.id_follower": `${id}`})

        return result
    }

}

export default UserData