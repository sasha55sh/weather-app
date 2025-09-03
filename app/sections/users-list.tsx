"use client";
import React, { useContext, useState } from "react";
import { Pagination } from "flowbite-react";
import { User } from "@/config/types";
import { CardsContext } from "./users-main";
import CardSceleton from "@/components/card-sceleton";
import UserCard from "@/components/user-card";

const UsersList = ({
  isLoading,
  withSaveBtn,
  users,
}: {
  isLoading: boolean;
  withSaveBtn: boolean;
  users?: User[];
}) => {
  const contextUsers = useContext(CardsContext);
  const allCards = users ?? contextUsers;

  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 6;

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = allCards.slice(indexOfFirstCard, indexOfLastCard);

  const totalPages = Math.ceil(allCards.length / cardsPerPage);

  return (
    <section className="container my-[30px]">
      <div className="grid gap-5 grid-cols-1 justify-center place-items-center sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {isLoading
          ? Array.from({ length: 6 }, (_, index) => (
              <CardSceleton key={index} />
            ))
          : currentCards.map((card: User, index) => (
              <UserCard
                key={index}
                name={card.name}
                email={card.email}
                gender={card.gender}
                picture={card.picture}
                location={card.location}
                withSaveBtn={withSaveBtn}
              />
            ))}
      </div>

      {!isLoading && totalPages > 1 && (
        <div className="flex justify-center mt-6">
          <Pagination
            layout="navigation"
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={(page) => setCurrentPage(page)}
            showIcons
          />
        </div>
      )}
    </section>
  );
};

export default UsersList;
