import {http} from "../shared/api";

export type TodoModel = {
    userId: number
    id: number
    title: string
    completed: boolean
}

export type BaseQueryType = {
    _limit?: number
    _page?: number
}

export const fetchTodosApi = async (params: BaseQueryType = {}): Promise<TodoModel[]> => {
   const response = await http.get<TodoModel[]>('/todos', {params})
   return response.data as TodoModel[]
}