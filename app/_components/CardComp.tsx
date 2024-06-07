import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Building2, Calendar, Laptop, LayoutGrid, MapPin } from "lucide-react";
import React from "react";

export default function CardComp({ jobApplication }: any) {
  return (
    <Card className="hover:scale-105 transition-all cursor-pointer min-h-[200px] ">
      <CardTitle className="uppercase py-2 px-6 bg-[#22C55E] rounded-t-md text-black text-md">
        {jobApplication.title}
      </CardTitle>
      <CardHeader className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <Building2 />
          <span className="text-sm uppercase">
            {jobApplication?.companyName || "Konsultmatch.se"}
          </span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <LayoutGrid />
          <span className="text-sm uppercase">{jobApplication?.category}</span>
        </div>
        {/*
        <div className="flex items-center gap-2">
          <Building2 />
          <span className="text-sm">
            {jobApplication?.companyName || "Konsultmatch.se"}
          </span>
        </div>
      */}
        <div className="flex items-center gap-2">
          <MapPin />
          <span className="text-sm uppercase ">
            {jobApplication?.location || "Stockholm"}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Laptop />
          <span className="text-sm uppercase">
            {jobApplication?.work || "0-4 remote arbetasdagar"}
          </span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <Calendar />
          <div className="">
            {jobApplication.startDate &&
              new Date(jobApplication.startDate).toLocaleDateString("sv-SE")}
          </div>
          {" - "}
          <div>
            {jobApplication.endDate &&
              new Date(jobApplication.endDate).toLocaleDateString("sv-SE")}
          </div>
        </div>
      </CardHeader>

    </Card>
  );
}
