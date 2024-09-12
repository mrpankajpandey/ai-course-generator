"use client";
import { Button } from "@/components/ui/button";
import { adminConfig } from "@/configs/AdminConfig";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import React, { use, useEffect, useState } from "react";

const AdminUsers = () => {
  const { user } = useUser();
  const [users, setUsers] = useState([]);
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
        console.log(data);
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
    console.log(adminConfig);
    console.log(updatedAdminConfig);
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
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Profile Image</th>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Email</th>
              <th className="py-2 px-4 border-b">Created At</th>
              <th className="py-2 px-4 border-b">Last SignIn </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td className="py-2 px-4 border-b ">
                  <Image
                    className="rounded-md"
                    src={user?.image_url}
                    width={44}
                    height={44}
                  />
                </td>
                <td className="py-2 px-4 border-b">
                  {user.first_name} {user.last_name}
                </td>
                {/* <td className="py-2 px-4 border-b">{user.id}</td> */}
                <td className="py-2 px-4 border-b">
                  {" "}
                  <a href={`mailto:${user.email_addresses[0]?.email_address}`}>
                    {" "}
                    {user.email_addresses[0]?.email_address}
                  </a>{" "}
                </td>
                <td className="py-2 px-4 border-b">
                  {new Date(user.created_at).toLocaleDateString(
                    "en-GB",
                    dateOptions
                  )}
                </td>
                <td className="py-2 px-4 border-b">
                  {new Date(user?.last_sign_in_at).toLocaleDateString(
                    "en-GB",
                    dateOptions
                  )}
                </td>
                <td className="py-2 px-4 border-b">
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
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdminUsers;
