
import AppBar from '@/components/AppBar/AppBar'

import AlertProvider from '@/components/Providers/AlertProviders'
import AlertDialog from '@/components/Providers/AlertDialog'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="bg-white container">
    <AlertProvider AlertComponent={AlertDialog}>
        <AppBar/>
        {children}
    </AlertProvider>
    </div>
  )
}
