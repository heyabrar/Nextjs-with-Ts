import { Inter } from 'next/font/google'
import Navbar from '@/Components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Navbar />
      <div style={{textAlign : 'center'}}> 
        <h1>Welcome to HomePage</h1>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/1200px-Nextjs-logo.svg.png'  width='600px'/>
      </div>
    </>
  )
}
