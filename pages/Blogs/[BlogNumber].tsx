export const getStaticPaths = async ( ) =>{
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const Data = await res.json( );

    const paths = Data.map((e : any)=>{
        return {
            params : {
                BlogNumber : e.id.toString()
            }
        }
    })

    return {
        paths,
        fallback : false
    };
};

export const getStaticProps = async (paths : any) =>{
    const Id = paths.params.BlogNumber
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${Id}`);
    const Data = await res.json( );

    return {
        props : {
            Data
        }
    }
}

export default function SingleBlog ({Data} : any){
    return (
        <>
        <h1>Single Blog Page</h1>
        <h4>{Data.body}</h4>
        </>
    )
}