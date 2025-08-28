import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {MainLayout} from "./layouts/MainLayout.tsx"
import {BPage} from "./pages/BPage.tsx";
import {APage} from "./pages/APage.tsx";
import {MainPage} from "./pages/MainPage.tsx";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <MainLayout/>,
            children: [
                {
                    path: "a",
                    element: <APage/>
                },
                {
                    path: "b",
                    element: <BPage/>
                },
                {
                    path:"",
                    element: <MainPage/>
                }
            ]
        },

    ]
)

createRoot(document.getElementById('root')!).render(<RouterProvider router={router}/>)
