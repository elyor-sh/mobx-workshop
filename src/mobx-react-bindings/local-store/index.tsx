import React, {useState} from 'react';
import {UserLocaleStore} from "./user-local.store";
import {observer} from "mobx-react-lite";

const LocalStoreApp = observer(() => {
    const [userStore] = useState(() => new UserLocaleStore())

    return (
        <div>
            <div className="bold">Locale store example</div>
            <div className="mt-1">
                <input
                    placeholder='Name'
                    value={userStore.name}
                    onChange={e => userStore.setName(e.target.value)}
                />
            </div>
            <div className="mt-1">
                <input
                    placeholder='Surname'
                    value={userStore.surname}
                    onChange={e => userStore.setSurname(e.target.value)}
                />
            </div>
            <div className="mt-1">
                <input
                    placeholder='Email'
                    value={userStore.email}
                    onChange={e => userStore.setEmail(e.target.value)}
                />
            </div>
        </div>
    );
});

export {LocalStoreApp}