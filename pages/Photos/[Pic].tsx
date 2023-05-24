/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */

export const getStaticPaths = async ( ) =>{
    const res = await fetch(`https://api.escuelajs.co/api/v1/categories`);
    const Data = await res.json( );

    const paths = Data.map((e : any)=>{
        return {
            params : {
                Pic : e.id.toString()
            }
        }
    })

    return {
        paths,
        fallback : false
    }
}

export const getStaticProps = async (paths : any) =>{
    const id = paths.params.Pic;
    const res = await fetch(`https://api.escuelajs.co/api/v1/categories/${id}`);
    const Data = await res.json( );

    return {
        props : {
            Data
        }
    }
}

export default function SinglePagePics ({Data} : any) {
    return (
        <>
        <img src={Data.image}/>
        <h1>{Data.title}</h1>
        </>
    )
}