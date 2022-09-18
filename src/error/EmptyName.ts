import { BaseError } from "./BaseError"

export class EmptyName extends BaseError {
    constructor() {
        super('Name field cannot be empty', 422)
    }
}