import {
  createBrowserRouter,
} from "react-router-dom";
import App from "../App";
import Home from "../layout/Pages/Home/Home";
import About from "../layout/Pages/About/About";
import Services from "../layout/Pages/Services/Services";
import Blog from "../layout/Pages/Blog/Blog";
import Contact from "../layout/Pages/Contact/Contact";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
        {path:'/',
         element:<Home></Home>
        },
        {path:'/about',
         element:<About></About>
        },
        {path:'/services',
         element:<Services></Services>
        },
        {path:'/blog',
         element:<Blog></Blog>
        },
        {path:'/contact',
         element:<Contact></Contact>
        },
    ]
  },
]);


export default router;