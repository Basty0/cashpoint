import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import PresPage from "./_components/PresPage";

const Page = () => {
  return (
    <div>
      <h1>Trasaction</h1>
      <Button asChild>
        <Link href="/dashboard/transaction/123">Voir la transaction </Link>
      </Button>
      <PresPage />
    </div>
  );
};

export default Page;
