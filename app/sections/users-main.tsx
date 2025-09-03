"use client";
import React, { FC, useState, useEffect, createContext } from "react";
import { useRouter } from "next/navigation";
import { SavedUser } from "@/config/types";
import UsersList from "./users-list";
import { Button } from "flowbite-react";
import { getUsers } from "@/service/user-service";

export const CardsContext = createContext<SavedUser[]>([]);

const UsersMain: FC = () => {
  const router = useRouter();
  const [users, setUsers] = useState<SavedUser[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      setIsLoading(true);
      const data = await getUsers();
      if (data.length) {
        setUsers(data);
        console.log(data);
      } else {
        setUsers([]);
      }
      setIsLoading(false);
    };
    fetchUsers();
  }, []);

  return (
    <CardsContext.Provider value={users}>
      <div className="container flex flex-col space-y-5 sm:space-y-0 sm:flex-row py-[20px] items-center justify-between">
        <h1 className="text-2.5xl text-darkBlue font-bold">Users cards</h1>
        <Button
          onClick={() => router.push("/saved")}
          className="bg-slateBlue text-lg text-offWhite hover:bg-slateBlue/50 hover:text-slateBlue w-[300px] focus:ring-0 focus:border-transparent"
          size="lg"
        >
          View saved cards
        </Button>
      </div>
      <UsersList isLoading={isLoading} withSaveBtn />
    </CardsContext.Provider>
  );
};

export default UsersMain;
