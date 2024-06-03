import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home";
import ContactUsPage from "../pages/ContactUsPage";
import AboutUs from "../pages/AboutUs";
import BlogSection from "../pages/BlogSection";

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
      },
      {
        path:'/about-us',
        element: <AboutUs/>
      },
      {
        path:'/blog',
        element: <BlogSection/>
      }
    ]
  }
])


export default route;