import {observer} from "mobx-react-lite";
import React from "react";
import {counterStoreFnTS} from "./counter-fn-ts.store";

const CounterDemoTSFunction = observer(() => {

    return (
        <div className='counter'>
            <h2>Mobx counter example typescript functions</h2>
            <div className="count">Count: <span className='count-m'>{counterStoreFnTS.count}</span></div>
            <div className="count">Square of count: <span className='count-s'>{counterStoreFnTS.square}</span></div>
            <button className="count-btn inc" onClick={() => counterStoreFnTS.increment()}>
                increment
            </button>
            <button className="count-btn dec" onClick={() => counterStoreFnTS.decrement()}>
                decrement
            </button>
        </div>
    );
});

export {CounterDemoTSFunction}