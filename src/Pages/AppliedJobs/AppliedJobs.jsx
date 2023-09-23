import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getAppliedJobsFromLocalStorage } from "../../Utilities/Localstorage";
import AppliedJobsDetails from "../AppliedJobsDetails/AppliedJobsDetails";

const AppliedJobs = () => {

      const [appliedJob, setAppliedJob] = useState([]);
      const [displayJobs, setDisplayJobs] = useState([]);

      const availableJobs = useLoaderData();
      console.log(availableJobs);
      useEffect(() => {
            if (availableJobs.length > 0) {
                  const appliedJobs = getAppliedJobsFromLocalStorage();

                  let totalAppliedJobs = [];
                  for (let id of appliedJobs) {
                        const appliedJob = availableJobs.find(job => job.id === parseInt(id));

                        if (appliedJob) {
                              totalAppliedJobs.push(appliedJob);
                        }
                  }
                  setAppliedJob(totalAppliedJobs);
                  setDisplayJobs(totalAppliedJobs);
            }
      }, [availableJobs]);

      const handleSortBy = filter => {
            if (filter === 'all') {
                  setDisplayJobs(appliedJob)
            }
            else if (filter === 'remote') {
                  const remoteJobs = appliedJob.filter(jobs => jobs.remote_or_onsite === 'Remote');
                  setDisplayJobs(remoteJobs);
            }
            else if (filter === 'onsite') {
                  const onsiteJobs = appliedJob.filter(jobs => jobs.remote_or_onsite === 'Onsite');
                  setDisplayJobs(onsiteJobs)
            }
      }

      return (
            <div className="max-w-7xl mx-auto">
                  <h2 className="text-[#1A1919] text-3xl font-extrabold lg:py-7 text-center">Applied Jobs</h2>
                  <div className="flex justify-end ml-10">
                        <div className="dropdown dropdown-bottom dropdown-end">
                              <label tabIndex={0} className="btn m-1">Filter By</label>
                              <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                    <li onClick={() => handleSortBy('all')}><a>All</a></li>
                                    <li onClick={() => handleSortBy('remote')}><a>Remote</a></li>
                                    <li onClick={() => handleSortBy('onsite')}><a>Onsite</a></li>
                              </ul>
                        </div>
                  </div>
                  {
                        displayJobs.map(jobs => <AppliedJobsDetails key={jobs.id} jobs={jobs}></AppliedJobsDetails>)
                  }
            </div>
      );
};

export default AppliedJobs;