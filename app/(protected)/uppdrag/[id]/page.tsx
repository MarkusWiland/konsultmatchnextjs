import { db } from "@/lib/prisma";

async function getOneJobApplication(id: string) {
  const uppdrag = await db.jobApplication.findUnique({ where: { id: id  } });
  return uppdrag
}
  
export default async function UppdragPageId({ params }: { params: { id: string } }) {
  const { id } = params;
  const job = await getOneJobApplication(id);
  console.log(job);
  return (
    <div>
      <h1>{id}</h1>
      <h1>{job?.title}</h1>
      <h1>{job?.description}</h1>
    </div>
  );
}
