import { db } from "@/lib/prisma";

async function getOneJobApplication(id: string) {
  const uppdrag = await db.jobApplication.findUnique({ where: { id: id } });
  return uppdrag;
}

export default async function UppdragPageId({
  params,
}: {
  params: { id: string };
}) {
  const {  id } = params;
  console.log("params", params)
  const job = await getOneJobApplication(id);
  if (!job) {
    return <div>Job not found</div>;
  }

  return (
    <div>
      <h1>{job?.title}</h1>
      {job?.startDate && (
        <div className="line-clamp-1">
          {job?.startDate.toLocaleDateString("se-SV")}
        </div>
      )}
      {job?.endDate && (
        <div className="line-clamp-1">
          {job?.endDate.toLocaleDateString("se-SV")}
        </div>
      )}
      <div className="line-clamp-1">{job?.description}</div>
      <div className="line-clamp-1">{job?.requirements}</div>
      <div className="line-clamp-1">{job?.salary}</div>
      <div className="line-clamp-1">{job?.category}</div>
    </div>
  );
}
