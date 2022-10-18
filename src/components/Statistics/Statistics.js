import React from "react";
import { useLoaderData } from "react-router-dom";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Label,
} from "recharts";

import "./Statistics.css";

const Statistics = () => {
  const data = useLoaderData().data;

  return (
    <div className="statsContainer">
      <div className="stats">
        <h2>Check Analytics</h2>

<ResponsiveContainer height={400} width='90%'>
<LineChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name">
            <Label
              value="Name of the topics"
              offset={-1}
              position="insideBottom"
            />
          </XAxis>
          <YAxis>
            <Label
              value="Quiz number"
              offset={15}
              position="insideLeft"
              angle="-90"
            />
          </YAxis>
          <Tooltip />
          <Legend height={50} />
          <Line
            type="monotone"
            dataKey="total"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="id" stroke="#82ca9d" />
        </LineChart>
</ResponsiveContainer>
        
      </div>
    </div>
  );
};

export default Statistics;
