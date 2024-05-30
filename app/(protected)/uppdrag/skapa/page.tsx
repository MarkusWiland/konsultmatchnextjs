"use client";
import React, { useState, useTransition } from "react";
import { useForm, useFormContext } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { sv } from "date-fns/locale";
import {
  FormControl,
  FormField,
  FormItem,
  Form,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { JobApplicationSchema } from "@/schema";
import { createJobApplication } from "@/actions/createJobApplication";
import { useCurrentUser } from "@/hooks/use-current-user";
import { redirect } from "next/navigation";
import FormError from "@/components/form-error";
import FormSuccess from "@/components/form-success";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { CalendarIcon, CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";

const categories = [
  { value: "it", label: "IT" },
  { value: "ekonomi", label: "Ekonomi" },
  { value: "management", label: "Management" },
  { value: "marknadsforing", label: "Marknadsföring" },
  { value: "hr", label: "HR" },
  { value: "teknik", label: "Teknik" },
  { value: "juridik", label: "Juridik" },
  { value: "halsa", label: "Hälsa" },
  { value: "utbildning", label: "Utbildning" },
  { value: "logistik", label: "Logistik" },
];
export default function JobApplication() {
  const user = useCurrentUser();
  if (user?.role !== "BUSINESS") {
    redirect("/");
  }

  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();
  const form = useForm<z.infer<typeof JobApplicationSchema>>({
    resolver: zodResolver(JobApplicationSchema),
    defaultValues: {
      title: "",
      description: "",
      category: "",
      startDate: new Date(), // Skapa Date-objekt från sträng
      endDate: new Date(), // Skapa Date-objekt från sträng
      salary: "", // Standardlön inställd på 0.00
      requirements: "",
    },
  });

  const [open, setOpen] = useState(false);
  const { control, watch } = form;
  const value = watch("category");
  const onSubmit = (values: z.infer<typeof JobApplicationSchema>) => {
    setError("");
    setSuccess("");
    console.log("values", values);

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
                <Textarea {...field} disabled={isPending} placeholder="Title" />
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
            <FormItem className="flex flex-col">
              <FormLabel>Start Date</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[240px] pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(new Date(field.value), "PPP", { locale: sv })
                      ) : (
                        <span>Välj ett datum</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    locale={sv}
                    selected={field.value}
                    onSelect={(date) => {
                      field.onChange(date);
                    }}
                    disabled={(date) =>
                      date >
                      new Date(
                        date.getFullYear() + 3,
                        date.getMonth(),
                        date.getDate()
                      )
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="endDate"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>End Date</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[240px] pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(new Date(field.value), "PPP", { locale: sv })
                      ) : (
                        <span>Välj ett datum</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    locale={sv}
                    selected={field.value}
                    onSelect={(date) => {
                      field.onChange(date);
                    }}
                    disabled={(date) =>
                      date >
                      new Date(
                        date.getFullYear() + 3,
                        date.getMonth(),
                        date.getDate()
                      )
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
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
          control={control}
          name="category"
          render={({ field }) => (
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={open}
                  className="w-[200px] justify-between"
                >
                  {value
                    ? categories.find((category) => category.value === value)
                        ?.label
                    : "Välj kategori..."}
                  <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[200px] p-0">
                <Command>
                  <CommandInput placeholder="Sök kategori..." className="h-9" />
                  <CommandEmpty>Ingen kategori funnen.</CommandEmpty>
                  <CommandGroup>
                    <CommandList>
                      {categories.map((category) => (
                        <CommandItem
                          key={category.value}
                          value={category.value}
                          onSelect={(currentValue) => {
                            field.onChange(
                              currentValue === value ? "" : currentValue
                            );
                            setOpen(false);
                          }}
                        >
                          {category.label}
                          <CheckIcon
                            className={cn(
                              "ml-auto h-4 w-4",
                              value === category.value
                                ? "opacity-100"
                                : "opacity-0"
                            )}
                          />
                        </CommandItem>
                      ))}
                    </CommandList>
                  </CommandGroup>
                </Command>
              </PopoverContent>
            </Popover>
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
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
