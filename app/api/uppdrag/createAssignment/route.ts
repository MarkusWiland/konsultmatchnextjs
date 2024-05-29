import { AssignmentSchema } from '@/schema';
import { NextApiRequest, NextApiResponse } from 'next';
import { z } from 'zod';



type AssignmentValues = z.infer<typeof AssignmentSchema>;

type ResponseData = {
  success?: string;
  error?: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const values: AssignmentValues = AssignmentSchema.parse(req.body);
        const { title, description, startDate, endDate, status,  assignee, tags, budget, location, attachments, notes } = values;
        console.log("values", values);
    // Hantera uppdraget här, exempelvis spara till databasen
    // För nu returnerar vi bara ett exempel
    res.status(200).json({ success: "Assignment created successfully" });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: error.errors.map(e => e.message).join(", ") });
    }

    res.status(500).json({ error: 'Internal Server Error' });
  }
}
