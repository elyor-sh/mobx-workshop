import {injectStores} from '@mobx-devtools/tools';
import {counterStoreClass} from '../counter/counter-demo-classes/counter-demo-js/counter-class.store.js'
import {counterStoreTS} from "../counter/counter-demo-classes/counter-demo-ts/counter-store-ts";
import {counterStoreFn} from "../counter/counter-demo-fn/js/counter-fn-js.store"
import {counterStoreFnTS} from "../counter/counter-demo-fn/ts/counter-fn-ts.store";
import {storeClass} from "../classes-vs-functions/store.class";
import {storeFn} from "../classes-vs-functions/store.fn";
import {baseMobxStore} from "../base-mobx/base-mobx.store.js";
import {todoStore} from "../todo/todo-store";
import {mobxStore} from "../redux-vs-mobx/mobx/mobx-store";

export const setDevTools = () => {
    injectStores({
        counterStoreClass,
        counterStoreTS,
        counterStoreFn,
        counterStoreFnTS,
        storeClass,
        storeFn,
        baseMobxStore,
        todoStore,
        mobxStore,
    });
}