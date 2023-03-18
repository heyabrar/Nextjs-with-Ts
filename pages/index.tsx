import { Inter } from 'next/font/google'
import Navbar from '@/Components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Navbar/>
    <h1>Welcome to HomePage</h1>
    </>
  )
}
