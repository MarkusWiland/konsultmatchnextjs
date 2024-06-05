'use client'
import Link from 'next/link'
import React from 'react'

export default function KontaktaOss() {
  return (
    <div className="flex  items-start pt-16 justify-between content mx-auto min-h-[calc(70vh_-_70px)]">
      <div className="flex flex-col gap-12 max-w-[50%]">
        <h1 className="text-2xl font-bold">VI ÄR HÄR FÖR DIG!</h1>
        <h2 className="text-1xl font-bold">Hur kan vi hjälpa dig?</h2>

        <p className="font-light text-md">
          Kontakta oss gärna om det är några funderingar du undrar över eller
          har några features du önskar.
        </p>

        <ul className="flex flex-col gap-12">
          <li>
            <Link href="mailto:markus.wiland@outlook.com">
              Ställ en fråga ---
            </Link>
          </li>
          <li>
            <Link href="mailto:markus.wiland@outlook.com">Säg Hej! ---</Link>
          </li>
        </ul>
     
      </div>
      <div>
      <ul className="flex flex-col gap-8">
  <li className="relative pl-4">
    <span className="absolute left-0 top-0 h-full border-l-2 border-blue-300"></span>
    <h1 className="uppercase font-bold pb-2">Önskas ny feature?</h1>
    <a href="mailto:features@konsultmatch.se">Klicka här</a>
  </li>
  <li className="relative pl-4">
    <span className="absolute left-0 top-0 h-full border-l-2 border-blue-300"></span>
    <h1 className="uppercase font-bold pb-2">Fråga kring betalning?</h1>
    <a href="mailto:betalning@konsultmatch.se">Klicka här</a>
  </li>
</ul>

      </div>
    </div>
  )
}
