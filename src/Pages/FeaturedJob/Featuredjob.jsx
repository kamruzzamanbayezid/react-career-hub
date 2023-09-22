import PropTypes from 'prop-types';
import { SlLocationPin } from "react-icons/sl";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { Link } from 'react-router-dom';

const FeaturedJob = ({ featuredJob }) => {

      const {id, logo, job_title, company_name, remote_or_onsite, job_type, location, salary } = featuredJob;

      return (
            <div className='border border-[#E8E8E8] rounded-lg p-10'>
                  <img className='mb-7' src={logo} alt="logo" />
                  <h3 className='text-[#474747] text-2xl font-extrabold mb-2'>{job_title}</h3>
                  <p className='text-[#757575] text-xl font-semibold mb-4'>{company_name}</p>
                  <div className='mb-4'>
                        <button className='text-[#7E90FE] rounded py-2 px-5 border border-[#7E90FE] font-extrabold'>{remote_or_onsite}</button>
                        <button className='text-[#7E90FE] rounded py-2 px-5 ml-4 border border-[#7E90FE] font-extrabold'>{job_type}</button>
                  </div>
                  <div className='flex gap-6 mb-6'>
                        <div className='flex items-center gap-2'>
                              <span className='text-2xl'><SlLocationPin></SlLocationPin></span>
                              <span className='text-[#757575] text-xl'>{location}</span>
                        </div>
                        <div className='flex items-center gap-2'>
                              <span className='text-2xl'><AiOutlineDollarCircle></AiOutlineDollarCircle></span>
                              <span className='text-[#757575] text-xl'>Salary: {salary}</span>
                        </div>
                  </div>
                  <Link to={`/jobDetails/${id}`}>
                        <button className='btn btn-primary text-[#FFF] text-xl font-extrabold'>View Details</button>
                  </Link>
            </div>
      );
};

FeaturedJob.propTypes = {
      featuredJob: PropTypes.object
}

export default FeaturedJob;