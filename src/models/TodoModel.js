export class TodoModel {

    constructor(title){
        this.title = title
        this.createdAt = new Date()
    }

    update(newTitle){
        this.title = newTitle;
    }

    getData(){
        return this.title
    }
}