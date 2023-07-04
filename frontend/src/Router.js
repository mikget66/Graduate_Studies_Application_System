import {
  createBrowserRouter,
} from "react-router-dom";

import App from './App.jsx'
import Form from './components/Form/Form.jsx'
import Content from "./components/Content/Content.jsx";
import Step1 from "./components/steps/Step1.jsx";
import Step2 from "./components/steps/Step2.jsx";


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
        children: [
          {
            path: "",
            element: <Step1 />
          }, {
            path: "/form/step2",
            element: <Step2 />
          },
        ]
      },
    ]
  },

]);

export default Router

