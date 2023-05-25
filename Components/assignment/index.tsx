/* eslint-disable @next/next/no-img-element */
import { GetUsers } from "@/api/api";
import Link from "next/link";
import React, { useEffect, useState } from "react";

type Props = {
  id: number;
  name: string;
  image: string;
  creationAt: number;
  updatedAt: number;
};

const AssignmentListing = () => {
  const [data, setData] = useState<Props[]>([
    { id: 0, name: "", image: "", creationAt: 0, updatedAt: 0 },
  ]);
  const handleGetUsers = () => {
    GetUsers().then((res) => {
      setData(res.data);
    });
  };

  useEffect(() => {
    handleGetUsers();
  }, []);

  return (
    <section>
      <div>From Assign Listing</div>
      {data.map((item) => {
        return (
          <Link
            href={`/assignment/${item.id}`}
            as={`/assignment/${item.id}`}
            key={item.id}
          >
            <div>
              <p>{item.name}</p>
              <img src={item.image} alt="img" />
            </div>
          </Link>
        );
      })}
    </section>
  );
};

export default AssignmentListing;
