"use client";
import { useParams } from "next/navigation";
import React from "react";
import PresPage from "../_components/PresPage";

const Page = () => {
  const params = useParams();
  return (
    <div>
      <h1>Transaction liste {params.date}</h1>
      <PresPage date={params.date} />
    </div>
  );
};

export default Page;
