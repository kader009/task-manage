import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home";

const route = createBrowserRouter([
  {
    path:'/',
    element: <MainLayout/>,
    children:[
      {
        index: true,
        element: <Home/>
      }
    ]
  }
])


export default route;