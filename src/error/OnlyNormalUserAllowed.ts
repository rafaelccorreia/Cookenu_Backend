import { BaseError } from "./BaseError"

export class OnlyNormalUserAllowed extends BaseError {
    constructor() {
        super("Only 'normal' user is allowed to use this functionality.", 422)
    }
}