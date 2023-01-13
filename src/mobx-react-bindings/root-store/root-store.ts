import {PostStore} from "./post-store";
import {UserStore} from "./user-store";

export class RootStore {
    postStore = new PostStore()
    userStore = new UserStore()
}