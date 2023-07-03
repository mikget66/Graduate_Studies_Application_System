import {
    createBrowserRouter,
  } from "react-router-dom";
  
  import App from './App.jsx'
  import Form from './components/Form/Form.jsx'
  import Content from "./components/Content/Content.jsx";

  
  const Router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children:[
        {
          path:"",
          element: <Content/>
        },
        {
          path: "/form",
          element: <Form />,
          children:[
            {path:""}
          ]
        },
      ]
    },
    
  ]);
  
  export default Router
  
  