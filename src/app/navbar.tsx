import React from 'react';
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <ul className="navbar">
                <li className="logo">
                    Mobx eng zo'r STM
                </li>
                <li>
                    <Link to='/'>Base</Link>
                </li>
                <li>
                    <Link to='/counter-js'>Counter example js classes</Link>
                </li>
                <li>
                    <Link to='/counter-js-fn'>Counter example js functions</Link>
                </li>
                <li>
                    <Link to='/counter-ts'>Counter example ts classes</Link>
                </li>
                <li>
                    <Link to='/counter-ts-fn'>Counter example ts functions</Link>
                </li>
                <li>
                    <Link to='/class-vs-fn'>Classes vs Functions</Link>
                </li>
                <li>
                    <Link to='/todo'>Data fetching && this bilan muammo</Link>
                </li>
                <li>
                    <Link to='/mobx-react-bindings'>Mobx React bindings</Link>
                </li>
                <li>
                    <Link to='/mobx-vs-redux'>Mobx vs Redux</Link>
                </li>
            </ul>
        </>
    );
};

export {Navbar}