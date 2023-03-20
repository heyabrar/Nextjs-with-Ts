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
            <h1 style={{textAlign : 'center'}}>Welcome to Blog</h1>
            {data.slice(0,10).map((e: Blogs) => {
                return <div key={e.id} style={{width : '40%', margin : 'auto', display : 'flex', gap : '20px'}}>
                    <p>{e.id}</p>
                    <Link href={`Blogs/${e.id}`} style={{textDecoration:'none', color : 'red'}}><p>{e.title}</p></Link>
                </div>
            })}
        </>
    )
}