import React, { PureComponent } from 'react';
import { BarChart, Bar, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'sun',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'mon',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/p/sandbox/tiny-bar-chart-xzyy8g';

  render() {
    return (
      <ResponsiveContainer   width={450}
      height={350}  className="w-full h-[400px] translate-x-[320px] translate-y-[-550px] rounded-xl p-4 
      bg-white/5 backdrop-blur-sm text-white 
      border border-white/10 
      border-l-4 border-b-4 border-l-purple-700/50 border-b-purple-700/50
      shadow-lg shadow-indigo-700/10" >
        <BarChart width={180} height={40} data={data}>
          <Bar dataKey="uv" fill="#8884d8" />
          
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
