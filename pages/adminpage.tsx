"use client";
import React from "react";
import Navbar from "@/component/navbar";
import Chart from "@/component/chart";
import BasicTable from "@/component/table";
import MultiActionAreaCard from "@/component/cardAdminDashBoard";
import { useEffect } from "react";
import Router from "next/router";

const AdminPage: React.FC = () => {
  useEffect(() => {
    const userAccessToken = localStorage.getItem("userAccessToken");
    if (!userAccessToken) Router.push("/login");
  }, []);
  return (
    <>
      <Navbar />
      <MultiActionAreaCard />
      <Chart />
      <BasicTable />
    </>
  );
};

export default AdminPage;
