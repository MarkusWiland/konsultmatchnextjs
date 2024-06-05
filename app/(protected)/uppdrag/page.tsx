import JobApplicationComp from "@/app/_components/JobApplication/JobApplicationComp";
import { db } from "@/lib/prisma";

async function getJobApplication() {
  try {
    const jobApplications = await db.jobApplication.findMany();
    return jobApplications;
  } catch (error) {
    console.error("Error fetching job applications:", error);
    return [];
  }
}

export default async function Uppdrag() {
  const getAllJobApplications = await getJobApplication();
  console.log("getAllJobApplications", getAllJobApplications);
  return <JobApplicationComp jobApplications={getAllJobApplications} />;
}
