import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'
import { ThemeProvider } from '../../context/ThemeContext'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default async function RootLayout({ children }) {
  
  const supabase = createServerComponentClient({ cookies })

  const {
    data: { user },
  } = await supabase.auth.getUser()
  
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider >
        <div className="container">
        <Navbar user={user} />
        {children}
        <Footer />
        </div>
        </ThemeProvider>
        </body>
    </html>
  )
}
