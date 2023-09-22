import { useEffect, useState } from "react";
import Job from "../Job/job";

const JobCategoryList = () => {

      const [jobs, setJobs] = useState([]);

      useEffect(() => {
            fetch('/category.json')
                  .then(res => res.json())
                  .then(data => setJobs(data))
      }, []);


      return (
            <div className="max-w-7xl mx-auto lg:mt-32 my-6">
                  <h1 className="text-[#1A1919] text-5xl font-extrabold mb-4 text-center">Job Category List</h1>
                  <p className="text-[#757575] text-center font-medium mb-8">Explore thousands of job opportunities with all the information you need. Its your future</p>
                  <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6">
                        {
                              jobs.map(job => <Job key={job.id} job={job}></Job>)
                        }
                  </div>
            </div>
      );
};

export default JobCategoryList;