import Search from "../../assets/images/i-search.svg";
import Report from "../../assets/images/report.svg";
import Notification from "../../assets/images/notification.svg";
import Profile from "../../assets/images/profile.svg";
import ArrowDown from "../../assets/images/arror-down.svg";
import "./style.css";

const TopNav = () => {
  return (
    <div className="topnav">
      <h2 className="topnav-header">Hello Michael! &#128079;</h2>
      <div className="topnav-right">
        <div className="topnav__inputbox">
          <img src={Search} alt="Search" className="topnav__input-img" />
          <input type="text" placeholder="Search" className="topnav__input" />
        </div>
        <div className="topnav__iconbox">
          <img src={Report} alt="Report" className="topnav__iconbox-report" />
          <img src={Notification} alt="Notification" />
          <img
            src={Profile}
            alt="Profile"
            className="topnav__iconbox-profile"
          />
          <img src={ArrowDown} alt="Arrow Down" />
        </div>
      </div>
    </div>
  );
};

export default TopNav;
