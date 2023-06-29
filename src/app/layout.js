import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '../../components/layout/navbar/Navbar'
import Footer from '../../components/layout/footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'EcoTravel',
  description: 'Travel that favors the environment',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>{children}<Footer/></body>
    </html>
  )
}
