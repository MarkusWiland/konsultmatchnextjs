import { DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { User } from "@prisma/client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
const assign = [{ title: "hej", description: "cool", id: 1 }];
export default function ProfileDetails({
  user,
  setIsEditing,
  setEditSection,
}: {
  user: User;
  setIsEditing: (editing: boolean) => void;
  setEditSection: (section: string) => void;
}) {
  return (
    <DialogHeader>
      <DialogTitle className="pb-4">Profil detaljer</DialogTitle>
      <hr />
      <div className="flex flex-col gap-4 justify-center">
        <div className="flex items-center justify-between">
          <h2>Profil</h2>
          <Image
            src={user?.image ? user.image : "https://github.com/shadcn.png"}
            alt=""
            height={50}
            width={50}
            className="rounded-full"
          />
          <Button
            onClick={() => {
              setIsEditing(true);
              setEditSection("Profil");
            }}
          >
            Uppdatera Profil
          </Button>
        </div>
        <hr />
        <div className="flex items-center justify-between">
          <h2>Adress</h2>
          <p>{user?.email || "Adress"}</p>
          <Button
            onClick={() => {
              setIsEditing(true);
              setEditSection("Adress");
            }}
          >
            Uppdatera Adress
          </Button>
        </div>
        <div className="flex items-center justify-between">
          <h2>Telefonnummer</h2>
          <p>{user?.email || "Nummer"}</p>
          <Button
            onClick={() => {
              setIsEditing(true);
              setEditSection("Telefonnummer");
            }}
          >
            Uppdatera Telefonnummer
          </Button>
        </div>
        {user?.role === "CONSULT" && (
          <>
            <hr />
            <div className="flex flex-col gap-4">
              <h1>Dina uppdrag</h1>
              <div className="grid grid-cols-3 gap-4">
                {assign.map((assignment: any) => (
                  <Card
                    key={assignment.id}
                    className="flex flex-col items-center px-4 py-2 relative"
                  >
                    <div className="absolute top-2 right-2 text-sm">X</div>
                    <CardHeader>
                      <CardTitle className="text-xl whitespace-nowrap">
                        {assignment.title}
                      </CardTitle>
                    </CardHeader>
                    <CardDescription className="text-sm">
                      {assignment.description}
                    </CardDescription>
                    <Link href={`/uppdrag/${assignment.id}`} className="mt-6">
                      <Button>Se uppdrag</Button>
                    </Link>
                  </Card>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
      <hr />
    </DialogHeader>
  );
}
