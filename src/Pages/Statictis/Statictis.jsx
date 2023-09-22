import { Outlet } from "react-router-dom";
import Footer from "../../MainLayout/Footer/Footer";
import Navbar from "../../MainLayout/Navbar/Navbar";

const Statictis = () => {
      return (
            <div>
                  <Navbar></Navbar>
                  <Outlet></Outlet>
                  <Footer></Footer>
            </div>
      );
};

export default Statictis;