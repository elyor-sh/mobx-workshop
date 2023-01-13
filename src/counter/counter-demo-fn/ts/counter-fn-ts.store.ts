import {makeAutoObservable} from "mobx";

const counterStoreFunctionTS = () => {
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

export const counterStoreFnTS = counterStoreFunctionTS()