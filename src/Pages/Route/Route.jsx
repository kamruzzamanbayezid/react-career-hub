import { createBrowserRouter } from "react-router-dom";
import Statictis from "../Statictis/Statictis";
import Home from "../Home/Home";
import AppliedJobs from "../AppliedJobs/AppliedJobs";
import JobDetails from "../JobDetails/JobDetails";
import Blog from "../Blog/Blog";

const router = createBrowserRouter([
      {
            path: '/',
            element: <Statictis></Statictis>,
            children: [
                  {
                        path: '/',
                        element: <Home></Home>
                  },
                  {
                        path: '/applied',
                        element: <AppliedJobs></AppliedJobs>,
                        loader: () => fetch('/jobs.json')
                  },
                  {
                        path: '/jobDetails/:id',
                        element: <JobDetails></JobDetails>,
                        loader: ({ params }) => fetch('/jobs.json')
                  },
                  {
                        path: '/blog',
                        element: <Blog></Blog>
                  }
            ]
      },

]);

export default router;