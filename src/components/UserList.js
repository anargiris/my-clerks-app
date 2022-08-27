import React from "react";
import UserCard from "./UserCard";

const UserList = ({ people, loading, cardColor }) => {
  return (
    <div
      data-testid="user-list"
      className={`${
        loading === true ? "opacity-50" : "opacity-100"
      } transition-all duration-200 ease-linear`}
    >
      <div className="flex flex-col md:flex-row gap-4 items-center mx-10">
        {people.map((p, i) => (
          <UserCard person={p} key={i} cardColor={cardColor} />
        ))}
      </div>
    </div>
  );
};

export default UserList;
