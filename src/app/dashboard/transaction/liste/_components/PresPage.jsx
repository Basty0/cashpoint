"use client";
import { getTransactionsByDateAndUser, getOperateurs } from "@/api/api"; // Import getOperateurs
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { HandCoins, ListFilter, Phone } from "lucide-react";
import React, { useEffect, useState } from "react";
import Detaille from "./Detaille";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"; // Import Select from ShadCN UI

const PresPage = ({ date }) => {
  const [data, setData] = useState([]);
  const [operateurs, setOperateurs] = useState([]); // State for operators
  const [selectedOperateur, setSelectedOperateur] = useState(""); // Selected operator
  const [selectedType, setSelectedType] = useState(""); // Selected type
  const [loading, setLoading] = useState(false); // Loading state

  const feshData = () => {
    setLoading(true); // Start loading
    getTransactionsByDateAndUser(date, selectedOperateur, selectedType)
      .then((res) => {
        // Pass filters
        console.log(selectedOperateur, selectedType);
        setData(res);
        console.log(res);
        setLoading(false); // End loading
      })
      .catch(() => setLoading(false)); // Handle error and end loading
  };

  useEffect(() => {
    feshData();
    getOperateurs().then((res) => {
      // Fetch operators
      setOperateurs(res);
      console.log(res);
    });
  }, [date, selectedOperateur, selectedType]); // Add dependencies

  return (
    <div>
      {loading && <p>Loading...</p>} {/* Display loading message */}
      <div className="flex flex-row gap-3 my-3 items-center">
        <Select onValueChange={setSelectedOperateur}>
          <SelectTrigger>
            <SelectValue placeholder="Select Operator" />
          </SelectTrigger>
          <SelectContent>
            {operateurs.map((operateur) => (
              <SelectItem key={operateur.id} value={operateur.id}>
                {operateur.nom}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select onValueChange={setSelectedType}>
          <SelectTrigger>
            <SelectValue placeholder="Select Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="dépôt">Dépôt</SelectItem>
            <SelectItem value="retrait">Retrait</SelectItem>
          </SelectContent>
        </Select>
        <div className="">
          <ListFilter />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {data.map((transaction) => (
          <div key={transaction.id}>
            <Card>
              <CardHeader className="flex-row justify-between items-center">
                <div className=" gap-2 items-center flex">
                  <Avatar className="border">
                    <AvatarImage
                      src={`https://cash-point.sopera.mg/${transaction.operateur.image}`}
                      alt={transaction.operateur.nom}
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <CardTitle>{transaction.operateur.nom}</CardTitle>
                </div>
                <div className="">
                  <p className=" text-green-600">{transaction.type}</p>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-xl font-semibold flex gap-2 items-center mb-3">
                  <HandCoins />
                  {transaction.montant} Ar
                </p>
                <p className="flex gap-2 items-center">
                  <Phone className="text-primary" size={16} />
                  {transaction.tel}
                </p>
              </CardContent>
              <CardFooter>
                <Detaille transaction={transaction} />
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PresPage;
