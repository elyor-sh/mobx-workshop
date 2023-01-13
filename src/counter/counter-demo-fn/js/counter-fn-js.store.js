import {makeAutoObservable} from "mobx";

const counterStoreFunction = () => {
    return makeAutoObservable({
        count: 0,
        increment() {
            this.count += 1
        },
        decrement() {
            this.count -= 1
        },
        get square () {
            return this.count * this.count
        }
    })
}

export const counterStoreFn = counterStoreFunction()