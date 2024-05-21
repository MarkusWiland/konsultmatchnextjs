import { db } from "@/lib/prisma";

const getData = async (id: string) => {
  const uppdrag = await db.assignment.findUnique({ where: { id: Number(id) } });
  return uppdrag
};
export default async function UppdragPageId({ params }: { params: { id: string } }) {
  const { id } = params;
  const getUppdrag = await getData(id);
  console.log(getUppdrag);
  return (
    <div>
      <h1>{id}</h1>
      <h1>{getUppdrag?.title}</h1>
      <h1>{getUppdrag?.description}</h1>
    </div>
  );
}
