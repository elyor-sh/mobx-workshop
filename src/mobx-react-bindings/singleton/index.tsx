import React, {useEffect} from 'react';
import {observer} from "mobx-react-lite";
import {userStore} from "./user-store";
import {postStore} from "./post-store";

const UsersList = observer(() => {

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

const SingletonBindingExampleApp = () => {
    return (
        <div>
            <div className="bold mt-1">
                Singleton store:
            </div>
            <div className="my-2">
                <App />
            </div>
        </div>
    );
};

export {SingletonBindingExampleApp};