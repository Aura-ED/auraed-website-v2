import Navbar from "./navbar";
import Footer from "./footer";
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Outlet />
      <div className="flex-grow"></div>
      <Footer />
    </div>
  );
};

export default Layout;
