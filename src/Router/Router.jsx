import {
    createBrowserRouter,
    
  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import JobDetails from "../Pages/Home/JobDetails/JobDetails";
import jobs from "../../public/Job.json"

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children :[
        {
          path: '/',
          element : <Home></Home>
        },
        {
          path:'/jobs/:id',
          element:<JobDetails></JobDetails>,
          loader: async ({ params }) => {
            const job = jobs.find((job) => job._id === params.id);
            if (!job) throw new Error('Job not found');
            return job;
          }
        },
        {
          path: 'register',
          element : <Register></Register>
        },
        {
          path: 'login',
          element : <Login></Login>
        }
      ]
    },
  ]);
 export default router;