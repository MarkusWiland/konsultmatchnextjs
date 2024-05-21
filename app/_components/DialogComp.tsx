import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import DialogMenuList from "@/components/ui/header/dialog-menu-list";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function DialogComp({
  children,
  user,
}: {
  children: React.ReactNode;
  user?: any;
}) {
  return (
    <Dialog>
      {children}
      <DialogContent className="2xl:min-w-[50%] lg:min-w-[60%] p-0  text-sm">
        <div className="flex">
          <div className="flex-[0.3]">
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
                <DialogTitle className="pb-4">Profil detaljer</DialogTitle>
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
                                <CardTitle className="text-xl whitespace-nowrap">
                                  Uppdrag title
                                </CardTitle>
                              </CardHeader>
                              <CardDescription className="text-sm">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Expedita
                              </CardDescription>
                              <Link href="/uppdrag" className="mt-6">
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
  );
}
