import Search from "../../assets/images/i-search-small.svg";
import Select from "../../assets/images/select-dropdown.svg";
import "./style.css";

const SearchTable = () => {
  return (
    <div className="searchtable">
      <h1>Gigmile Captains on Working Capital Service Requests</h1>
      <div className="searchtable__inputbox">
        <div className="searchtable__inputbox-one">
          <input type="text" placeholder="Search captains, services..." />
          <img src={Search} alt="Search" />
        </div>
        <div className="searchtable__inputbox-two">
          <select className="searchtable__inputbox-two-select">
            <option disabled selected>
              Filter by
            </option>
            <option>none</option>
          </select>
          <img src={Select} alt="Select" />
        </div>
      </div>
    </div>
  );
};

export default SearchTable;
