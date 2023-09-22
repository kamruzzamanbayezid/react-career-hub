import { Link, NavLink } from "react-router-dom";

const Navbar = () => {

      const links = <>
            <li><NavLink className={(isActive) => isActive ? 'text-[#757575] font-medium' : ''} to="/">Statictis</NavLink></li>
            <li><NavLink className={(isActive) => isActive ? 'text-[#757575] font-medium' : ''} to="/applied">Applied Jobs</NavLink></li>
            <li><NavLink className={(isActive) => isActive ? 'text-[#757575] font-medium' : ''} to="/blog">Blog</NavLink></li>
      </>

      return (
            <div style={{
                  background: "url(<path-to-image>), lightgray -124.95px 0px / 136.875% 100% no-repeat"
            }}>
                  <div className="max-w-7xl mx-auto">
                        <div className="navbar">
                              <div className="navbar-start">
                                    <div className="dropdown">
                                          <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                                          </label>
                                          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-slate-800 mt-3 z-[1] p-2 w-52">
                                                {links}
                                          </ul>
                                    </div>
                                    <Link to="/"><a className="btn btn-ghost normal-case text-[#1A1919] font-extrabold text-3xl">CareerHub</a></Link>
                              </div>
                              <div className="navbar-center hidden lg:flex">
                                    <ul className="menu menu-horizontal px-1">
                                          {links}
                                    </ul>
                              </div>
                              <div className="navbar-end">
                                    <a className="btn btn-primary text-xl font-extrabold text-[#FFF]">Start Applying</a>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Navbar;