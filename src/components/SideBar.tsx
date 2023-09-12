import React from 'react'
import Link from 'next/link'

const SideBar = () => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-200 text-gray-800 pt-4 shadow-lg w-max">
      <Link className="p-3 hover:font-bold hover:text-red-600" 
        href="/drugs">
        Drugs
      </Link>
      <Link className="p-3 hover:font-bold hover:text-red-600"
        href="/vendors">
        Vendors
      </Link>
      <Link className="p-3 hover:font-bold hover:text-red-600"
       href="/invoice">
        Invoice
      </Link>
      <Link className="p-3 hover:font-bold hover:text-red-600"
       href="/stock">
        Stock
      </Link>
      <Link className="p-3 hover:font-bold hover:text-red-600"
       href="/patient">
        Patient
      </Link>
      <Link className="p-3 hover:font-bold hover:text-red-600"
       href="/visit">
        Visit
      </Link>
    </div>    
  )
}

export default SideBar