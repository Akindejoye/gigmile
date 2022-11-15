import Sidebar from "../../components/sidebar";
import Logout from "../../assets/images/i-logout.svg";
import TopNav from "../../components/topnav";
import Databox from "../../components/databox";
import SearchTable from "../../components/searchtable";
import CapitalTable from "./../../components/capitaltable/index";
import "./style.css";
import Pagination from "../../components/pagination";

const Capital = () => {
  return (
    <>
      <div className="capital">
        <div className="capital__left">
          <Sidebar />
          <btn className="capital__logoutBox">
            <img src={Logout} alt="Logout" className="logoutBox-icon" />
            <p className="logoutBox-text">Log Out</p>
          </btn>
        </div>
        <div className="capital__right">
          <TopNav />
          <Databox />
          <SearchTable />
          <CapitalTable />
          <Pagination />
        </div>
      </div>
    </>
  );
};

export default Capital;
