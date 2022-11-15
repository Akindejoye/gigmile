import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default class Example extends PureComponent {
  static demoUrl =
    "https://codesandbox.io/s/bar-chart-with-customized-event-4k1bd";

  state = {
    data: [
      {
        name: "Repair Advance",
        uv: 4000,
        pv: 2400,
        amt: 2400,
      },
      {
        name: "Fuel Advance",
        uv: 3000,
        pv: 1398,
        amt: 2210,
      },
      {
        name: "Salary Advance",
        uv: 2000,
        pv: 9800,
        amt: 2290,
      },
    ],
    activeIndex: 0,
  };

  handleClick = (data, index) => {
    this.setState({
      activeIndex: index,
    });
  };

  render() {
    const { activeIndex, data } = this.state;
    const activeItem = data[activeIndex];

    return (
      <div style={{ width: "397px", height: "200px", marginLeft: "30px" }}>
        <ResponsiveContainer width="100%" height={170}>
          <BarChart width={150} height={40} data={data}>
            <Bar dataKey="uv" onClick={this.handleClick}>
              {data.map((entry, index) => (
                <Cell
                  cursor="pointer"
                  fill={index === activeIndex ? "#1DB385" : "#1DB385"}
                  key={`cell-${index}`}
                />
              ))}
            </Bar>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
