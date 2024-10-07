"use client";

import React from "react";
import { useTheme } from "next-themes";
import { ModeToggle } from "./ModeToggle";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { DollarSign } from "lucide-react";

const DropdownMen = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <Link href="/profile">Profile</Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link href="/profile">Deconnexion</Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50  backdrop-blur-sm ">
      <div className="flex justify-between items-center p-2 lg:w-[80%] mx-auto ">
        <Link className="flex items-center justify-center" href="/">
          <DollarSign className="h-6 w-6" />
          <span className="sr-only">CashPoint Manager</span>
        </Link>
        <div className="flex items-center gap-2">
          <div className="  space-x-4 gap-2 ">
            <Button>
              <Link href="/auth/login">Connexion</Link>
            </Button>

            <Link href="/auth/register">Inscription</Link>
          </div>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
