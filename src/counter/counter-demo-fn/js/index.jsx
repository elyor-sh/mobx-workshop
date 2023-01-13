import React from 'react';
import {observer} from 'mobx-react-lite'
import {counterStoreFn} from './counter-fn-js.store.js'

const CounterDemoJSFunction = observer(() => {

    return (
        <div className='counter'>
            <h2>Mobx counter example javascript functions</h2>
            <div className="count">Count: <span className='count-m'>{counterStoreFn.count}</span></div>
            <div className="count">Square of count: <span className='count-s'>{counterStoreFn.square}</span></div>
            <button className="count-btn inc" onClick={() => counterStoreFn.increment()}>
                increment
            </button>
            <button className="count-btn dec" onClick={() => counterStoreFn.decrement()}>
                decrement
            </button>
        </div>
    );
});

export {CounterDemoJSFunction}