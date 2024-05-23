"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import DialogMenuList from "@/components/ui/header/dialog-menu-list";
import React, { useState } from "react";
import Breadcrumbs from "./Breadcrumbs";
import ProfileDetails from "./ProfileDetails";
import EditProfile from "./EditProfile";

export default function DialogComp({
  children,
  user,
}: {
  children: React.ReactNode;
  user: any;
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editSection, setEditSection] = useState<string | null>(null);

  const handleUpdateProfile = (
    name: string,
    email: string,
    image: File | null,
    address: string,
    phoneNumber: string
  ) => {
    // Här kan du lägga till logik för att uppdatera profilen, inklusive bildhantering
    console.log("Profil uppdaterad:", {
      name,
      email,
      image,
      address,
      phoneNumber,
    });
    setIsEditing(false);
    setEditSection(null);
  };

  return (
    <Dialog>
      {children}
      <DialogContent className="2xl:min-w-[50%] lg:min-w-[60%] p-0 text-sm">
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
          <div className="flex-[0.7] rounded-xl border-l">
            <div className="p-6">
              <Breadcrumbs
                isEditing={isEditing}
                setIsEditing={setIsEditing}
                editSection={editSection}
                setEditSection={setEditSection}
              />
              {isEditing ? (
                <EditProfile
                  user={user}
                  handleUpdateProfile={handleUpdateProfile}
                  handleCancelEdit={() => {
                    setIsEditing(false);
                    setEditSection(null);
                  }}
                  section={editSection || "Profil"}
                />
              ) : (
                <ProfileDetails
                  user={user}
                  setIsEditing={setIsEditing}
                  setEditSection={setEditSection}
                />
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
