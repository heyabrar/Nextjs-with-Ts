import { Inter } from 'next/font/google'
import Navbar from '@/Components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="bg-red-500 mt-20 p-20 sm:bg-blue-500 md:bg-green-500 lg:bg-orange-500" > 
        {/* <h1>Welcome to HomePage</h1> */}
        {/* <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/1200px-Nextjs-logo.svg.png' width='300px' className='m-auto sm:w-full'/> */}
      </div>
    </>
  )
}
