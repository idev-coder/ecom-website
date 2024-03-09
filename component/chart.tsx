import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Paper, Typography, useMediaQuery } from "@mui/material";

function Chart() {
  const dataFirstHalfYear: any = [
    { name: "Jan", sales: 1000 },
    { name: "Feb", sales: 2000 },
    { name: "Mar", sales: 3000 },
    { name: "Apr", sales: 4000 },
    { name: "May", sales: 5000 },
    { name: "Jun", sales: 6000 },
  ];

  const dataSecondHalfYear: any = [
    { name: "Jan", sales: 6000 },
    { name: "Feb", sales: 5000 },
    { name: "Mar", sales: 4000 },
    { name: "Apr", sales: 3000 },
    { name: "May", sales: 2000 },
    { name: "Jun", sales: 1000 },
  ];

  // get sum of data in charts
  const sumOfFirstChart: number = dataFirstHalfYear.reduce(
    (sum: any, current: any) => sum + current.sales,
    0
  );
  const sumOfSecondChart: number = dataSecondHalfYear.reduce(
    (sum: any, current: any) => sum + current.sales,
    0
  );
  const sumOfSales: number = sumOfFirstChart + sumOfFirstChart;

  const isSmallScreen = useMediaQuery("(max-width:700px)");

  return (
    <Paper sx={{ m: 3, my: 5, display: isSmallScreen ? "block" : "flex" }}>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={dataFirstHalfYear}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="sales" fill="#A4CE95" />
        </BarChart>
      </ResponsiveContainer>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={dataSecondHalfYear}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey={"sales"} fill="#D37676" />
        </BarChart>
      </ResponsiveContainer>
      <Typography>Total sales {sumOfSales}</Typography>
    </Paper>
  );
}

export default Chart;
