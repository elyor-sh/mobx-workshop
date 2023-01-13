import React, {useEffect} from 'react';
import {observer} from "mobx-react-lite";
import {baseMobxStore} from "./base-mobx.store.js";

// mobx store da o'zgarish bo'lganini bilish uchun componentni observer ga o'rash kk
const BaseMobx = observer(() => {

    useEffect(() => {

        const timer = setInterval(() => {
            baseMobxStore.setSecond(baseMobxStore.second + 1)
        }, 1000)

        return () => {
            clearInterval(timer)
        }
    }, [])
    return (
        <div className='counter'>
            <h2>Bazoviy Mobx:</h2>
            <div>Minute: <span className="highlight">{baseMobxStore.minute}</span></div>
            <div>Second: <span className="highlight">{baseMobxStore.second}</span></div>
            <button className="my-2 dark" onClick={() => baseMobxStore.reset()}>
                Reset second
            </button>
            <div/>
            <button className="my-2 danger" onClick={() => baseMobxStore.second = 0}>
                Actionsiz to'g'ridan to'g'ri modifikatsiya
            </button>
        </div>
    );
});

export {BaseMobx}