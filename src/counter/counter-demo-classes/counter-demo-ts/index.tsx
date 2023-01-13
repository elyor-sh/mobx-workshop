import React from 'react';
import {observer} from 'mobx-react-lite'
import {counterStoreTS} from "./counter-store-ts";

const CounterDemoTS = observer(() => {
    return (
        <div className='counter'>
            <h2>Mobx counter example typescript classes</h2>
            <div className="count">Count: <span className='count-m'>{counterStoreTS.count}</span></div>
            <div className="count">Square of count: <span className='count-s'>{counterStoreTS.square}</span></div>
            <button className="count-btn inc" onClick={() => counterStoreTS.increment()}>
                increment
            </button>
            <button className="count-btn dec" onClick={() => counterStoreTS.decrement()}>
                decrement
            </button>
        </div>
    );
});

export {CounterDemoTS}