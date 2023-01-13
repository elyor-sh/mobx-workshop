import {configureStore, createSlice, Draft, PayloadAction} from '@reduxjs/toolkit'

export interface FormState {
    name: string
    surname: string
    email: string
    job: string
    experience: string
    tool: string
}

const initialState: FormState = {
    name: '',
    surname: '',
    email: '',
    job: '',
    experience: '',
    tool: ''
}

export const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        setFormState: (state: Draft<FormState>, action: PayloadAction<{name: keyof FormState, value: string}>) => {
            state[action.payload.name] = action.payload.value
        },
    },
})

export const { setFormState } = formSlice.actions

export const store = configureStore({
    reducer: {
        form: formSlice.reducer
    },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch