import { BaseError } from "./BaseError"

export class InvalidEmail extends BaseError {
    constructor() {
        super("Invalid Email!", 422)
    }
}