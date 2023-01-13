import React from 'react';
import {observer} from "mobx-react-lite";
import {storeClass} from "./store.class";
import {storeFn} from "./store.fn";

const ClassesVsFunctions = observer(() => {
    return (
        <div className='counter'>
            <h2>Classes vs Functions:</h2>
            <div>
                Class:
            </div>
            {
                storeClass.work
                    ?
                    <div className="highlight mt-1">
                        {storeClass.work.title}
                    </div>
                    : null
            }
            <button className="dark mt-1" onClick={() => storeClass.setWork({
                id: 1,
                title: `Mobx class store work ${Math.round(Math.random() * 100)}`
            })}>
                Add work (class)
            </button>
            <hr className='my-2'/>
            <div>
                Function:
            </div>
            {
                storeFn.work
                    ?
                    <div className="highlight mt-1">
                        {storeFn.work.title}
                    </div>
                    : null
            }
            <button className="dark mt-1" onClick={() => storeFn.setWork({
                id: 1,
                title: `Mobx function store work ${Math.round(Math.random() * 100)}`
            })}>
                Add work (function)
            </button>
            <button></button>
        </div>
    );
});

export {ClassesVsFunctions}