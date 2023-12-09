import { createBrowserRouter } from "react-router-dom";
import Contact from "../Components/Contact/Contact";
import Home from '../Components/Home/Home';
import Main from '../../Layout/Main';


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: "/contact",
                element: <Contact />
            }


        ]
    }
])