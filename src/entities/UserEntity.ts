export enum USER_ROLES {
    NORMAL = 'normal',
    ADMIN = 'admin'
}

export class UserEntity {
    constructor(
        private id: string, 
        private name: string, 
        private email: string, 
        private password: string, 
        private role: USER_ROLES
    ) {}

    public getId(): string {
        return this.id
    }
    public getName(): string {
        return this.name
    }
    public getEmail(): string {
        return this.email
    }
    public getPassword(): string {
        return this.password
    }
    public getRole(): string {
        return this.role
    }
}