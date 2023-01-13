import {makeAutoObservable} from "mobx";

class CounterStoreClass {

    constructor () {
        makeAutoObservable(this)
    }

    count = 0

    increment () {
        this.count += 1
    }

    decrement (){
        this.count -= 1
    }

    get square () {
        return this.count * this.count
    }
}

export const counterStoreClass = new CounterStoreClass()