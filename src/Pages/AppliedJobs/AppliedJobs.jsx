import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getAppliedJobsFromLocalStorage } from "../../Utilities/Localstorage";

const AppliedJobs = () => {

      const [appliedJob, setAppliedJob] = useState();

      const availableJobs = useLoaderData();

      useEffect(() => {
            if (availableJobs.length > 0) {
                  const appliedJobs = getAppliedJobsFromLocalStorage();

                  let totalAppliedJobs = [];
                  for (let id of appliedJobs) {
                        const appliedJob = availableJobs.find(job => job.id === id);
                        if (appliedJob) {
                              totalAppliedJobs.push(appliedJob);
                        }
                  }
                  setAppliedJob(totalAppliedJobs);
            }
      }, [availableJobs]);

      console.log(appliedJob);

      return (
            <div>
                  <h2>Applied Jobs</h2>
            </div>
      );
};

export default AppliedJobs;