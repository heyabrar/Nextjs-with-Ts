import Link from "next/link";

export const getStaticProps = async ( ) =>{
    const res = await fetch(`https://api.escuelajs.co/api/v1/categories`);
    const Data = await res.json( );
    return {
        props : {
            Data
        }
    }
}

export default function Photos({Data} : any) {
    return (
        <>
            <div className="sm:grid grid-cols-2 w-11/12  md:grid grid-cols-2 lg:grid grid-cols-4 border-2 border-red-500 m-auto">
                {Data.map((e : any) =>{
                    return <div key={e.id}>
                       <Link href={`/Photos/${e.id}`}><img src={e.image} alt='img'/></Link>
                    </div>
                })}
            </div>
        </>
    )
}