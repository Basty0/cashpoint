"use client";

import { useParams } from "next/navigation";
import React from "react";
import PresPages from "../../_components/PresPages";

const Page = () => {
  // Destructure id from router.query
  const params = useParams();
  const date = params.id;
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);

  // Formater les dates pour la comparaison
  const todayFormatted = today.toISOString().slice(0, 10);
  const yesterdayFormatted = yesterday.toISOString().slice(0, 10);

  return (
    <div>
      <h1 className="font-semibold h3-zinc-600 p-lg my-2">
        {date === todayFormatted
          ? "Aujourd'hui"
          : date === yesterdayFormatted
          ? "Hier"
          : new Date(date).toLocaleDateString("fr-FR", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
      </h1>
      <PresPages date={date} />
    </div>
  );
};

export default Page;
