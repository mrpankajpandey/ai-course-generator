import { adminConfig } from "@/configs/AdminConfig";
import { UserButton, useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { CiPower } from "react-icons/ci";
import { HiOutlineHome, HiOutlineShieldCheck, HiOutlineSquare3Stack3D } from "react-icons/hi2";

const Header = () => {
  const { user } = useUser();
  const path = usePathname();
  const isAdmin = adminConfig.emails.includes(user?.primaryEmailAddress?.emailAddress);
  const menu = [
    {
      id: 1,
      name: "home",
      icon: <HiOutlineHome />,
      path: "/dashboard",
    },
    {
      id: 2,
      name: "Explore",
      icon: <HiOutlineSquare3Stack3D />,
      path: "/dashboard/explore",
    },
    {
      id: 3,
      name: "Upgrade",
      icon: <HiOutlineShieldCheck />,
      path: "/dashboard/upgrade",
    },
    ...(isAdmin
      ? [
          {
            id: 5,
            name: "Admin Users",
            icon: <HiOutlineShieldCheck />,
            path: "/dashboard/admin-users",
          },
        ]
      : []),

    {
      id: 4,
      name: "Logout",
      icon: <CiPower />,
      path: "/dashboard/logout",
    },
  ];
  return (
    <div className="flex justify-between items-center gap-2 p-5 shadow-sm">
      <div className="flex items-center gap-2">
        <Image src={"/logo.png"} width={44} height={44} />{" "}
        <span className="font-bold text-xl">Ai Course Generator</span>
      </div>
      <div className="md:hidden flex items-center border rounded-md">
      {menu.map((item) => (
          <Link href={item.path}>
            <li
              key={item.id}
              className={`flex text-xs items-center gap-1 text-gray-600 cursor-pointer p-3 hover:bg-gray-100 hover:text-black rounded-lg mb-3 ${
                item.path == path && "bg-gray-100 text-black"
              }`}
            >
              <div>{item.icon}</div>
              <h2>{item.name}</h2>
            </li>
          </Link>
        ))}

      </div>
      <UserButton />
    </div>
  );
};

export default Header;
