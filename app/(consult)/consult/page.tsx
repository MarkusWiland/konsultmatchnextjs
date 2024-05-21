
import React from 'react'
import {  getAllUsers } from '@/data/user';
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default async function ConsultPage() {
    const users = await getAllUsers();

  return (
    <div>
      {users?.map((user) => (
         <Card className="w-[350px]">
         <CardHeader>
           <CardTitle>Create project</CardTitle>
           <CardDescription>Deploy your new project in one-click.</CardDescription>
         </CardHeader>
         <CardContent>
            {user.name}
            <div>
              {user.email}
              {user.role}
            </div>
         </CardContent>
         <CardFooter className="flex justify-between">
           <Button variant="outline">Cancel</Button>
           <Button>Deploy</Button>
         </CardFooter>
       </Card>
        
      ))}
    </div>
  )
}
