import React, {useEffect} from 'react';
import {observer} from "mobx-react-lite";
import {RootStoreContext, useStore} from './config.store'
import {RootStore} from "./root-store";

const UsersList = observer(() => {

    const {userStore} = useStore()

    useEffect(() => {
        userStore.fetchUsers()
    }, [])

    return (
        <ul>
            <h2>Users: </h2>
            {
                userStore.users.map(user => (
                    <li key={user.id}>
                        {user.id}. {user.name}
                    </li>
                ))
            }
        </ul>
    )
})

const PostList = observer(() => {

    const {postStore} = useStore()

    useEffect(() => {
        postStore.fetchPosts()
    }, [])

    if(postStore.loading){
        return (
            <div>
                <h2>Posts:</h2>
                <div>Loading...</div>
            </div>
        )
    }

    return (
        <ul>
            <h2>Posts: </h2>
            {
                postStore.posts.map(post => (
                    <li key={post.id}>
                        {post.id}.  {post.title}
                    </li>
                ))
            }
        </ul>
    )
})

const App = () => {
    return (
        <div>
            <UsersList />
            <PostList />
        </div>
    );
}

const RootStoreExampleApp = () => {
    return (
        <RootStoreContext.Provider value={new RootStore()}>
            <App />
        </RootStoreContext.Provider>
    );
};

export {RootStoreExampleApp};