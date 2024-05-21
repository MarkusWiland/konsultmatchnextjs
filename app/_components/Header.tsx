import React from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import LoginButton from "@/components/ui/auth/login-button";
import NavigationMenuHeader from "@/components/ui/header/navigation-menu-header";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { auth, signOut } from "@/auth";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { currentUser } from "@/lib/auth";
import { ThemeToggle } from "./themeToggle";

import Link from "next/link";
import DialogMenuList from "@/components/ui/header/dialog-menu-list";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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
        <div>
          {user ? (
            <>
              <div className="flex gap-10 items-center">
                <Dialog>
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
                  <DialogContent className="min-w-[50%] p-0  text-sm">
                    <div className="flex">
                      <div className="flex-[0.3]  ">
                        <div className="p-6">
                          <DialogHeader>
                            <DialogTitle>Konto</DialogTitle>
                            <p>Ändra din konto information.</p>
                          </DialogHeader>
                          <DialogMenuList />
                        </div>
                      </div>
                      <div className="flex-[0.7]  rounded-xl border-l ">
                        <div className="p-6">
                          <DialogHeader>
                            <DialogTitle className="pb-4">
                              Profil detaljer
                            </DialogTitle>
                            <hr />
                            <div className="flex flex-col gap-4 justify-center">
                              <div className="flex items-center justify-between">
                                <h2>Profil</h2>
                                <Image
                                  src={
                                    user.image
                                      ? user.image
                                      : "https://github.com/shadcn.png"
                                  }
                                  alt=""
                                  height={50}
                                  width={50}
                                  className="rounded-full"
                                />
                                <Button>Uppdatera Profil</Button>
                              </div>
                              <hr />
                              <div className="flex items-center justify-between">
                                <h2>Adress</h2>
                                <p>Adress</p>
                              </div>
                              <div className="flex items-center justify-between">
                                <h2>telefon number</h2>
                                <p>nummer</p>
                              </div>
                             
                              {user.role === "CONSULT" && (
                                <>
                                 <hr />
                                <div className="flex flex-col gap-4">
                                  <h1>Dina uppdrag</h1>
                                  <div className="grid grid-cols-3 gap-4 ">
                                    {true && (
                                  
                                        <Card className="flex flex-col items-center px-4 py-2 relative">
                                          <div className="absolute top-2 right-2 text-sm">
                                            X
                                          </div>
                                          <CardHeader>
                                            <CardTitle className="text-xl whitespace-nowrap">Uppdrag title</CardTitle>
                                          </CardHeader>
                                          <CardDescription className="text-sm">
                                            Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit.
                                            Expedita
                                          </CardDescription>
                                          <Link
                                            href="/uppdrag"
                                            className="mt-6"
                                            >
                                            <Button>Se uppdrag</Button>
                                          </Link>
                                        </Card>
                                      
                                    )}
                                  </div>
                                </div>
                              </>
                              )}
                            </div>
                            <hr />
                          </DialogHeader>
                          </div>
                      </div>
                    </div>
                    </DialogContent>
                </Dialog>
                <div>
                  {" "}
                  <ThemeToggle />
                </div>
              </div>
            </>
          ) : (
            <LoginButton>
              <button>Logga in</button>
            </LoginButton>
          )}
        </div>
      </div>
    </header>
  );
}
