// components/Profile/Breadcrumbs.tsx
import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface BreadcrumbsProps {
  isEditing: boolean;
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
  editSection: string | null;
  setEditSection: React.Dispatch<React.SetStateAction<string | null>>;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  isEditing,
  setIsEditing,
  editSection,
  setEditSection,
}) => {
  return (
    <Breadcrumb className="mb-4">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink onClick={() => setIsEditing(false)}>
            Profil
          </BreadcrumbLink>
        </BreadcrumbItem>
        {isEditing && (
          <>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage
                onClick={() => setEditSection(editSection || "Profil")}
              >
                {editSection || "Redigera"}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </>
        )}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default Breadcrumbs;
