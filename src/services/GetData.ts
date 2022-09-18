import * as jwt from "jsonwebtoken";
import { AuthenticationData } from "./TokenGenerator";

export class GetData {
    public getData = (token: string): AuthenticationData => {
        const payload = jwt.verify(token, process.env.JWT_KEY as string) as any
        const result = {
            id: payload.id,
            role: payload.role,
        }
        return result
    }
}
