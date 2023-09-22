import PropTypes from 'prop-types';

const Job = ({ job }) => {
      const { logo, category_name, availability } = job;
      return (

            <div className="p-10" style={{
                  borderRadius: '8px',
                  background: 'linear-gradient(90deg, rgba(126, 144, 254, 0.05) 0%, rgba(152, 115, 255, 0.05) 100%)'
            }}>
                  <img className="mb-7" src={logo} alt="logo" />
                  <h3 className="text-xl text-[#474747] font-extrabold mb-2">{category_name}</h3>
                  <h4 className="text-[#A3A3A3] font-medium">{availability}</h4>
            </div>

      );
};

Job.propTypes = {
      job: PropTypes.object
}

export default Job;