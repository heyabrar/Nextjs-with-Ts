import { Inter } from "next/font/google";
import Navbar from "@/Components/Navbar";
import Count from "@/Components/Count";
import Input from "@/Components/Input";
import AssignLayput from "@/Components/AssignLayput";
import Care from "@/Components/Care";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Navbar />
      {/* <div className="mt-20">
        <h1 className="text-center">Welcome to HomePage</h1>
      </div>
      <Count />
      <Input /> */}
      <AssignLayput />
      <Care />
    </>
  );
}
