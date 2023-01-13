import React from 'react';
import {observer} from 'mobx-react-lite'
import {counterStoreClass} from "./counter-class.store.js";

const CounterDemoJS = observer(() => {
    return (
        <div className='counter'>
            <h2>Mobx counter example javascript</h2>
            <div className="count">Count: <span className='count-m'>{counterStoreClass.count}</span></div>
            <div className="count">Square of count: <span className='count-s'>{counterStoreClass.square}</span></div>
            <button className="count-btn inc" onClick={() => counterStoreClass.increment()}>
                increment
            </button>
            <button className="count-btn dec" onClick={() => counterStoreClass.decrement()}>
                decrement
            </button>
        </div>
    );
});

export {CounterDemoJS}