import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home";
import ContactUsPage from "../pages/ContactUsPage";

const route = createBrowserRouter([
  {
    path:'/',
    element: <MainLayout/>,
    children:[
      {
        index: true,
        element: <Home/>
      },
      {
        path:'/contact-us',
        element: <ContactUsPage/>
      }
    ]
  }
])


export default route;