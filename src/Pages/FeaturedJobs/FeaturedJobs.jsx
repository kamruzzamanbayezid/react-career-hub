import { useEffect, useState } from "react";
import FeaturedJob from "../FeaturedJob/FeaturedJob";

const FeaturedJobs = () => {

      const [featuredJobs, setFeaturedJobs] = useState([]);
      const [sliceJobs, setSliceJobs] = useState(4);

      useEffect(() => {
            fetch('/jobs.json')
                  .then(res => res.json())
                  .then(data => setFeaturedJobs(data))
      }, []);

      return (
            <div className="max-w-7xl mx-auto mt-32">
                  <h2 className="text-[#1A1919] text-5xl font-extrabold mb-4 text-center">Featured Jobs</h2>
                  <p className="text-[#757575] font-medium mb-8 text-center">Explore thousands of job opportunities with all the information you need. Its your future</p>
                  <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
                        {
                              featuredJobs.slice(0, sliceJobs).map(featuredJob => <FeaturedJob featuredJob={featuredJob} key={featuredJob.id}></FeaturedJob>)
                        }
                  </div>

                  <div className="flex justify-center mt-9 lg:mb-32 mb-7">
                        <button onClick={() => setSliceJobs(6)} className="btn btn-primary text-[#FFF] text-xl font-extrabold">See All Jobs</button>
                  </div>
            </div>
      );
};

export default FeaturedJobs;