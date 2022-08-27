import React, { useEffect, useState } from "react";

const UserCard = ({ person, cardColor }) => {
  return (
    <div
      data-testid="user-card"
      className={`w-80 md:w-auto md:flex-1 border border-gray-500 ${cardColor} text-lg flex flex-col p-4 shadow-md rounded-sm`}
    >
      <img
        className="flex justify-center mb-4 w-24 h-24 mx-auto rounded-full"
        src={person.picture.large}
        alt="A Picture of a person"
      />

      <div className="flex flex-col text-sm md:items-center text-gray-900">
        <div>
          <p className="font-semibold mb-2 text-xl md:text-center text-black">
            {person.name.first} {person.name.last}
          </p>
          <p>{person.phone}</p>
          <p>{person.email}</p>
          <p className="truncate">
            {person.location.city}, {person.location.state}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
