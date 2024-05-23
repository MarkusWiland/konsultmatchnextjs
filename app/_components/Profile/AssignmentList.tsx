import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AssignmentList({ assignments } : {assignments: any[]}) {
  return (
    <div className="flex flex-col gap-4">
      <h1>Dina uppdrag</h1>
      <div className="grid grid-cols-3 gap-4">
        {assignments.map((assignment) => (
          <Card key={assignment.id} className="flex flex-col items-center px-4 py-2 relative">
            <div className="absolute top-2 right-2 text-sm">X</div>
            <CardHeader>
              <CardTitle className="text-xl whitespace-nowrap">{assignment.title}</CardTitle>
            </CardHeader>
            <CardDescription className="text-sm">
              {assignment.description}
            </CardDescription>
            <Link href={`/uppdrag/${assignment.id}`} className="mt-6">
              <Button>Se uppdrag</Button>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
}