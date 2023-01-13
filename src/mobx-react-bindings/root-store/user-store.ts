import {makeAutoObservable} from "mobx";
import {http} from "../../shared/api";

export type UserType = {
   id: number
   name: string
}

export class UserStore {

    users: UserType[] = []

    constructor () {
        makeAutoObservable(this, {}, {autoBind: true})
    }

    setUsers (users: UserType[]) {
        this.users = users
    }

    async fetchUsers () {
        const res = await http.get<UserType[]>('users')
        this.setUsers(res.data as UserType[])
    }
}