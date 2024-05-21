import { ComboboxAssignment } from '@/app/_components/ComboboxAssignment'
import { PaginationComp } from '@/app/_components/Pagination'
import Link from 'next/link'

export default function Uppdrag() {
  return (
    <div>
        <ComboboxAssignment />
        <div>
      <Link href="/uppdrag/2">Uppdrag</Link>
        </div>
        <PaginationComp />
    </div>
  )
}
