import {
  createBrowserRouter,
} from "react-router-dom";
import App from "../App";
import Home from "../layout/Pages/Home/Home";
import About from "../layout/Pages/About/About";
import Services from "../layout/Pages/Services/Services";
import Blog from "../layout/Pages/Blog/Blog";
import Contact from "../layout/Pages/Contact/Contact";
import Login from "../layout/Pages/Login/Login";
import SignUp from "../layout/Pages/SignUp/SignUp";


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
        {path:'/login',
         element:<Login></Login>
        },
        {path:'/signup',
         element:<SignUp></SignUp>
        },
    ]
  },
]);


export default router;