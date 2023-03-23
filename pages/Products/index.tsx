import Navbar from "@/Components/Navbar"
import { GetProducts } from "@/Fetch/Fetch"
import { useEffect, useState } from "react"
import styles from '@/styles/products.module.css'
import Link from "next/link"

interface AllProducts {
    id: number,
    name: string,
    image: string,
    creationAt: string,
    updatedAt: string
}

export default function Products() {
    const [products, setProducts] = useState<AllProducts[] | []>([]);
    const [loading, setLoading] = useState(false);

    const handleGetProducts = () => {
        setLoading(() => !loading)
        GetProducts().then((res) => {
            setProducts(res.data);
            setLoading(() => false)
        })
            .catch((err) => console.log(err))
    }

    useEffect(() => {
        handleGetProducts();
    }, [])

    return (
        <>
            <Navbar />
            <h1 className="text-center mt-10 sm:text-3xl">Welcome to all Products </h1>
            <p style={{ textAlign: 'center' }}>{loading && '....Loading'}</p>
            <div className="border-2 border-red-500 gap-y-6  w-11/12 m-auto sm:grid grid-cols-1 md:grid grid-cols-3 lg:grid grid-cols-4">
                {products.length > 0 && products.map((e: AllProducts) => {
                    return <div key={e.id} className='gap-y-6'>
                        <Link href={`/Products/${e.id}`}><img src={e.image} alt={e.name} className='m-auto mt-10 sm:w-11/12'    />
                            <p className="text-center sm:text-base md:text-lg lg:text-base">{e.name}</p></Link>
                    </div>
                })}
            </div>
        </>
    )
}