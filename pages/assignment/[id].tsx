import { useRouter } from "next/router";
import React from "react";

type Props = {};

const SingleAssgnPage = () => {
  const router = useRouter();
  const {
    query: { id },
  } = router;
  return <div>SingleAssgnPage {id}</div>;
};

export default SingleAssgnPage;
