import { Outlet } from "react-router-dom";
import TopNav from "./../topnav/index";
import Sidebar from "./../sidebar/index";
import "./layout.css";

const Layout = () => {
  return (
    <>
      <div className="layout">
        <div className="layout__left">
          <Sidebar />
        </div>
        <div className="layout__right">
          <TopNav />
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
