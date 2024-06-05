import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

export default async function Home() {
  return (
    <main className="flex  flex-col items-center justify-start py-24 ">
      <div className="min-h-[calc(70vh_-_70px)]">
        <div className="pt-16 ">
          <h1 className="HeroHeader">
            Hitta uppdrag eller konsulter hos Konsultmatch.se
          </h1>
          <div className="HeroContent">
            <p className="max-w-[750px] mx-auto text-xl">
              Used by some of the worlds largest companies, Next.js enables you
              to create high-quality web applications with the power of React
              components.
            </p>
          </div>
          <div className="flex gap-4 items-center justify-center">
            <Button>Se Konsulter</Button>
            <Button>Se Uppdrag</Button>
          </div>
        </div>
      </div>
      <div className="">
        <div className="pb-8 flex items-center justify-between">
          <h1 className="text-2xl font-bold">Senaste 5 upplagda uppdrag</h1>
          <Button>Se alla</Button>
        </div>
        <div className="grid grid-cols-4 gap-4 w-full">
          <Card>
            <CardHeader>Uppdrag title</CardHeader>
            <CardContent>Lite information om uppdraget</CardContent>
            <CardFooter>
              <Button>Läs Mer</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>Uppdrag title</CardHeader>
            <CardContent>Lite information om uppdraget</CardContent>
            <CardFooter>
              <Button>Läs Mer</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>Uppdrag title</CardHeader>
            <CardContent>Lite information om uppdraget</CardContent>
            <CardFooter>
              <Button>Läs Mer</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>Uppdrag title</CardHeader>
            <CardContent>Lite information om uppdraget</CardContent>
            <CardFooter>
              <Button>Läs Mer</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </main>
  );
}
