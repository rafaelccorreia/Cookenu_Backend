export class RecipeEntity {
    constructor(
        private id: string, 
        private title: string, 
        private description: string, 
        private creation_date: Date, 
    ) {}

    public getId(): string {
        return this.id
    }
    public getTitle(): string {
        return this.title
    }
    public getDescription(): string {
        return this.description
    }
    public getDate(): Date {
        return this.creation_date
    }
}