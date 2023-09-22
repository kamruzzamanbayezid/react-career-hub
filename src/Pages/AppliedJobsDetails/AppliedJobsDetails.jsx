import PropTypes from 'prop-types';
import { SlLocationPin } from "react-icons/sl";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { Link } from 'react-router-dom';

const AppliedJobsDetails = ({ jobs }) => {

      const { id, logo, company_name, salary, location, remote_or_onsite, job_type, job_title } = jobs;

      return (
            <div className="p-8 flex max-w-7xl mx-auto lg:flex-row flex-col gap-6">
                  <div className="lg:w-3/4 flex lg:flex-row flex-col gap-7">
                        <div className="bg-[#F4F4F4] py-24 px-12 rounded-lg">
                              <img className="w-36" src={logo} alt="" />
                        </div>
                        <div className='flex items-center'>
                              <div>
                                    <h3 className='text-[#474747] text-2xl font-extrabold mb-2'>{job_title}</h3>
                                    <p className='text-[#757575] text-xl font-semibold mb-4'>{company_name}</p>
                                    <div className='mb-4'>
                                          <button className='text-[#7E90FE] rounded py-2 px-5 border border-[#7E90FE] font-extrabold'>{remote_or_onsite}</button>
                                          <button className='text-[#7E90FE] rounded py-2 px-5 ml-4 border border-[#7E90FE] font-extrabold'>{job_type}</button>
                                    </div>
                                    <div className='flex lg:flex-row flex-col gap-6 mb-6'>
                                          <div className='flex items-center gap-2'>
                                                <span className='text-2xl'><SlLocationPin></SlLocationPin></span>
                                                <span className='text-[#757575] text-xl'>{location}</span>
                                          </div>
                                          <div className='flex items-center gap-2'>
                                                <span className='text-2xl'><AiOutlineDollarCircle></AiOutlineDollarCircle></span>
                                                <span className='text-[#757575] text-xl'>Salary: {salary}</span>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
                  <div className="lg:w-1/4 flex justify-center items-center">
                        <Link to={`/jobDetails/${id}`}>
                              <button className='btn btn-primary text-[#FFF] text-xl font-extrabold'>View Details</button>
                        </Link>
                  </div>
            </div>
      );
};

AppliedJobsDetails.propTypes = {
      jobs: PropTypes.object
}

export default AppliedJobsDetails;