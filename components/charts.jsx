import React, { useState } from 'react';
import { PieChart, Pie, Sector, ResponsiveContainer, Cell } from 'recharts';

// Custom slice colors
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const {
    cx, cy, midAngle, innerRadius, outerRadius,
    startAngle, endAngle, fill, payload, percent, value,
  } = props;

  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector {...{ cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill }} />
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none"  />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none"  />
      <text  x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#D1D5DB" >
        {`Hours: ${value}`}
      </text>
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor}  fill="#999" >
        {`(${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};


//!This is destructuring props { chartData = [] }

const CustomActivePieChart = ({ chartData = [] }) => {
    const [activeIndex, setActiveIndex] = useState(0);
  
    const hasData = chartData.length > 0;

    //This sets up state to track which pie slice is active (hovered).

    const pieData = hasData
    ? chartData.map(item => ({
        name: item.studygoal,
        value: Number(item.duration),
      }))
    : [
        { name: "No data", value: 1 }
      ]; 

      //!remeber that ? : is a like (IF) ternary operator that is used to evaluate a condition and return one of two values based on the result.

      //* well what i did here is an optional redeing like (if the pie chart has data (chartData.length > 0) then map it, else return a default value of 1.)

  return (
    <ResponsiveContainer width="100%" > 
      <PieChart >
        <Pie 
          activeIndex={activeIndex}
          activeShape={renderActiveShape}
          data={pieData}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={90}
          fill="#8884d8"
          dataKey="value"
          onMouseEnter={(_, index) => setActiveIndex(index)}
        >
          {pieData.map((_, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default  CustomActivePieChart;
