import {
  createBrowserRouter,
} from "react-router-dom";

import App from './App.jsx'
import Form from './components/Form/Form.jsx'
import Login from './components/Login/Login .jsx'
import Content from "./components/Content/Content.jsx";
import Profile from "./components/student/Profile.jsx";
import Contact from "./components/student/contact/Contact.jsx";
import ProfileStatus from "./components/student/ProfileStatus.jsx";
import EditProfile from "./components/student/EditProfile.jsx";



const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Content />
      },
      {
        path: "/form",
        element: <Form />,
        
      },
      {
        path: "/login",
        element: <Login />,
        
      },
      {
        path: "/profile",
        element: <Profile />,
        children:[
          {
              path:"",
              element:<ProfileStatus/>
          },
          {
            path:"/profile/contact",
            element:<Contact/>
          },
          {
            path:"/profile/Edit",
              element:<EditProfile/>
          }
        ]
      },
    ]
  },

]);

export default Router

