"use client";
import Link from "next/link";
import { Bell, CircleUser, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import MobileNavigation from "./MobileNavigation";
import { ModeToggle } from "@/components/Header/ModeToggle";
import { Badge } from "@/components/ui/badge";
import { useRouter } from "next/navigation";
import { logoutUser } from "@/api/api";

export function Header() {
  const router = useRouter();
  const logout = async () => {
    await logoutUser();
    router.push("/auth/login");
  };
  return (
    <header className="flex h-14 items-center gap-4 border-b bg-muted/40  px-4 lg:h-[60px] lg:px-6">
      <MobileNavigation />
      <div className="w-full flex-1">
        <form>
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Rechercher des produits..."
              className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
            />
          </div>
        </form>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="secondary" size="icon" className="rounded-full">
            <CircleUser className="h-6 w-6" />
            <span className="sr-only">Basculer le menu utilisateur</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Mon Compte</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Paramètres</DropdownMenuItem>
          <DropdownMenuItem>Support</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={logout}>Se déconnecter</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <ModeToggle />
    </header>
  );
}
