"use client";
import { Button } from "@/components/ui/button";
import { adminConfig } from "@/configs/AdminConfig";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import React, { use, useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const AdminUsers = () => {
  const { user } = useUser();
  const [users, setUsers] = useState([]);
  const [userCount, setUserCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  // const adminEmail = "mr.pankajpandey0038@gmail.com";

  const isAdmin = adminConfig.emails.includes(
    user?.primaryEmailAddress?.emailAddress
  );

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("/api/users");
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        const data = await response.json();
        setUsers(data);
        // console.log(data);
         setUserCount(data.length);
       
        
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);
  const dateOptions = {
    day: "2-digit",
    month: "long", // This will give you the full month name
    year: "numeric",
  };

  const handleAddAdmin = (email) => {
    if (adminConfig.email === email) {
      toast.error("Please upload an image file (jpg, jpeg, png).");
      // alert("hey")
      return;
    }
    // adminConfig.email= email;
    const updatedAdminConfig = { ...adminConfig, email };
    
  };
  if (!isAdmin) {
    router.push("/dashboard");
    return;
    //   <p>Access denied. Only admins can view this page.</p>;
  }

  return (
    <div className="p-4">
      AdminUsers
      <h1 className="text-xl font-bold mb-4">Registered Users</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <Table>
            <TableCaption>Total User : {userCount}</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Profile Image</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Created At</TableHead>
                <TableHead className="text-right">Last SignIn</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell className="font-medium">
                <Image
                      className="rounded-md"
                      src={user?.image_url}
                      width={44}
                      height={44}
                    />
                </TableCell>
                <TableCell>
                {user.first_name} {user.last_name}
                </TableCell>
                <TableCell>
                {" "}
                    <a
                      href={`mailto:${user.email_addresses[0]?.email_address}`}
                    >
                      {" "}
                      {user.email_addresses[0]?.email_address}
                    </a>{" "}
                </TableCell>
                <TableCell>
                {new Date(user.created_at).toLocaleDateString(
                      "en-GB",
                      dateOptions
                    )}
                </TableCell>
                <TableCell>
                {new Date(user?.last_sign_in_at).toLocaleDateString(
                      "en-GB",
                      dateOptions
                    )}
                </TableCell>
                <TableCell className="text-right">
                {adminConfig.emails.includes(
                      user.email_addresses[0]?.email_address
                    ) ? (
                      <Button>Admin</Button>
                    ) : (
                      <Button
                        onClick={() =>
                          handleAddAdmin(user.email_addresses[0]?.email_address)
                        }
                      >
                        Promote as Admin
                      </Button>
                    )}
                </TableCell>
              </TableRow>
              ))}
            </TableBody>
          </Table>
        </>
      )}
    </div>
  );
};

export default AdminUsers;
