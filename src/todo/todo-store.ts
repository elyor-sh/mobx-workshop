import {makeAutoObservable} from "mobx";
import {BaseQueryType, fetchTodosApi, TodoModel} from "./api";

class TodoStore {

    limit: number = 10
    page: number = 1

    todos: TodoModel[] = []

    constructor() {
        makeAutoObservable(this)
        // makeAutoObservable(this, {}, {autoBind: true}) // auto binding this bn muammoni hal qiladi
    }

    setTodos (todos: TodoModel[]) {
        this.todos = todos
    }

    nextPage () {
        if(this.page * this.limit < 200){
            this.page += 1
        }else {
            this.page = 1
        }
    }

    prevPage () {
        if(this.page > 1){
            this.page -= 1
        }else {
            this.page = 200 / this.limit
        }
    }


    async getListTodos () {

        const query: BaseQueryType = {
            _limit: this.limit,
            _page: this.page
        }

        const todos = await fetchTodosApi(query)
        this.setTodos(todos)
    }
}

export const todoStore = new TodoStore()