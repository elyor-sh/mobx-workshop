import {makeAutoObservable} from "mobx";
import {http} from "../../shared/api";

interface PostType {
    userId: number
    id: number
    title: string
    body: string
}

export class PostStore {

    loading: boolean = false

    posts: PostType[] = []

    constructor () {
        makeAutoObservable(this, {}, {autoBind: true})
    }

    setLoading (p: boolean) {
        this.loading = p
    }

    setPosts (posts: PostType[]) {
        this.posts = posts
    }

    async fetchPosts () {
        this.setLoading(true)
        const response = await http.get<PostType[]>('/posts', {params: {_limit: 10}})
        this.setPosts(response.data as PostType[])
        this.setLoading(false)
    }
}