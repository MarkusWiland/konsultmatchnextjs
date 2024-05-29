"use server";
import { currentUser } from "@/lib/auth";
import { db } from "@/lib/prisma";
import { AssignmentSchema } from "@/schema";
import * as z from "zod";
export const CreateAssignment = async (
  values: z.infer<typeof AssignmentSchema>
) => {
  const user = await currentUser();
  if (!user) {
    return { error: "User not authenticated" };
  }
  const validatedFields = AssignmentSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid Fields", details: validatedFields.error.errors };
  }

  const {
    title,
    description,
    id,
    startDate,
    endDate,
    priority,
    status,
    assignee,
    tags,
    budget,
    location,
    attachments,
    notes,
    createdAt,
    updatedAt,
  } = validatedFields.data;

  try {
    let dbUser = await db.user.findUnique({ where: { id: user.id } });
    if (!user) {
      throw new Error("User not found");
    }

    // Skapa uppdraget
    const assignment: any = await db.assignment.create({
      data: {
        title,
        description,
        id,
        startDate,
        endDate,
        priority,
        status,
        assignee,
        tags,
        budget,
        location,
        attachments,
        notes,
        createdAt,
        updatedAt,
        userId: dbUser?.id || "",
      },
    });

    return { success: "Assignment created successfully", data: assignment };
  } catch (error) {
    return {
      error: "An error occurred while processing the assignment",
      details: error,
    };
  }
};
