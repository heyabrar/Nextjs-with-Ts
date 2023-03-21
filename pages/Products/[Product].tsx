import Navbar from "@/Components/Navbar";

export const getStaticPaths = async () => {
    const res = await fetch(`https://api.escuelajs.co/api/v1/categories`);
    const Data = await res.json();

    const paths = Data.map((e: any) => {
        return {
            params: {
                Product: e.id.toString()
            }
        }
    })
    return {
        paths,
        fallback: false
    }
}
export const getStaticProps = async (paths: any) => {
    const Id = paths.params.Product;
    const res = await fetch(`https://api.escuelajs.co/api/v1/categories/${Id}`);
    const Data = await res.json();

    return {
        props: {
            Data,
        }
    }
}

export default function SingleProduct({ Data }: any) {
    return (
        <>
        <Navbar/>
            <div style={{ width: '40%', margin: 'auto' }} key={Data.id}>
                <img src={Data.image} />
                <p>{Data.name}</p>
            </div>
        </>
    )
}