import './globals.css'

import { ClerkProvider } from '@clerk/nextjs'

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { ReactQueryClientProvider } from '@/components/ReactQueryClientProvider'
import { GoogleAnalytics } from '@next/third-parties/google'
import { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MariUbialli',
  description: 'Apaixonada por artesanato em feltro e por ensinar',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const gaId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID

  return (
    <html lang="en">
      <ClerkProvider
        appearance={{
          variables: { colorPrimary: '#ccc' },
          elements: {
            formButtonPrimary: 'bg-primary hover:bg-primary/80',
            socialButtonsBlockButton:
              'bg-white border-gray-200 hover:bg-transparent hover:border-black text-gray-600 hover:text-black',
            socialButtonsBlockButtonText: 'font-semibold',
            formButtonReset:
              'bg-white border border-solid border-gray-200 hover:bg-transparent hover:border-black text-gray-500 hover:text-black',
            membersPageInviteButton:
              'bg-black border border-black border-solid hover:bg-white hover:text-black',
            card: 'bg-[#fafafa]',
          },
        }}
      >
        <ReactQueryClientProvider>
          <body className={`${inter.className} min-h-screen flex flex-col`}>
            <Header />
            <main className="h-full grow">{children}</main>
            <Footer />
            {gaId && <GoogleAnalytics gaId={gaId} />}
          </body>
        </ReactQueryClientProvider>
      </ClerkProvider>
    </html>
  )
}
