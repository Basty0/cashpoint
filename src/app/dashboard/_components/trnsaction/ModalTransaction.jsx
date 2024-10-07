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
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerClose,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import FormeTransaction from "./FormeTransaction";

const ModalTransaction = ({ types, operateurListe, fetchDonner }) => {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery({ minWidth: 768 });
  const [type, SetType] = useState(types);

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline">{type}</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DrawerTitle className="fonts-2xl">{type}</DrawerTitle>
            <DialogDescription>
              Vous pouvez faire des transactions ici
            </DialogDescription>
          </DialogHeader>
          <div className="p-3">
            <FormeTransaction
              operateurListe={operateurListe}
              types={type}
              fetchDonner={fetchDonner}
              className=" m-4"
            />
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline">{type}</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle className="fonts-2xl">{type}</DrawerTitle>
          <DrawerDescription>
            Vous pouvez faire des transactions ici
          </DrawerDescription>
        </DrawerHeader>
        <div className="p-3">
          <FormeTransaction
            operateurListe={operateurListe}
            types={type}
            fetchDonner={fetchDonner}
            className=" m-4"
          />
        </div>
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Annuler</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default ModalTransaction;
