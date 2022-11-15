import { useState } from "react";
import Logo from "../../assets/images/logos.svg";
import Profile from "../../assets/images/profile.svg";
import Dashboard from "../../assets/images/i-dashboard.svg";
import Captains from "../../assets/images/i-captains.svg";
import Requests from "../../assets/images/i-requests.svg";
import Financing from "../../assets/images/i-financing.svg";
import Capital from "../../assets/images/i-capital.svg";
import Anciliary from "../../assets/images/i-anciliary.svg";
import Partners from "../../assets/images/i-partners.svg";
import Metrics from "../../assets/images/i-metrics.svg";
import Repayments from "../../assets/images/i-repayments.svg";
import Settings from "../../assets/images/i-settings.svg";
import Arrowup from "../../assets/images/arrow-up.svg";
import "./style.css";

const Sidebar = () => {
  const [toggle, setToggle] = useState(false);
  const [toggleState, setToggleState] = useState(false);

  const handleToggleState = () => {
    setToggleState(!toggleState);
  };

  return (
    <div className="sidebar">
      <img src={Logo} alt="Logo" className="sidebar__logo" />
      <div className="sidebar__adminbox">
        <img src={Profile} alt="Profile" className="sidebar__adminbox-img" />
        <div className="sidebar__adminbox-infobox">
          <h3 className="sidebar__infobox-name">Micheal Essien</h3>
          <h5 className="sidebar__infobox-post">Administrator</h5>
        </div>
      </div>
      <div className="sidebar__navbox">
        <div className="sidebar__nav">
          <img src={Dashboard} alt="Dashboard" className="sidbar__nav-icon" />
          <p className="sidbar__nav-text">Dashboard</p>
        </div>
        <div className="sidebar__nav">
          <img src={Captains} alt="Dashboard" className="sidbar__nav-icon" />
          <p className="sidbar__nav-text">Captains</p>
        </div>
        <div className="sidebar__nav">
          <img src={Requests} alt="Dashboard" className="sidbar__nav-icon" />
          <p className="sidbar__nav-text">Service Requests</p>
          <div className="sidbar__nav-directionBox">
            <img
              src={Arrowup}
              alt="Arrow Up"
              className={toggle ? "toggle" : "sidbar__nav-direction"}
              onClick={() => setToggle(!toggle)}
            />
          </div>
        </div>
        <div className="sidebar__nav">
          <img src={Financing} alt="Dashboard" className="sidbar__nav-icon" />
          <p className="sidbar__nav-text">Asset Financing</p>
        </div>
        <div className="toggle__nav sidebar__nav" onClick={handleToggleState}>
          <img src={Capital} alt="Dashboard" className="sidbar__nav-icon" />
          <p className="sidbar__nav-text">Working Capital</p>
        </div>
        <div className="sidebar__nav">
          <img src={Anciliary} alt="Dashboard" className="sidbar__nav-icon" />
          <p className="sidbar__nav-text">Anciliary Services</p>
        </div>
        <div className="sidebar__nav">
          <img src={Partners} alt="Dashboard" className="sidbar__nav-icon" />
          <p className="sidbar__nav-text">Service Partners</p>
        </div>
        <div className="sidebar__nav">
          <img src={Metrics} alt="Dashboard" className="sidbar__nav-icon" />
          <p className="sidbar__nav-text">Asset Metrics</p>
        </div>
        <div className="sidebar__nav">
          <img src={Repayments} alt="Dashboard" className="sidbar__nav-icon" />
          <p className="sidbar__nav-text">Repayments</p>
        </div>
        <div className="sidebar__nav">
          <img src={Settings} alt="Dashboard" className="sidbar__nav-icon" />
          <p className="sidbar__nav-text">Settings</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
