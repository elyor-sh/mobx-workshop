import React from 'react';
import {RootStoreExampleApp} from "./root-store";

const MobxReactBindings = () => {
    return (
        <div className='counter'>
            <div className="bold mt-1">
                Root store
            </div>
           <div className="my-2">
               <RootStoreExampleApp />
           </div>
        </div>
    );
};

export {MobxReactBindings}