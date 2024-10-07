"use client";
import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"; // Vérifiez l'exportation de ces composants
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerClose,
} from "@/components/ui/drawer"; // Vérifiez l'exportation de ces composants
import { Button } from "@/components/ui/button"; // Vérifiez l'exportation de ce composant
import { Label } from "@/components/ui/label"; // Vérifiez l'exportation de ce composant
import { Input } from "@/components/ui/input"; // Vérifiez l'exportation de ce composant
import { cn } from "@/lib/utils"; // Vérifiez l'exportation de ce composant
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TabsTransaction from "./TabsTransaction";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import FormeTransaction from "./FormeTransaction"; // Vérifiez l'exportation de ce composant

const Detaille = ({ transaction }) => {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery({ minWidth: 768 });
  //   const [type, SetType] = useState(types);

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button>Detail et Modification</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DrawerTitle className="fonts-2xl">{transaction.type}</DrawerTitle>

            <Header transaction={transaction} />
          </DialogHeader>
          <DialogDescription>
            <TabsTransaction transaction={transaction} />
          </DialogDescription>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button>Detail et Modification</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <Header transaction={transaction} />
          <DrawerDescription className="items-center">
            <TabsTransaction transaction={transaction} />
          </DrawerDescription>
        </DrawerHeader>
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Fermé </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default Detaille; // Assurez-vous que ce composant est bien exporté

const Header = ({ transaction }) => {
  return (
    <div className="flex flex-row justify-between items-center">
      <div className=" gap-2 items-center flex">
        <Avatar className="border">
          <AvatarImage
            src={`https://cash-point.sopera.mg/${transaction.operateur.image}`}
            alt={transaction.operateur.nom}
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <DrawerTitle className="fonts-2xl">
          {transaction.operateur.nom}
        </DrawerTitle>
      </div>

      <div className="">
        <p className=" text-green-600">{transaction.type}</p>
      </div>
    </div>
  );
};
