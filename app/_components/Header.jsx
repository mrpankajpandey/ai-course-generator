import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between p-5 shadow-sm items-center">
      <div className="flex items-center gap-2">

      <Image src={'/logo.png'} width={44} height={44} /> <span className="font-bold text-xl">Ai Course Generator</span>
      </div>
      <Link href={'/dashboard'}>
      <Button> Get started</Button>
      </Link>
    </div>
  );
};

export default Header;
