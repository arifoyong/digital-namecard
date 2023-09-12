import './globals.css'
import { Inter } from 'next/font/google'
// import AppBar from '@/components/AppBar/AppBar'
import { Providers } from '@/components/Providers/Providers'
// import AlertProvider from '@/components/Providers/AlertProviders'
// import AlertDialog from '@/components/Providers/AlertDialog'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'VCard Application',
  description: 'Your digital namecard',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en"> 
      <Providers>
        <body className="min-h-screen container mx-auto bg-gray-100">
          {/* <div className="bg-white container">
          <AlertProvider AlertComponent={AlertDialog}>
              <AppBar/> */}
              {children}
          {/* </AlertProvider> */}
          {/* </div> */}
        </body>
      </Providers>
    </html>
  )
}
