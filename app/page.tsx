import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { db } from "@/lib/prisma";
import Link from "next/link";
import CardComp from "./_components/CardComp";
async function getJobApplication() {
  try {
    const jobApplications = await db.jobApplication.findMany();
    return jobApplications;
  } catch (error) {
    console.error("Error fetching job applications:", error);
    return [];
  }
}
export default async function Home() {
  const jobApplications = await getJobApplication();
  return (
    <main className="flex   flex-col items-center justify-start py-24 ">
      <div className="absolute top-0 left-0 h-full w-screen foo -z-10" />
      <div className="min-h-[calc(70vh_-_70px)] ">
        <div className="pt-4">
          <h1 className="HeroHeader text-center">Konsultmatch.se</h1>
          <div className="HeroContent">
            <p className="max-w-[750px] mx-auto text-xl">
              Konsultmatch.se är en plattform där konsulter och företag möts för
              att hitta och erbjuda uppdrag. Konsulter kan skapa profiler och
              söka efter relevanta uppdrag, medan företag kan lägga ut sina
              behov och hitta passande konsulter. Genom att agera som en
              matchmaker strävar plattformen efter att effektivisera processen
              för att hitta rätt kompetens för varje projekt.
            </p>
          </div>
          <div className="flex gap-4 items-center justify-center">
            <Link href="/konsulter">
              <Button>Hitta Konsulter</Button>
            </Link>
            <Link href="/uppdrag">
              <Button>Hitta Uppdrag</Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="pb-8 flex items-center justify-between w-full">
        <h1 className="text-2xl font-bold">Senaste 5 upplagda uppdrag</h1>
        <Link href="/uppdrag">
          <Button>Se alla</Button>
        </Link>
      </div>
      <div className="grid grid-cols-4 gap-4 w-full">
        {jobApplications.map((jobApplication) => (
          <CardComp jobApplication={jobApplication} key={jobApplication.id} />
        ))}
      </div>

      {/* <Card className=" transition-all cursor-pointer min-h-[200px] w-full">
        <CardTitle className="uppercase py-2 px-6 bg-[#22C55E] rounded-t-md text-black text-md">
          Vad tycker konsulter och företag om oss?
        </CardTitle>
        <CardHeader className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <span className="text-sm uppercase">{"Konsultmatch.se"}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <span className="text-sm uppercase">asd</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-sm uppercase ">{"Stockholm"}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm uppercase">
              {"0-4 remote arbetasdagar"}
            </span>
          </div>
        </CardHeader>
      </Card>
        */}
    </main>
  );
}
