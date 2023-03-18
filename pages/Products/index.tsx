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
            <h1>Welcome to all Products </h1>
            <p style={{ textAlign: 'center' }}>{loading && '....Loading'}</p>
            <div className={styles.Products}>
                {products.length > 0 && products.map((e: AllProducts) => {
                    return <div key={e.id} className={styles.Card}>
                        <Link href={`/Products/${e.id}`}><img src={e.image} alt={e.name} className={styles.Cardimg}/>
                            <p>{e.name}</p></Link>
                    </div>
                })}
            </div>
        </>
    )
}