'use client'
import React, { useState, useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import {
  FormControl,
  FormField,
  FormItem,
  Form,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { JobApplicationSchema } from '@/schema'
import { createJobApplication } from '@/actions/createJobApplication'
import { useCurrentUser } from '@/hooks/use-current-user'
import { redirect } from 'next/navigation'
import FormError from '@/components/form-error'
import FormSuccess from '@/components/form-success'



export default function JobApplication() {
  const user = useCurrentUser();
    if(user?.role !== "BUSINESS")  {
      redirect("/")
    }

    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>("");
    const [isPending, startTransition] = useTransition();
    const form = useForm<z.infer<typeof JobApplicationSchema>>({
        resolver: zodResolver(JobApplicationSchema),
        defaultValues: {
          title: "",
          description: "",
          startDate: "", // Använder toISOString() för att få dagens datum i ISO-8601-format
          endDate: "", // Använder toISOString() för att få dagens datum i ISO-8601-format
          salary: "0.00", // Standardlön inställd på 0.00
          requirements: "",
        },
        
      });
    

      const onSubmit = (values: z.infer<typeof JobApplicationSchema>) => {
        setError("");
        setSuccess("");
        console.log("values", values)
        startTransition(() => {
          createJobApplication(values).then((data) => {
            setError(data?.error);
            setSuccess(data?.success);
          });
        });
      };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
      <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    disabled={isPending}
                    placeholder="Title"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
  <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>description</FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    disabled={isPending}
                    placeholder="Job Requirements"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
            <FormField
            control={form.control}
            name="startDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>startDate</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    disabled={isPending}
                    placeholder="Job Requirements"
                    type="date"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
            <FormField
            control={form.control}
            name="endDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>endDate</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    disabled={isPending}
                    placeholder="Job Requirements"
                    type="date"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
            <FormField
            control={form.control}
            name="salary"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Salary</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    disabled={isPending}
                    placeholder="Job Requirements"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
            <FormField
            control={form.control}
            name="requirements"
            render={({ field }) => (
              <FormItem>
                <FormLabel>requirements</FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    disabled={isPending}
                    placeholder="Job Requirements"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormError message={error} />
          <FormSuccess message={success} />
        <Button type="submit" >Submit</Button>
      </form>
    </Form>
  )
}
