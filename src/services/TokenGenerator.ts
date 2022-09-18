import * as jwt from "jsonwebtoken"

export class TokenGenerator {
    public generateToken = (input: AuthenticationData): string => {
        const token = jwt.sign(
            {
                id: input.id,
                role: input.role,
            },
            process.env.JWT_KEY as string,
            {
                expiresIn: process.env.EXPIRES_IN as string
            }
        );
        return token
    }
}

export type AuthenticationData = {
    id: string,
    role: string
}