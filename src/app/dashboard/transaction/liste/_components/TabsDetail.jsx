import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CardTitle } from "@/components/ui/card";
import { Icon } from "lucide-react";
import React from "react";

const TabsDetail = ({ transaction }) => {
  return (
    <div className="w-full">
      <DataDet transaction={transaction} />
    </div>
  );
};

export default TabsDetail;

const DataDet = ({ transaction }) => {
  return (
    <div className="w-full">
      <div className="p-4 border rounded-lg w-full">
        <div className="flex justify-between">
          <div className="flex items-center">
            <span>Description</span>
          </div>
          <span>{transaction.montant} Ariary</span>
        </div>

        <div className="flex justify-between mt-2">
          <span>Commission:</span>
          <span>{transaction.commission} Ariary</span>
        </div>
        <div className="flex justify-between mt-2">
          <span>Opérateur:</span>
          <span>{transaction.operateur.nom}</span>
        </div>
        <div className="flex justify-between mt-2">
          <span>Date de transaction:</span>
          <span>
            {new Date(transaction.date_transaction).toLocaleString()}
          </span>{" "}
          {/* Affiche l'heure et les minutes */}
        </div>
        <div className="flex justify-between mt-2">
          <span>Statut:</span>
          <span>{transaction.statut}</span>
        </div>
      </div>
    </div>
  );
};
