import React from "react";

const UserCard = ({ person }) => {
  console.log(person);
  return (
    <div className="w-full border border-gray-300 bg-gray-50 text-lg flex flex-col p-4 flex-grow shadow-sm">
      <img
        className="flex justify-center mb-4 w-20 h-20 mx-auto rounded-full"
        src={person.picture.medium}
        alt="A Picture of a person"
      />
      <div className="flex flex-col">
        <div>
          <p className="font-semibold">
            {person.name.first} {person.name.last}
          </p>
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
