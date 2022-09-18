import { BaseError } from "./BaseError"

export class InvalidRole extends BaseError {
    constructor() {
        super("Invalid value for role, 'normal' or 'admin' is expected", 422)
    }
}