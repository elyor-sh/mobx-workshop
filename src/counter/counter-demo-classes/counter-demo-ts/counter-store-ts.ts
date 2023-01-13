import {makeAutoObservable} from "mobx";

class CounterStoreTs {

    constructor () {
        makeAutoObservable(this)
    }

    count: number = 0

    increment (): void {
        this.count += 1
    }

    decrement (): void {
        this.count -= 1
    }

    get square (): number {
        return this.count * this.count
    }
}

export const counterStoreTS = new CounterStoreTs()