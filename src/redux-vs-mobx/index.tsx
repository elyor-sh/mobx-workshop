import React from 'react';
import {MobxApp} from "./mobx";
import {ReduxApp} from "./redux";

const MobxVSRedux = () => {
    return (
        <div className='counter'>
            <h2>Mobx vs Redux</h2>
            <div className="mt-1 bold">
                Mobx App
            </div>
            <MobxApp />
            <hr/>
            <div className='my-2' />
            <div className="mt-1 bold">
                Redux App
            </div>
            <ReduxApp />
        </div>
    );
};

export {MobxVSRedux}