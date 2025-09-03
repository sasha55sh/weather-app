"use client";
import React, { FC, useState, useEffect } from "react";
import { Button } from "flowbite-react";
import { useRouter } from "next/navigation";
import { SavedUser } from "@/config/types";
import UsersList from "./users-list";

const SavedUsers: FC = () => {
  const [users, setUsers] = useState<SavedUser[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const savedData = localStorage.getItem("savedData");
    if (savedData) {
      setUsers(JSON.parse(savedData));
    } else {
      setUsers([]);
    }
    setIsLoading(false);
  }, []);

  return (
    <>
      <div className="container flex flex-col space-y-5 sm:space-y-0 sm:flex-row py-7.5 items-center justify-between">
        <h1 className="text-2.5xl text-burgundy font-bold">Saved cards</h1>
        <Button
          onClick={() => router.push("/users")}
          className="bg-slateBlue text-lg text-offWhite hover:bg-slateBlue/50 hover:text-slateBlue w-[300px] focus:ring-0 focus:border-transparent"
          size="lg"
        >
          Back to users
        </Button>
      </div>
      {users.length === 0 ? (
        <div className="flex items-center justify-center h-[60vh] rounded-xl shadow-xl my-5 py-7.5">
          <p className="text-redBrown text-xl font-semibold">No saved data</p>
        </div>
      ) : (
        <UsersList isLoading={isLoading} withSaveBtn={false} users={users} />
      )}
    </>
  );
};

export default SavedUsers;
