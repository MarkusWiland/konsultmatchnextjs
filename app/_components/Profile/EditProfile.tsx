import { Button } from "@/components/ui/button";
import { DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { User } from "@prisma/client";
import { useState } from "react";
import Image from "next/image";

export default function EditProfile({
  user,
  handleUpdateProfile,
  handleCancelEdit,
  section,
}: {
  user: User;
  handleUpdateProfile: (name: string, email: string, image: File | null, address: string, phoneNumber: string) => void;
  handleCancelEdit: () => void;
  section: string;
}) {
  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const [address, setAddress] = useState(user?.email || ""); // Assuming address is a property of user
  const [phoneNumber, setPhoneNumber] = useState(user?.email || ""); // Assuming phoneNumber is a property of user
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState(user?.image || "https://github.com/shadcn.png");

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  return (
    <DialogHeader>
      <DialogTitle className="pb-4">Redigera {section}</DialogTitle>
      <hr />
      <div className="flex flex-col gap-4">
        {section === "Profil" && (
          <>
            <div className="flex flex-col">
              <label htmlFor="name">Namn</label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border p-2"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border p-2"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="avatar">Avatar</label>
              <input
                id="avatar"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="border p-2"
              />
              {imagePreview && (
                <div className="mt-4">
                  <Image
                    src={imagePreview || "https://github.com/shadcn.png"}
                    alt="Avatar Preview"
                    height={50}
                    width={50}
                    className="rounded-full"
                  />
                </div>
              )}
            </div>
          </>
        )}
        {section === "Adress" && (
          <div className="flex flex-col">
            <label htmlFor="address">Adress</label>
            <input
              id="address"
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="border p-2"
            />
          </div>
        )}
        {section === "Telefonnummer" && (
          <div className="flex flex-col">
            <label htmlFor="phoneNumber">Telefonnummer</label>
            <input
              id="phoneNumber"
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="border p-2"
            />
          </div>
        )}
        <div className="flex justify-between items-center">
          <Button onClick={() => handleUpdateProfile(name, email, image, address, phoneNumber)}>Spara</Button>
          <Button variant="ghost" onClick={handleCancelEdit}>Avbryt</Button>
        </div>
      </div>
      <hr />
    </DialogHeader>
  );
}
