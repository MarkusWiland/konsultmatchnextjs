import { currentUser } from '@/lib/auth';
import { redirect } from 'next/navigation';
import React from 'react'

export default async function AdminPanel() {
    const user = await currentUser();
    if (!user || user?.role !== 'ADMIN') {
        redirect('/auth/login')
    }
    console.log("ADMINPANEL", user)
  return (
    <div>AdminPanel</div>
  )
}
