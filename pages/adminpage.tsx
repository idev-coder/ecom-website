import { useRouter } from "next/router";
import { useEffect } from "react";
import Navbar from "@/component/navbar";
import Chart from "@/component/chart";
import BasicTable from "@/component/table";

export default function AdminPage() {
  const router = useRouter();

  useEffect(() => {
    const accessToken = localStorage.getItem("accesstoken");
    if (!accessToken) {
      router.push("/login");
    }
  }, []);

  return (
    <>
      <Navbar />
      <Chart />
      <BasicTable />
    </>
  );
}
