
const getAppliedJobsFromLocalStorage = () => {
      const storedAppliedJobs = localStorage.getItem('applied-jobs');
      if (storedAppliedJobs) {
            return JSON.parse(storedAppliedJobs);
      }
      return [];
}

const saveAppliedJobsToLocalStorage = (appliedJobs) => {
      const appliedJobsStringify = JSON.stringify(appliedJobs);
      localStorage.setItem('applied-jobs', appliedJobsStringify);
}

const addAppliedJobsToLocalStorage = (id) => {
      const appliedJobs = getAppliedJobsFromLocalStorage();
      const exist = appliedJobs.find(jobId => jobId === id);

      if (!exist) {
            appliedJobs.push(id);
            saveAppliedJobsToLocalStorage(appliedJobs);
      }
}

export { getAppliedJobsFromLocalStorage, saveAppliedJobsToLocalStorage, addAppliedJobsToLocalStorage };