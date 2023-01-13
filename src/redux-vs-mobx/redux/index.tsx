import React, {memo} from 'react';
import {Provider, useDispatch, useSelector} from "react-redux";
import {AppDispatch, FormState, RootState, setFormState, store} from "./redux-store";

const ReduxFormPartOne = memo(() => {

    console.log('re-rendered redux from part one')

    const {name, email, surname} = useSelector((state: RootState) => state.form)
    const dispatch: AppDispatch = useDispatch()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name as keyof FormState
        const value = e.target.value
        dispatch(setFormState({name, value}))
    }

    return (
        <div>
            <div className='mt-1'> Redux Form Part One</div>
            <div className='mt-1'>
                <input
                    placeholder='Name'
                    name='name'
                    value={name}
                    onChange={handleChange}
                />
            </div>
            <div className='mt-1'>
                <input
                    placeholder='Surname'
                    name='surname'
                    value={surname}
                    onChange={handleChange}
                />
            </div>
            <div className='mt-1'>
                <input
                    placeholder='Email'
                    name='email'
                    value={email}
                    onChange={handleChange}
                />
            </div>
        </div>
    )
})

const ReduxFormPartTwo = memo(() => {

    console.log('re-rendered redux from part two')

    const {job, tool, experience} = useSelector((state: RootState) => state.form)
    const dispatch: AppDispatch = useDispatch()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name as keyof FormState
        const value = e.target.value
        dispatch(setFormState({name, value}))
    }

    return (
        <div>
            <div className='mt-1'> Redux Form Part Two</div>
            <div className='mt-1'>
                <input
                    placeholder='Job'
                    name='job'
                    value={job}
                    onChange={handleChange}
                />
            </div>
            <div className='mt-1'>
                <input
                    placeholder='Tool'
                    name='tool'
                    value={tool}
                    onChange={handleChange}
                />
            </div>
            <div className='mt-1'>
                <input
                    placeholder='Experience'
                    name='experience'
                    value={experience}
                    onChange={handleChange}
                />
            </div>
        </div>
    )
})

const Redux = () => {
    return (
        <>
            <ReduxFormPartOne />
            <ReduxFormPartTwo />
        </>
    )
}

const ReduxApp = () => {
    return (
        <Provider store={store}>
            <Redux />
        </Provider>
    );
};

export {ReduxApp}