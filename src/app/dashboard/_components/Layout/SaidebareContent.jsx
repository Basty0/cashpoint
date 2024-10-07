"use client";
import { Home, ShoppingCart, Package, Users, LineChart } from "lucide-react";

import Link from "next/link";
import { Badge } from "@/components/ui/badge"; // Ajout de l'import du composant Badge
import { usePathname } from "next/navigation";

export function SaidebareContent() {
  const pathname = usePathname();
  return (
    <>
      <nav className=" grid items-start px-2 text-sm font-medium lg:px-4">
        <Link
          href="/dashboard"
          className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary ${
            pathname === "/dashboard"
              ? "bg-muted text-primary"
              : "text-muted-foreground"
          }`}
        >
          <Home className="h-4 w-4" />
          Accueil
        </Link>
        <Link
          href="/dashboard/transaction"
          className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary ${
            pathname === "/dashboard/transaction"
              ? "bg-muted text-primary"
              : "text-muted-foreground"
          }`}
        >
          <ShoppingCart className="h-4 w-4" />
          Transactions
        </Link>
        <Link
          href="/dashboard/raport"
          className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary ${
            pathname === "/dashboard/raport"
              ? "bg-muted text-primary"
              : "text-muted-foreground"
          }`}
        >
          <Package className="h-4 w-4" />
          Rapports
        </Link>
      </nav>
    </>
  );
}
