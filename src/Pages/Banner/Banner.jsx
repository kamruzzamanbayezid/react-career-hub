
const Banner = () => {
      return (
            <div style={{
                  background: "url(<path-to-image>), lightgray -124.95px 0px / 136.875% 100% no-repeat"
            }}>
                  <div className="max-w-7xl mx-auto lg:flex lg:p-0 p-4 gap-2">
                        <div className="lg:w-1/2 lg:mt-28 mt-6">
                              <h1 className="lg:text-6xl md:text-4xl text-2xl font-extrabold mb-6">One Step Closer To Your <span className="text-[#7E90FE]">Dream Job</span></h1>
                              <p className="text-[#757575] text-lg font-medium mb-7">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                              <button className="btn btn-primary">Get Started</button>
                        </div>
                        <div className="lg:w-1/2 ">
                              <img className="w-4/5 mx-auto" src="../../../public/assets/images/user.png" alt="" />
                        </div>
                  </div>
            </div>
      );
};

export default Banner;