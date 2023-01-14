import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import {Navbar} from "./navbar";
import {CounterDemoJS} from '../counter/counter-demo-classes/counter-demo-js'
import {CounterDemoTS} from "../counter/counter-demo-classes/counter-demo-ts";
import {CounterDemoJSFunction } from "../counter/counter-demo-fn/js";
import {CounterDemoTSFunction} from "../counter/counter-demo-fn/ts";
import {ClassesVsFunctions} from "../classes-vs-functions";
import {BaseMobx} from "../base-mobx";
import {Todo} from "../todo";
import {ToastContainer} from "react-toastify";
import {MobxVSRedux} from "../redux-vs-mobx";
import {MobxReactBindings} from "../mobx-react-bindings";
import {setDocTitle} from "../shared/lib";
import {RootStoreExampleApp} from "../mobx-react-bindings/root-store";
import {SingletonBindingExampleApp} from "../mobx-react-bindings/singleton";
import {LocalStoreApp} from "../mobx-react-bindings/local-store";

const Layout = () => {
    return (
        <div className='layout'>
            <ToastContainer />
            <Navbar />
            <main className='main'>
                <section className='header' />
                <section className="pages">
                    <Outlet />
                </section>
            </main>
        </div>
    )
}

const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: '',
                element: <BaseMobx />,
                loader: () => setDocTitle('Base Mobx')
            },
            {
                path: 'counter-js',
                element: <CounterDemoJS />,
                loader: () => setDocTitle('Counter Demo JS')
            },
            {
                path: 'counter-js-fn',
                element: <CounterDemoJSFunction  />,
                loader: () => setDocTitle('Counter Demo JS Function')
            },
            {
                path: 'counter-ts',
                element: <CounterDemoTS />,
                loader: () => setDocTitle('Counter Demo TS')
            },
            {
                path: 'counter-ts-fn',
                element: <CounterDemoTSFunction />,
                loader: () => setDocTitle('Counter Demo TS Function')
            },
            {
                path: 'class-vs-fn',
                element: <ClassesVsFunctions />,
                loader: () => setDocTitle('Classes VS Functions')
            },
            {
                path: 'todo',
                element: <Todo />,
                loader: () => setDocTitle('Data Fetching && this bilan muammo')
            },
            {
                path: 'mobx-react-bindings',
                element: <MobxReactBindings />,
                loader: () => setDocTitle('Mobx React bindings'),
                children: [
                    {
                        path: '',
                        element: <RootStoreExampleApp />
                    },
                    {
                        path: 'singleton',
                        element: <SingletonBindingExampleApp />
                    },
                    {
                        path: 'local-store',
                        element: <LocalStoreApp />
                    }
                ]
            },
            {
                path: 'mobx-vs-redux',
                element: <MobxVSRedux />,
                loader: () => setDocTitle('Mobx VS Redux'),
            },
        ]
    }
])

export const Routing = () => {
    return <RouterProvider router={router} />
}