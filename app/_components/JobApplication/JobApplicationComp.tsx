"use client";
import { useState, useEffect, Suspense } from "react";
import { ComboboxDemo } from "@/app/_components/ComboBoxDemo";
import { PaginationComp } from "@/app/_components/Pagination";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { Skeleton } from "@/components/ui/skeleton";
import CardComp from "../CardComp";
interface Uppdrag {
  title: string;
  id: string;
  description: string;
  startDate: Date;
  endDate: Date;
  category: string;
  salary: string | null;
  requirements: string;
}

const ITEMS_PER_PAGE_DEFAULT = 4;
const ITEMS_PER_PAGE_CATEGORY = 2;

export default function JobApplicationComp({
  jobApplications,
}: {
  jobApplications: Uppdrag[];
}) {
  console.log("jobApplications", jobApplications);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Filtrerar uppdrag baserat på vald kategori
  const filteredUppdrag = selectedCategory
    ? jobApplications.filter((item) => item.category === selectedCategory)
    : jobApplications;

  // Beräknar antalet sidor baserat på filtrerade uppdrag och antal uppdrag per sida
  const totalPages = Math.ceil(filteredUppdrag.length / getItemsPerPage());

  // Beräknar paginerade uppdrag baserat på aktuell sida och antal uppdrag per sida
  const paginatedUppdrag = filteredUppdrag.slice(
    (currentPage - 1) * getItemsPerPage(),
    currentPage * getItemsPerPage()
  );

  // Funktion för att hantera sidbyte
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // Funktion för att bestämma antal uppdrag per sida beroende på vald kategori
  function getItemsPerPage() {
    return selectedCategory !== ""
      ? ITEMS_PER_PAGE_CATEGORY
      : ITEMS_PER_PAGE_DEFAULT;
  }
  function createSlug(title: string) {
    return title
      .toLowerCase()
      .replace(/ /g, "-") // ersätter mellanslag med bindestreck
      .replace(/[^\w-]+/g, ""); // tar bort alla icke-alfanumeriska tecken förutom bindestreck och understreck
  }

  return (
    <div>
      <ComboboxDemo
        onSelectCategory={setSelectedCategory}
        jobApplications={jobApplications}
      />
      <div className="grid grid-cols-5 gap-4 mt-10 mb-6">
        {paginatedUppdrag.map((item) => {
          const slug = createSlug(item.title);
          return (
          
              <Link href={`/uppdrag/${item.id}`} key={`${item.id}`}>
               
                <CardComp jobApplication={item} />
              </Link>
         
          );
        })}
      </div>
      <PaginationComp
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
