import Navbar from "@/Components/Navbar"
import Link from "next/link";

interface Blogs {
    userId: number,
    id: number,
    title: string,
    body: string
}

export const getStaticProps = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const data = await res.json();
    return {
        props: {
            data,
        }
    }
}

export default function Blog({ data }: any) {
    return (
        <>
            <Navbar />
            <h1 className="text-center text-3xl mt-10" >Welcome to Blog</h1>
            <div className="w-2/5 m-auto p-5">
                {data.slice(0, 10).map((e: Blogs) => {
                    return <div key={e.id} className='flex gap-2 border-2 border-blue-500 p-2 rounded-md mt-5'>
                        <p>{e.id}</p>
                        <Link href={`Blogs/${e.id}`} style={{ textDecoration: 'none', color: 'red' }}><p>{e.title}</p></Link>
                    </div>
                })}
            </div>
        </>
    )
}