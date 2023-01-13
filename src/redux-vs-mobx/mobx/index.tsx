import React from 'react';
import {observer} from "mobx-react-lite";
import {FormState, mobxStore} from "./mobx-store";

const MobxAppPartOne = observer(() => {

    console.log('re-rendered mobx from part one')

    const {name, email, surname} = mobxStore.form

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name as keyof FormState
        const value = e.target.value
        mobxStore.setFormState(name, value)
    }

    return (
        <div>
            <div className='mt-1'> Mobx Form Part One</div>
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

const MobxAppPartTwo = observer(() => {

    console.log('re-rendered mobx from part two')

    const {job, experience, tool} = mobxStore.form

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name as keyof FormState
        const value = e.target.value
        mobxStore.setFormState(name, value)
    }

    return (
        <div>
            <div className='mt-1'> Mobx Form Part Two</div>
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

const MobxApp = () => {
    return (
        <div>
            <MobxAppPartOne />
            <MobxAppPartTwo />
        </div>
    );
};

export {MobxApp}