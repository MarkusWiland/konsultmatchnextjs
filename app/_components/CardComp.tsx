import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";

export default function CardComp({ jobApplication }: any) {
  return (
  
      <Card className="hover:scale-105 cursor-pointer min-h-[200px] ">
        <CardHeader>
          <CardTitle className="uppercase">{jobApplication.title}</CardTitle>
          <div className="text-sm ">
            Kategori:{" "}
            <span className="uppercase p-2 bg-gray-200 rounded-md text-black font-bold text-sm">
              {jobApplication?.category}
            </span>
          </div>
          <div>Företag: {jobApplication?.companyName || "Konsultmatch.se"}</div>
          <div>Stad: {jobApplication?.location || "Stockholm"}</div>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2 justify-between items-center text-black border-sm rounded-md border-gray-700 text-sm bg-gray-200 p-2 font-bold">
            <div className="text-center">
              <h2>Start</h2>{" "}
              {jobApplication.startDate &&
                new Date(jobApplication.startDate).toLocaleDateString("sv-SE")}
            </div>
            <div>
              <h2>Slut</h2>
              {jobApplication.endDate &&
                new Date(jobApplication.endDate).toLocaleDateString("sv-SE")}
            </div>
          </div>
          <CardDescription>
            <div className="line-clamp-3 mt-6">
              {jobApplication.description}
            </div>
          </CardDescription>
        </CardContent>
        <CardFooter className="text-sm"></CardFooter>
      </Card>
 
  );
}
