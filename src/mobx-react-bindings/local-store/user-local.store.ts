import {makeAutoObservable} from "mobx";

export class UserLocaleStore {
    name: string = ''
    surname: string = ''
    email: string = ''

    constructor() {
        makeAutoObservable(this, {}, {autoBind: true})
    }

    setName (p: string) {
        this.name = p
    }

    setSurname (p: string) {
        this.surname = p
    }

    setEmail (p: string) {
        this.email = p
    }
}