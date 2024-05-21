"use server";
import bcryptjs from "bcryptjs";
import { RegisterSchema } from "@/schema";
import * as z from "zod";
import { db } from "@/lib/prisma";
import { getUserByEmail } from "@/data/user";
import { Role } from "@prisma/client";
type UserData = {
  email: string,
  name: string,
  role: "CONSULT" | "BUSINESS" | "ADMIN",
  password: string,
  businessName?: string,
  businessAddress?: string,
  businessPhone?: string,
};
export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid Fields" };
  }

  const { email, name, password, role, businessName, businessAddress, businessPhone } = validatedFields.data;
  const hashedPassword = await bcryptjs.hash(password, 10);

  const existingUser = await getUserByEmail(email);
  if (existingUser) {
    return { error: "Email already exists" };
  }

  // Prepare user data for insertion
  const userData: UserData    =  {
    email,
    name,
    role,
    password: hashedPassword,
  };

  if (role === "BUSINESS" as Role) {
    // Add business-specific fields if role is BUSINESS
    userData.businessName = businessName;
    userData.businessAddress = businessAddress;
    userData.businessPhone = businessPhone;
  }

  await db.user.create({
    data: userData,
  });

  return { success: "User registered successfully" };
};