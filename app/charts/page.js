"use client";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function MockApiBarChart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/users`
        );
        const json = await response.json();

        setData(json);
      } catch (error) {
        toast.error("Failed to fetch mock data");
        console.error("Error fetching mock data:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="bg-gray-100">
      <h3 className="pt-24 text-center font-semibold text-xl">
        Data About Users
      </h3>

      <div className="flex justify-center items-center h-screen p-10">
        <ResponsiveContainer>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#2779B8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
