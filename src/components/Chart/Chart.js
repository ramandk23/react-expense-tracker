import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  return (
    <div className="chart">
      Chart Bar Content Here
      {props.dataPoints.map((dataPoints) => (
        <ChartBar
          key = {dataPoints.label}
          value={dataPoints.value}
          maxValue={null}
          label={dataPoints.label}
        />
      ))}
    </div>
  );
};

export default Chart;
