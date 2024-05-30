"use server";
import { currentUser } from "@/lib/auth";
import { db } from "@/lib/prisma";
import { JobApplicationSchema } from "@/schema";
import * as z from "zod";

export const createJobApplication = async (
  values: z.infer<typeof JobApplicationSchema>
) => {
  const user = await currentUser();
  if (!user) {
    return { error: "User not authenticated" };
  }

  try {
    const validatedFields = JobApplicationSchema.parse(values);
        
    const { title, description, startDate, endDate, salary, category, requirements } = validatedFields;
    console.log("validatedFields", validatedFields)
    const dbUser = await db.user.findUnique({ where: { id: user.id } });
    if (!dbUser) {
      throw new Error("User not found");
    }
    
    const jobApplication = await db.jobApplication.create({
      data: {
        title,
        description,
        startDate,
        endDate,
        category,
        salary,
        requirements,
        user: {
          connect: {
            id: dbUser.id,
          },
        },
      },
    });

    return { success: "Job application created successfully", data: jobApplication };
  } catch (error) {
    console.error("Error creating job application:", error);
    return {
      error: "An error occurred while processing the job application",
      details: error,
    };
  }
};
