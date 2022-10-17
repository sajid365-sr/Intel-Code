import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog/Blog";
import Home from "../components/Home/Home";
import Statistics from "../components/Statistics/Statistics";
import Topics from "../components/Topics/Topics";
import Main from "../Layout/Main";

export const routes = createBrowserRouter([
    {
        path:'/', 
        element:<Main></Main>,
        children:[
            {
                path:'/',
                loader:() => fetch('https://openapi.programming-hero.com/api/quiz'),
                element:<Home></Home>
            },
            {
                path:'/topics',
                element:<Topics></Topics>
            },
            {
                path:'/statistics',
                element:<Statistics></Statistics>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            }
        ]

    }
])