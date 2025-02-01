import React from "react";

const Header = ({ username }) => {
  const date = new Date().toLocaleDateString();
  const location = "New York, USA";

  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <div className="text-gray-700">{date}</div>
      <div className="text-xl font-bold text-blue-600">{location}</div>
      <div className="text-gray-700">{username || "Guest"}</div>
    </header>
  );
};

export default Header;
