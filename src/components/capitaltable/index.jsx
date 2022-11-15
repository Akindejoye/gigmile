import Action from "../../assets/images/action.svg";
import "./style.css";

const CapitalTable = () => {
  return (
    <div className="capitaltable">
      <ul className="capitaltable__nav">
        <li className="capitaltable__nav-li">Active</li>
        <li className="capitaltable__nav-li">Pending</li>
        <li className="capitaltable__nav-li">Completed</li>
        <li className="capitaltable__nav-li">Declined</li>
      </ul>
      <hr />

      <div className="capitaltable__tablebox">
        <table cellSpacing="0">
          <thead>
            <th>Captain</th>
            <th>Working Capital</th>
            <th>Total Request Value</th>
            <th>Total Balance</th>
            {/* <th>Search here for me</th> */}
          </thead>
          <tbody>
            <tr className="table-row">
              <td>
                <span className="initial">AR</span>
                <span className="name">Alan Richard Michaelson</span>
              </td>
              <td>Fuel Advance</td>
              <td>N 1,090,890.00</td>
              <td>N 1,090,890.00</td>
              <td>
                <img src={Action} alt="Action" />
              </td>
            </tr>
            <tr className="table-row">
              <td>
                <span className="initial">AR</span>
                <span className="name">Alan Richard Michaelson</span>
              </td>
              <td>Fuel Advance</td>
              <td>N 1,090,890.00</td>
              <td>N 1,090,890.00</td>
              <td>
                <img src={Action} alt="Action" />
              </td>
            </tr>
            <tr className="table-row">
              <td>
                <span className="initial">AR</span>
                <span className="name">Alan Richard Michaelson</span>
              </td>
              <td>Fuel Advance</td>
              <td>N 1,090,890.00</td>
              <td>N 1,090,890.00</td>
              <td>
                <img src={Action} alt="Action" />
              </td>
            </tr>
            <tr className="table-row">
              <td>
                <span className="initial">AR</span>
                <span className="name">Alan Richard Michaelson</span>
              </td>
              <td>Fuel Advance</td>
              <td>N 1,090,890.00</td>
              <td>N 1,090,890.00</td>
              <td>
                <img src={Action} alt="Action" />
              </td>
            </tr>
            <tr className="table-row">
              <td>
                <span className="initial">AR</span>
                <span className="name">Alan Richard Michaelson</span>
              </td>
              <td>Fuel Advance</td>
              <td>N 1,090,890.00</td>
              <td>N 1,090,890.00</td>
              <td>
                <img src={Action} alt="Action" />
              </td>
            </tr>
            <tr className="table-row">
              <td>
                <span className="initial">AR</span>
                <span className="name">Alan Richard Michaelson</span>
              </td>
              <td>Fuel Advance</td>
              <td>N 1,090,890.00</td>
              <td>N 1,090,890.00</td>
              <td>
                <img src={Action} alt="Action" />
              </td>
            </tr>
            <tr className="table-row">
              <td>
                <span className="initial">AR</span>
                <span className="name">Alan Richard Michaelson</span>
              </td>
              <td>Fuel Advance</td>
              <td>N 1,090,890.00</td>
              <td>N 1,090,890.00</td>
              <td>
                <img src={Action} alt="Action" />
              </td>
            </tr>
            <tr className="table-row">
              <td>
                <span className="initial">AR</span>
                <span className="name">Alan Richard Michaelson</span>
              </td>
              <td>Fuel Advance</td>
              <td>N 1,090,890.00</td>
              <td>N 1,090,890.00</td>
              <td>
                <img src={Action} alt="Action" />
              </td>
            </tr>
            <tr className="table-row">
              <td>
                <span className="initial">AR</span>
                <span className="name">Alan Richard Michaelson</span>
              </td>
              <td>Fuel Advance</td>
              <td>N 1,090,890.00</td>
              <td>N 1,090,890.00</td>
              <td>
                <img src={Action} alt="Action" />
              </td>
            </tr>
            <tr className="table-row">
              <td>
                <span className="initial">AR</span>
                <span className="name">Alan Richard Michaelson</span>
              </td>
              <td>Fuel Advance</td>
              <td>N 1,090,890.00</td>
              <td>N 1,090,890.00</td>
              <td>
                <img src={Action} alt="Action" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CapitalTable;
