import { BaseError } from "./BaseError"

export class MissingFields extends BaseError {
    constructor() {
        super("Missing fields, please check the data", 422)
    }
}