import React from "react";

const UserCard = ({ person, cardColor }) => {
  return (
    <div
      data-testid="user-card"
      className={`w-80 md:w-auto md:flex-1 border border-gray-500 ${cardColor} text-lg flex flex-col p-4 shadow-md rounded-sm`}
    >
      {person.picture.large ? (
        <img
          className="flex justify-center mb-4 w-24 h-24 mx-auto rounded-full"
          src={person.picture.large}
          alt="A Picture of a person"
        />
      ) : (
        <img
          className="flex justify-center mb-4 w-24 h-24 mx-auto rounded-full"
          src="/NullUserImage.png"
          alt="A Picture of a person"
        />
      )}

      <div className="flex flex-col text-sm md:items-center text-gray-900">
        <div className="flex flex-col gap-1">
          <p className="font-semibold mb-2 text-xl md:text-center text-black">
            {person.name.first} {person.name.last}
          </p>
          <p className="flex items-center gap-2">
            <img className="w-5 h-5" src="/icons/phone.svg" />
            {person.phone}
          </p>
          <p className="flex items-center gap-2">
            <img className="w-5 h-5" src="/icons/mail.svg" />
            {person.email}
          </p>
          <p className="truncate flex items-center gap-2">
            <img className="w-5 h-5" src="/icons/location.svg" />
            <>
              {person.location.city}, {person.location.state}
            </>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
