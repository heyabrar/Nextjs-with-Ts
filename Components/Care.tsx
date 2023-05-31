import { getCareProducts } from "@/api/api";
import React, { useEffect, useState } from "react";

const Care = () => {
  const [careProducts, setCareProducts] = useState<ICareProducts[]>([]);

  const handleGetCareProducts = async () => {
    let response = null;
    await getCareProducts().then((res) => {
      response = res.data;
    });
    return response;
  };

  const getData = () => {
    handleGetCareProducts().then((res: ICareProducts[] | null) => {
      console.log(res);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return <div>Care</div>;
};

export default Care;
