import { adminConfig } from "@/configs/AdminConfig";
import { useClerk, UserButton, useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { CiPower } from "react-icons/ci";
import {
  HiOutlineHome,
  HiOutlineShieldCheck,
  HiOutlineSquare3Stack3D,
} from "react-icons/hi2";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const { user } = useUser();
  const path = usePathname();
  const { signOut } = useClerk();
  const router = useRouter();
  const isAdmin = adminConfig.emails.includes(
    user?.primaryEmailAddress?.emailAddress
  );
  const handleLogout = async () => {
    await signOut({ redirectTo: '/' }); // Redirect after logout
  };
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
      isLogout: true,
    },
  ];
  return (
    <div className="flex justify-between items-center gap-2 p-5 shadow-sm">
      <div className="flex items-center gap-2">
           <Link className="flex items-center gap-2 cursor-pointer" href={'/'}>
        <Image src={"/logo.png"} width={44} height={44} />{" "}
        <span className="font-bold text-xl">AI Course Generator</span>
           </Link>

      </div>
      <div className="md:hidden">
            <DropdownMenu className=''>
              <DropdownMenuTrigger className="p-4">Menu</DropdownMenuTrigger>
              <DropdownMenuContent>
        {menu.map((item) => (
           item.isLogout ? (
            <li
            key={item.id}
            className={`flex items-center gap-2 text-gray-600 cursor-pointer p-3 hover:bg-gray-100 hover:text-black rounded-lg mb-3`}
            onClick={handleLogout}
          >
            <div>{item.icon}</div>
            <h2>{item.name}</h2>
          </li>
        ) : (

          <Link href={item.path}>
                <DropdownMenuItem>
                  <li
                    key={item.id}
                    className={`flex text-xs items-center gap-1 text-gray-600 cursor-pointer p-3 hover:bg-gray-100 hover:text-black rounded-lg mb-3 ${
                      item.path == path && "bg-gray-100 text-black"
                    }`}
                  >
                    <div>{item.icon}</div>
                    <h2>{item.name}</h2>
                  </li>
                </DropdownMenuItem>
          </Link>
        )
        ))}
        </DropdownMenuContent>
      </DropdownMenu>
      </div>
      <UserButton />
    </div>
  );
};

export default Header;
