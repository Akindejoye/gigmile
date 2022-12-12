import Sidebar from "../../components/sidebar";
import TopNav from "../../components/topnav";
import Databox from "../../components/databox";
import SearchTable from "../../components/searchtable";
import CapitalTable from "./../../components/capitaltable/index";
import "./style.css";
import Pagination from "../../components/pagination";

const Capital = () => {
  return (
    <>
      <div className="">
        <Databox />
        <SearchTable />
        <CapitalTable />
        <Pagination />
      </div>
    </>
  );
};

export default Capital;
