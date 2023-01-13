import {makeAutoObservable} from "mobx";
import React from "react";

export interface FormState {
    name: string
    surname: string
    email: string
    job: string
    experience: string
    tool: string
}

class MobxStore {

    form: FormState = {
        name: '',
        surname: '',
        email: '',
        job: '',
        experience: '',
        tool: ''
    }

    constructor() {
        makeAutoObservable(this, {}, {autoBind: true})
    }

    setFormState (name: keyof FormState, value: string) {
        this.form[name] = value
    }
}

export const mobxStore = new MobxStore()
