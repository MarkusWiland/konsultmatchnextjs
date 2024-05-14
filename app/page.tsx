import { useAuth } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";

export default async function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <h1>KonsultMatch</h1>

    </main>
  );
}
