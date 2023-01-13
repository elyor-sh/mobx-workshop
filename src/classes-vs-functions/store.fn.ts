import {makeAutoObservable} from "mobx";
import {WorkType} from "./types";

// Functionlarda qo'shimcha type yozishga to'g'ri keladi
// TS dagi ReturnType<fn> ham yordam bermaydi, u bn ishlasak union typelar yo'qoladi

export type StoreFnType = {
    work?: WorkType
    setWork: (work: WorkType) => void
}

const getStore = (): StoreFnType => {
    return makeAutoObservable({
        work: undefined,
        setWork (work: WorkType) {
            this.work = work
        },
        // generateWork () {   // misol uchun
        //     this.work = {
        //         id: 1,
        //         title: 'Generated work'
        //     }
        // }
    })
}

export const storeFn = getStore()