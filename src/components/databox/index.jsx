import GraphRed from "../../assets/images/i-graph-red.svg";
import GraphGreen from "../../assets/images/i-graph-green.svg";
import ArrowUp from "../../assets/images/arrow-up-green.svg";
import People from "../../assets/images/people.svg";
import "./style.css";
import Example from "../barchart/Barchart";
import { default as ExampleTwo } from "../piechart/PieChart";

const Databox = () => {
  return (
    <div className="databox">
      <div className="databox__capital">
        <div className="databox__total-top">
          <div className="total-top">
            <img src={GraphGreen} alt="Graph" />
            <h1 className="databox-header">Working Capital Service Requests</h1>
          </div>
          <p>
            Ongoing Gigmile Working Capital Service Requests{" "}
            <span className="databox__capital-dot">.</span> Last 30 days
          </p>
        </div>
        <div className="databox__capital-middle">
          <div className="overall-box">
            <img src={People} alt="People" className="overall-img" />
            <span className="overall-text">Overall:</span>
          </div>
          <span className="overall-figure">678,765</span>
        </div>
        <Example />
      </div>

      <div className="databox__total">
        <div className="databox__total-top">
          <div className="total-top">
            <img src={GraphRed} alt="Graph" />
            <h1 className="databox-header">Total Request Value</h1>
          </div>
          <p>Overall Working Capital Request Value</p>
        </div>
        <div className="databox-total-middle">
          <span className="total-middleText">Overall:</span>
          <span className="total-middleFigure">N 2,643,890.0</span>
        </div>
        <div className="databox-total-bottom">
          <span className="total-bottom-header">Total paid back:</span>
          <span className="total-bottom-price">N 1,200,210.0</span>
          <div className="databox-total-bottomBox">
            <img src={ArrowUp} alt="Arrow Up" className="total-bottom-img" />
            <span className="total-bottom-reading">300,000.00</span>
            <span className="total-bottom-readingText">Increase this week</span>
          </div>
        </div>
      </div>
      <div className="databox__breakdown">
        <div className="databox__total-top">
          <div className="total-top">
            <h1 className="databox-header">Service Requests Breakdown</h1>
          </div>
          <p>Total Working Capital Requests so far.</p>
          {/* <hr /> */}
        </div>
        <ExampleTwo />
      </div>
    </div>
  );
};

export default Databox;
