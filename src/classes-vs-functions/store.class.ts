import {makeAutoObservable} from "mobx";
import {WorkType} from "./types";

class StoreClass {

    work?: WorkType = undefined

    constructor() {
        makeAutoObservable(this)
    }

    setWork (work: WorkType) {
        this.work = work
    }

}

export const storeClass = new StoreClass()