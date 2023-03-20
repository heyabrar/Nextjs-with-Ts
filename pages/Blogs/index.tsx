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
            <h1>Welcome to Blog</h1>
            {data.map((e: Blogs) => {
                return <div key={e.id}>
                    <Link href={`Blogs/${e.id}`}><p>{e.title}</p></Link>
                   
                </div>
            })}
        </>
    )
}