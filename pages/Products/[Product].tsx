import { GetSingleProduct } from "@/Fetch/Fetch";
import { useRouter } from "next/router"
import { useEffect, useState } from "react";

interface SingleProduct {
    id: number,
    name: string,
    image: string,
    creationAt: string,
    updatedAt: string
}

export default function SingleProduct ( ){
    const [product,setProduct] = useState<SingleProduct | { }> ()
    const Router = useRouter( );
    const ProductNumber  = Router.query.Product;
 
    const handleSingleProduct = ( ) =>{
        GetSingleProduct(ProductNumber).then((res)=>{
            setProduct(res.data)
        })
        .catch((err)=> console.log(err))
    }

    useEffect(( ) =>{
        handleSingleProduct( );
    },[ ])

    return (
        <>
        <div>
            <img src={product?.image}/>
            <p>{product?.name}</p>
        </div>
        </>
    )
}