import {
  createBrowserRouter,
} from "react-router-dom";

import App from './App.jsx'
import Form from './components/Form/Form.jsx'
import Login from './components/Login/Login .jsx'
import Content from "./components/Content/Content.jsx";
import Profile from "./components/student/Profile.jsx";
import Contact from "./components/student/contact/Contact.jsx";
import ProfileStatus from "./components/student/profliestatus/ProfileStatus.jsx";
import EditProfile from "./components/student/edit/EditProfile.jsx";
import ManagerLogin from "./components/manager/Login/ManagerLogin.jsx";
import StudentList from "./components/manager/manage/studentList/StudentList.jsx";
import Manager from "./components/manager/manage/Manager.jsx";
import ProgramAndDepartment from "./components/manager/manage/ProgramsAndDepartments/ProgramAndDepartment.jsx";
import Show from "./components/manager/manage/show/Show.jsx";
import AdminLogin from "./components/admin/Login/AdminLogin.jsx";
import Admin from "./components/admin/manage/Admin.jsx";
import StudentListadmin from "./components/admin/manage/studentList/StudentListadmin.jsx";
import ShowA from "./components/admin/manage/show/ShowA.jsx";



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
      {
        path: "/managerLogin",
        element: <ManagerLogin/>,
      },
      {
        path: "/adminLogin",
        element: <AdminLogin/>,
      },
      {
        path: "/manager",
        element: <Manager/>,
        children:[
          {
              path:"",
              element:<StudentList/>
          },
          {
            path:"/manager/programsAndDepartments",
            element:<ProgramAndDepartment/>
          },
          {
            path:"/manager/show/:id",
            element:<Show/>
          },
        ]
      },
      {
        path: "/Admin",
        element: <Admin/>,
        children:[
          {
              path:"",
              element:<StudentListadmin/>
          },
          {
              path:"Admin/show",
              element:<ShowA/>
          },
          
        ]
      },
    ]
  },

]);

export default Router

