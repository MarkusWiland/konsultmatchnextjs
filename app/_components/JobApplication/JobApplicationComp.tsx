"use client";
import { useState, useEffect } from "react";
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

interface Uppdrag {
  title: string;
  id: string;
  description: string;
  startDate: string;
  endDate: string;
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

  return (
    <div>
      <ComboboxDemo onSelectCategory={setSelectedCategory} jobApplications={jobApplications}/>
      <div className="grid grid-cols-5 gap-4 mt-10">
        {paginatedUppdrag.map((item) => (
          <Link href={`/uppdrag/${item.id}`}>
            <Card key={item.id} className="hover:scale-105 cursor-pointer">
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  <p>{item.description}</p>
                  <p>{item.category}</p>
                  <p>{item.requirements}</p>
                </CardDescription>
              </CardContent>
              <CardFooter></CardFooter>
            </Card>
          </Link>
        ))}
      </div>
      <PaginationComp
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
