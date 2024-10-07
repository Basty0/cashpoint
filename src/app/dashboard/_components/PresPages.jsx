"use client";
import React, { useEffect, useState } from "react";
import { getOperateurs, getRaportTransactionOperateur } from "@/api/api";
import TransactionTypeGharts from "./Statistique/TransactionTypeGharts";
import ModalTransaction from "./trnsaction/ModalTransaction";
import OperateurTrabsaction from "./Statistique/OperateurTrabsaction";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const PresPages = (date) => {
  const [operateur, setOperateurs] = useState(null);
  const [trasactiodata, setTransactionData] = useState(null);

  const fetchData = () => {
    console.log(date);
    getOperateurs().then((res) => {
      setOperateurs(res);
      console.log(res);
    });
    getRaportTransactionOperateur(date.date).then((res) => {
      setTransactionData(res);
      console.log(res);
    });
  };
  useEffect(() => {
    console.log(date);
    fetchData();
  }, [date]);
  if (!trasactiodata) {
    return (
      <>
        <p>Loadigne ....</p>
      </>
    );
  }
  return (
    <div>
      <div className=" my-2 w-[100%]">
        <TransactionTypeGharts />
      </div>
      <div className=" flex md:flex items-center justify-between my-4">
        <div className="flex gap-4 ">
          <ModalTransaction
            types={"dépôt"}
            operateurListe={operateur}
            fetchDonner={fetchData}
          />
          <ModalTransaction
            types={"retrait"}
            operateurListe={operateur}
            fetchDonner={fetchData}
          />
        </div>
        <Button asChild>
          <Link href={`/dashboard/transaction/liste/${date.date}`}>
            Liste des transactions
          </Link>
        </Button>
      </div>

      <div className="flex flex-col gap-4 my-2">
        <OperateurTrabsaction data={trasactiodata} className="w-1/2" />
      </div>

      <div className="flex flex-col gap-4 mt-2"></div>
    </div>
  );
};

export default PresPages;
