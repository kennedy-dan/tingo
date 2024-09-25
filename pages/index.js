import Image from "next/image";
import { Inter } from "next/font/google";
import HomeLayout from "@/components/Layout/HomeLayout";
import HomePage from "@/components/HomeModule.jsx/Home";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <HomeLayout>
      <HomePage />
    </HomeLayout>
  );
}
