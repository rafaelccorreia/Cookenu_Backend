import { BaseError } from "./BaseError"

export class InvalidPassword extends BaseError {
    constructor() {
        super("Invalid Password!", 422)
    }
}