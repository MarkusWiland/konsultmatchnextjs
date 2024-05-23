import { DataTableDemo, DataTableKonsult } from '@/app/_components/DataTable';
import React from 'react'
const users = [
    {
      id: "user1",
      name: "Alice Andersson",
      email: "alice@example.com",
      role: "BUSINESS",
      password: "password1",
      skills: ["Project Management", "Leadership"],
      assignments: [],
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: "user2",
      name: "Bob Bengtsson",
      email: "bob@example.com",
      role: "CONSULT",
      password: "password2",
      skills: ["JavaScript", "React"],
      assignments: [],
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: "user3",
      name: "Charlie Carlsson",
      email: "charlie@example.com",
      role: "ADMIN",
      password: "password3",
      skills: ["System Administration", "Security"],
      assignments: [],
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: "user4",
      name: "David Dahl",
      email: "david@example.com",
      role: "CONSULT",
      password: "password4",
      skills: ["Python", "Data Analysis"],
      assignments: [],
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: "user5",
      name: "Eva Eriksson",
      email: "eva@example.com",
      role: "BUSINESS",
      password: "password5",
      skills: ["Marketing", "SEO"],
      assignments: [],
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: "user6",
      name: "Fredrik Fredriksson",
      email: "fredrik@example.com",
      role: "CONSULT",
      password: "password6",
      skills: ["DevOps", "AWS"],
      assignments: [],
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: "user7",
      name: "Gustav Gustavsson",
      email: "gustav@example.com",
      role: "BUSINESS",
      password: "password7",
      skills: ["Finance", "Accounting"],
      assignments: [],
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: "user8",
      name: "Hanna Hansson",
      email: "hanna@example.com",
      role: "CONSULT",
      password: "password8",
      skills: ["Machine Learning", "AI"],
      assignments: [],
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ];
export default function Konsulter() {
  return (
    <div>
        <DataTableKonsult />
    </div>
  )
}
