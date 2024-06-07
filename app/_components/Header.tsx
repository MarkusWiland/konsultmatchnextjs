import React from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DialogTrigger } from "@/components/ui/dialog";

import LoginButton from "@/components/ui/auth/login-button";
import NavigationMenuHeader from "@/components/ui/header/navigation-menu-header";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import { currentUser } from "@/lib/auth";
import { ThemeToggle } from "./themeToggle";

import DialogComp from "./Profile/DialogComp";

export default async function Header() {
  const user = await currentUser();

  return (
    <header className="min-h-[70px] flex items-center">
      <div className="container flex justify-between items-center">
        <div>
          <span>Konsuiltmartch</span>
        </div>
        <nav>
          <NavigationMenuHeader />
        </nav>
        <div className="flex gap-4 items-center">
          {user ? (
            <>
              <div className="flex gap-10 items-center">
                <DialogComp user={user}>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Avatar className="cursor-pointer relative">
                        <div className="absolute -top-2 right-0">1</div>
                        <AvatarImage
                          src="https://github.com/shadcn.png"
                          alt="@shadcn"
                        />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                      <div className="px-2">
                        <h1 className="font-bold text-md">{user.name}</h1>
                        <p className="text-sm">{user.email}</p>
                      </div>
                      <DropdownMenuSeparator />
                      <DropdownMenuGroup>
                        <DropdownMenuItem>
                          <DialogTrigger>
                            <span>Profile</span>
                          </DialogTrigger>
                        </DropdownMenuItem>
                        {user.role === "BUSINESS" && (
                          <DropdownMenuItem>
                            <span>Lägg till uppdrag</span>
                          </DropdownMenuItem>
                        )}

                        <DropdownMenuItem>
                          <form
                            action={async () => {
                              "use server";
                              await signOut();
                            }}
                          >
                            <button type="submit">Logga ut</button>
                          </form>
                        </DropdownMenuItem>
                      </DropdownMenuGroup>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </DialogComp>
              </div>
            </>
          ) : (
            <div>
              <LoginButton>
                <Button>Logga in</Button>
              </LoginButton>
           
            </div>
          )}
             <div>
                <ThemeToggle />
              </div>
        </div>
        
      </div>
    </header>
  );
}
