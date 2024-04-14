import { Line, LineChart, XAxis, YAxis } from "recharts";

const Chart = () => {
  const mathMarksData = [
    { id: 1, name: "John", math: 85, english: 78, science: 92 },
    { id: 2, name: "Emily", math: 78, english: 80, science: 75 },
    { id: 3, name: "Michael", math: 92, english: 85, science: 90 },
    { id: 4, name: "Sarah", math: 65, english: 70, science: 68 },
    { id: 5, name: "David", math: 70, english: 75, science: 72 },
    { id: 6, name: "Emma", math: 88, english: 82, science: 85 },
    { id: 7, name: "Ryan", math: 75, english: 78, science: 80 },
    { id: 8, name: "Olivia", math: 82, english: 85, science: 88 },
    { id: 9, name: "James", math: 95, english: 90, science: 92 },
    { id: 10, name: "Sophia", math: 60, english: 65, science: 68 },
];
  return (
    <div>
      <LineChart width={800} height={400} data={mathMarksData}>
        <XAxis dataKey="name"></XAxis>
        <Line dataKey={"math"} stroke="green"></Line>
        <Line dataKey={"english"} stroke="red"></Line>
        <Line dataKey={"science"} stroke="orange"></Line>
        <YAxis></YAxis>
      </LineChart>
    </div>
  );
};

export default Chart;
