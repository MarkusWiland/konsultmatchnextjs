'use client'
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
  description: string;
  id: number;
  kategori: string;
}

const uppdrag: Uppdrag[] = [
  {
    title: "Detta är itkonsult",
    description: "Detta är en beskrivning av ett uppdrag",
    id: 1,
    kategori: "IT",
  },
  {
    title: "Detta är Trädgård",
    description: "Detta är en beskrivning av ett uppdrag",
    id: 2,
    kategori: "Trädgård",
  },
  {
    title: "Detta är itkonsult 47",
    description: "Detta är en beskrivning av ett uppdrag",
    id: 3,
    kategori: "IT",
  },
  {
    title: "Detta är Ekonomi",
    description: "Detta är en beskrivning av ett uppdrag",
    id: 4,
    kategori: "Ekonomi",
  },
  {
    title: "Detta är itkonsult",
    description: "Detta är en beskrivning av ett uppdrag",
    id: 5,
    kategori: "IT",
  },
];

const ITEMS_PER_PAGE_DEFAULT = 4;
const ITEMS_PER_PAGE_CATEGORY = 2;

export default function Uppdrag() {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Filtrerar uppdrag baserat på vald kategori
  const filteredUppdrag = selectedCategory
    ? uppdrag.filter((item) => item.kategori === selectedCategory)
    : uppdrag;

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
    return selectedCategory !== "" ? ITEMS_PER_PAGE_CATEGORY : ITEMS_PER_PAGE_DEFAULT;
  }

  return (
    <div>
      <ComboboxDemo onSelectCategory={setSelectedCategory} />
      <div className="grid grid-cols-5 gap-4 mt-10">
        {paginatedUppdrag.map((item) => (
          <Card key={item.id}>
            <CardHeader>
              <CardTitle>{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                <p>{item.description}</p>
                <p>{item.kategori}</p>
              </CardDescription>
            </CardContent>
            <CardFooter>
              <Link href={`/uppdrag/${item.id}`}>Uppdrag</Link>
            </CardFooter>
          </Card>
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
