import { Link, useLoaderData, useParams } from "react-router-dom";
import { SlLocationPin } from "react-icons/sl";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { MdOutlineSubtitles, MdPhone, MdOutlineEmail } from "react-icons/md";
import { addAppliedJobsToLocalStorage } from "../../Utilities/Localstorage";


const JobDetails = () => {

      const jobDetails = useLoaderData();
      // console.log(jobDetails);
      const { id } = useParams();

      const job = jobDetails.find(job => job.id == id);
      // console.log(job);

      const { job_description, job_responsibility, educational_requirements, experiences, salary, job_title, contact_information } = job;

      const jobStyle = {
            borderRadius: '8px',
            background: "linear-gradient(90deg, rgba(126, 144, 254, 0.10) 0%, rgba(152, 115, 255, 0.10) 100%)",
      }

      const handleApplyNow = () => {
            addAppliedJobsToLocalStorage(id);
      }

      return (
            <div className="max-w-7xl mx-auto mb-32">
                  <h2 className="text-[#1A1919] text-3xl font-extrabold lg:py-7 text-center">Job Details</h2>
                  <div className="flex lg:flex-row flex-col gap-6">
                        <div className="lg:w-2/3">
                              <p className="text-[#757575] font-medium mb-6"><span className="text-[#1A1919] font-extrabold">Job Description:</span>{job_description}</p>
                              <p className="text-[#757575] font-medium mb-6"><span className="text-[#1A1919] font-extrabold">Job Responsibility</span>{job_responsibility}</p>
                              <p className="text-[#1A1919] font-extrabold mb-2">Educational Requirements:</p>
                              <p className="text-[#757575] font-medium mb-6">{educational_requirements}</p>
                              <p className="text-[#1A1919] font-extrabold mb-2">Experiences:</p>
                              <p className="text-[#757575] font-medium">{experiences}</p>
                              <Link to="/"><button className="mt-4 text-[#7E90FE] underline text-xl">Go Home</button></Link>
                        </div>
                        <div className="lg:w-1/3">
                              <div style={jobStyle} className="p-7">
                                    <h2 className="text-[#1A1919] text-xl font-extrabold pb-5 border-b border-[#7E90FE]">Job Details</h2>
                                    <div className="pt-5 flex items-center gap-2 mb-4">
                                          <p><AiOutlineDollarCircle className="text-2xl"></AiOutlineDollarCircle></p>
                                          <p className="text-[#474747] text-xl font-bold">Salary: <span className="text-[#757575] text-xl font-medium">{salary} (per month) </span></p>
                                    </div>
                                    <div className="flex items-center gap-2 mb-6">
                                          <p className="text-2xl"><MdOutlineSubtitles></MdOutlineSubtitles></p>
                                          <p className="text-[#474747] text-xl font-bold">Job Title : <span className="text-[#757575] text-xl font-medium">{job_title}</span></p>
                                    </div>
                                    <h2 className="text-[#1A1919] text-xl font-extrabold pb-5 border-b border-[#7E90FE]">Contact Information</h2>
                                    <div className="flex items-center gap-2  pt-4">
                                          <p className="text-2xl"><MdPhone></MdPhone></p>
                                          <p className="text-[#474747] text-xl font-bold">Phone : <span className="text-[#757575] text-xl font-medium">{contact_information.phone}</span></p>
                                    </div>
                                    <div className="flex items-center gap-2 pt-4">
                                          <p className="text-2xl"><MdOutlineEmail></MdOutlineEmail></p>
                                          <p className="text-[#474747] text-xl font-bold">Email : <span className="text-[#757575] text-xl font-medium">{contact_information.email}</span></p>
                                    </div>
                                    <div className="flex items-center gap-2  pt-4">
                                          <p className="text-2xl"><SlLocationPin></SlLocationPin></p>
                                          <p className="text-[#474747] text-xl font-bold">Address : <span className="text-[#757575] text-xl font-medium">{contact_information.address}</span></p>
                                    </div>
                              </div>
                              <div className="flex justify-center mt-5">
                                    <button onClick={handleApplyNow} className="text-[#FFF] text-xl btn btn-primary w-full font-extrabold">Apply Now</button>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default JobDetails;