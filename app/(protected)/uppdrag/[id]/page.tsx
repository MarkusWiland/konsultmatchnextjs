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
    
      <h1>{job?.title}</h1>
      <p className="line-clamp-1">{job?.startDate.toLocaleDateString("se-SV")}</p>
      <p className="line-clamp-1">{job?.endDate.toLocaleDateString("se-SV")}</p>
      <p className="line-clamp-1">{job?.description}</p>
      <p className="line-clamp-1">{job?.requirements}</p>
      <p className="line-clamp-1">{job?.salary}</p>
      <p className="line-clamp-1">{job?.category}</p>
    </div>
  );
}
