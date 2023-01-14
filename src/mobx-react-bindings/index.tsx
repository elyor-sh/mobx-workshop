import React from 'react';
import {Link, Outlet} from 'react-router-dom'

const MobxReactBindings = () => {
    return (
        <div className='counter'>
            <h2>React Mobx bindings</h2>
            <ul>
                <li style={{listStyle: 'disc'}}>
                    <Link to=''>Root store</Link>
                </li>
                <li style={{listStyle: 'disc'}}>
                    <Link to='singleton'>Singleton store</Link>
                </li>
                <li style={{listStyle: 'disc'}}>
                    <Link to='local-store'>Locale store</Link>
                </li>
            </ul>
            <hr className='my-2'/>
           <Outlet />
        </div>
    );
};

export {MobxReactBindings}