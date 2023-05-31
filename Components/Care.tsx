import { getCareProducts } from "@/api/api";
import React, { useEffect } from "react";

type Props = {};

const Care = () => {
  const handleGetCareProducts = () => {
    getCareProducts().then((res) => {
      console.log(res.data);
    });
  };

  useEffect(() => {
    handleGetCareProducts();
  }, []);
  return <div>Care</div>;
};

export default Care;
