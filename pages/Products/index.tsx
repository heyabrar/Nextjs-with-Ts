/* eslint-disable @next/next/no-img-element */
import Navbar from "@/Components/Navbar";
import { GetProducts } from "@/api/api";
import { useEffect, useState } from "react";
import styles from "@/styles/products.module.css";
import Link from "next/link";

interface AllProducts {
  id: number;
  name: string;
  image: string;
  creationAt: string;
  updatedAt: string;
}

export default function Products() {
  const [products, setProducts] = useState<AllProducts[] | []>([]);
  const [loading, setLoading] = useState(false);

  const handleGetProducts = () => {
    setLoading(() => !loading);
    GetProducts()
      .then((res) => {
        setProducts(res.data);
        setLoading(() => false);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    handleGetProducts();
  }, []);

  return (
    <section>
      <Navbar />
      <h1 className="text-center mt-10 sm:text-3xl">Welcome to all Products</h1>
      <p style={{ textAlign: "center" }}>{loading && "....Loading"}</p>
      <div className="gap-y-6 w-11/12 m-auto sm:grid sm:grid-cols-1 md:grid md:grid-cols-3 lg:grid lg:grid-cols-4">
        {products.length > 0 &&
          products.map((e: AllProducts) => {
            return (
              <div key={e.id} className="gap-y-6">
                <Link href={`/Products/${e.id}`}>
                  <div className="w-[90%] m-auto md:w-[50%]">
                    <img
                      src={e.image}
                      alt={e.name}
                      className="m-auto mt-10 w-full"
                    />
                  </div>
                  <p className="text-center sm:text-base md:text-lg lg:text-base">
                    {e.name}
                  </p>
                </Link>
              </div>
            );
          })}
      </div>
    </section>
  );
}
