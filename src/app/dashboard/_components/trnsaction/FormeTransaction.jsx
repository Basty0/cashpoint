"use client";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { createTransaction, getOperateurs, loginUser } from "@/api/api";
import { Loader2 } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

const formSchema = z.object({
  montant: z.coerce.number().min(1, {
    message: "Le montant doit être supérieur à 0.",
  }),
  commission: z.coerce.number().min(0, {
    message: "La commission ne peut pas être négative.",
  }),
  tel: z.string().min(1, {
    message: "Le numéro de téléphone est requis.",
  }),
  type: z.string(),
  operateur_id: z.coerce
    .number()
    .min(1, { message: "L'opérateur est requis." }),
});

const FormeTransaction = ({ types, operateurListe, fetchDonner }) => {
  const [selectedId, setSelectedId] = useState(null);
  const operateurs = operateurListe;
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      montant: "",
      commission: "",
      tel: "",
      type: types,
      operateur_id: "",
    },
  });

  useEffect(() => {
    console.log(operateurs);
  }, []);

  const { formState } = form;
  const { isSubmitting } = formState;

  const handleSelect = (id) => {
    setSelectedId(id);
    form.setValue("operateur_id", id);
  };

  async function onSubmit(values) {
    try {
      console.log(values);
      createTransaction(values).then((res) => {
        console.log(res);
        if (res.status === 201) {
          form.reset();
          setSelectedId(null);
          setShowSuccessDialog(true);
          fetchDonner();
        } else {
          throw new Error("Erreur lors de la création de la transaction");
        }
      });
    } catch (error) {
      console.error("Erreur lors de la création de la transaction:", error);
      // Ajoutez ici une gestion d'erreur pour l'utilisateur, par exemple :
      alert("Impossible de créer la transaction. Veuillez réessayer.");
    }
  }

  if (operateurs.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader2 className="w-10 h-10 animate-spin" />
      </div>
    );
  }

  return (
    <div>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-2 space-y-2"
      >
        <div className="flex gap-2">
          {operateurs.map((item) => (
            <div
              key={item.id}
              className={`cursor-pointer px-4 py-2 rounded-md ${
                selectedId === item.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
              onClick={() => handleSelect(item.id)}
            >
              {item.nom}
            </div>
          ))}
        </div>
        {form.formState.errors.operateur_id && (
          <p className="text-red-500">
            {form.formState.errors.operateur_id.message}
          </p>
        )}

        <div className="flex flex-col gap-2 space-y-2">
          <Label htmlFor="montant">Montant</Label>
          <Input
            id="montant"
            {...form.register("montant")}
            placeholder="montant en Ariary"
          />
          {form.formState.errors.montant && (
            <p className="text-red-500">
              {form.formState.errors.montant.message}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-2 space-y-2">
          <Label htmlFor="commission">commission en Ariary</Label>
          <Input
            id="commission"
            {...form.register("commission")}
            placeholder="commission"
          />
          {form.formState.errors.commission && (
            <p className="text-red-500">
              {form.formState.errors.commission.message}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-2 space-y-2">
          <Label htmlFor="tel">Télephone</Label>
          <Input id="tel" {...form.register("tel")} placeholder="téléphone" />
          {form.formState.errors.tel && (
            <p className="text-red-500">{form.formState.errors.tel.message}</p>
          )}
        </div>

        <input type="hidden" {...form.register("type")} />
        <input type="hidden" {...form.register("operateur_id")} />

        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Traitement...
            </>
          ) : (
            "Enregistrer"
          )}
        </Button>
      </form>

      <AlertDialog
        className="rounded-lg"
        open={showSuccessDialog}
        onOpenChange={setShowSuccessDialog}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Transaction réussie</AlertDialogTitle>
            <AlertDialogDescription>
              La transaction a été enregistrée avec succès.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction onClick={() => setShowSuccessDialog(false)}>
              OK
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default FormeTransaction;
