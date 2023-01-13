import {autorun, makeAutoObservable} from "mobx";

class BaseMobxStore {

    // store dagi data
    second = 0

    constructor() {
        // class dagi data / action / computed larni avtomatik podpiska qilish
        makeAutoObservable(this)
    }

    // action argument bilan
    setSecond (value) {
        this.second = value
    }

    // action
    reset () {
        this.second = 0
    }

    // computed value
    get minute () {
        return Math.round(this.second / 60)
    }

}

export const baseMobxStore = new BaseMobxStore()

export const timerAutoRun = autorun(() => {
    console.log(`base mobx store second o'zgardi::`, baseMobxStore.second)
})

// Agar autorun ni to'xtatish kerak bo'lsa  timerAutoRun()  chaqirilsa yetarli