// "use client"
import React from 'react'
import Link from 'next/link'
import { IVcard } from '@/lib/types/interfaces'
// import { QRCode } from 'react-qrcode-logo';
import { EnvelopeFill, PhoneFill, GeoAltFill, JournalAlbum } from 'react-bootstrap-icons'

const Design4 = ({data} : {data: IVcard}) => {
  return (
    <div className="flex flex-col bg-white border-2 rounded-xl shadow-lg">
        <div className="bg-gradient-to-r from-red-500 via-cyan-500 to-yellow-500 w-full flex flex-col text-gray-100 p-4 pb-6 rounded-t-xl">
            
            {/* <div className="mx-auto">
                <QRCode  value={`http://192.168.1.135:3000/card/${data.id}`} />
            </div> */}
            <p className="font-bold mx-auto mt-6 text-3xl mb-6 text-center">
                {data.company} 
            </p>
            <p className="mx-auto text-xl">
                {data.prefix} {data.firstName} {data.lastName}
            </p>
            <p className="mx-auto text-gray-200 text-md">
                {data.jobTitle}
            </p>
            <p className="mx-auto text-gray-200 text-md">
                {data.jobRole}
            </p>
        </div>

        <div className="flex flex-col px-4 py-12 ml-4 gap-2">
            <p className="flex items-center gap-4">
                <PhoneFill /> {data.hpNo}
            </p>
            <p className="flex items-center gap-4">
                <EnvelopeFill /> {data.email}
            </p>
            <p className="flex items-center gap-4">
                <JournalAlbum /> <Link href={data.url || ''}>{data.url}</Link>
            </p>
            <p className="flex items-center gap-4">
                <GeoAltFill /> {data.street}
            </p>
            <p className="flex items-center gap-4">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {data.city}
            </p>
            <p className="flex items-center gap-4">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {data.country} {data.postCode}
            </p>
            
        </div>
    </div>
  )
}

export default Design4