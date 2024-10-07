"use client";
import { getCompleteTransactions } from "@/api/api";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowRightCircle } from "lucide-react";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Card } from "@/components/ui/card";

const PresPage = () => {
  const [transactions, setTransactions] = useState({}); // Utiliser un objet pour stocker les transactions par date
  const [isLoading, setIsLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false); // État pour le contrôle de rafraîchissement

  const fetchData = async () => {
    try {
      setRefreshing(true); // Commencer le rafraîchissement
      const data = await getCompleteTransactions();
      setTransactions(data); // Mettre à jour l'état des transactions
      setIsLoading(false);
      console.log(data); // Afficher les données récupérées
    } catch (error) {
      console.error(
        "Erreur lors du chargement des données de transaction:",
        error
      );
      setIsLoading(false);
    } finally {
      setRefreshing(false); // Arrêter le rafraîchissement
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);

  // Formater les dates pour la comparaison
  const todayFormatted = today.toISOString().slice(0, 10);
  const yesterdayFormatted = yesterday.toISOString().slice(0, 10);

  const onRefresh = () => {
    setRefreshing(true);
    fetchData(); // Appeler fetchData pour rafraîchir les données
  };

  return (
    <div>
      <div>
        {isLoading ? (
          <p>Chargement des transactions...</p>
        ) : Object.keys(transactions).length === 0 ? (
          <p>Aucune transaction trouvée.</p>
        ) : (
          <div className="">
            {Object.entries(transactions).map(([date, transactions]) => (
              <Link href={`/dashboard/transaction/${date}`} key={date}>
                <Card className="w-full my-3  ">
                  <div className="flex justify-between items-center m-3">
                    <div className=" ">
                      <h3 className="font-semibold h3-zinc-600 p-lg">
                        {date === todayFormatted
                          ? "Aujourd'hui"
                          : date === yesterdayFormatted
                          ? "Hier"
                          : new Date(date).toLocaleDateString("fr-FR", {
                              day: "numeric",
                              month: "long",
                              year: "numeric",
                            })}
                      </h3>

                      <p className=" text-zinc-500">
                        {transactions.length} Trasactions effectué{" "}
                      </p>
                    </div>
                    <div className="">
                      <ArrowRightCircle color={"green"} />
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PresPage;
