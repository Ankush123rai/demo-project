import React, { useState } from "react";
import { FaRegCreditCard } from "react-icons/fa6";

function Filter() {
  const [showFilter, setShowFilter] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleFilter = () => {
    setShowFilter(!showFilter);
  };

  const toggleItem = (item) => {
    if (selectedItem === item) {
      setSelectedItem(null);
    } else {
      setSelectedItem(item);
    }
  };

  return (
    <div className="border border-1 p-1 w-[400px]">
      <div
        className="flex justify-between items-center cursor-pointer p-1"
        onClick={toggleFilter}
      >
        <span className="flex gap-1 items-center">
          <FaRegCreditCard /> Credit or Debit Card
        </span>
        {showFilter ? "up icon" : "down icon"}
      </div>

      {showFilter && (
        <>
          <div
            onClick={() => toggleItem("Option 1")}
            className={`flex justify-between items-center cursor-pointer p-1 ${
              selectedItem === "Option 1" ? "bg-gray-300" : ""
            }`}
          >
            <p className="flex gap-1 p-1 items-center">
              <FaRegCreditCard /> Option 1
            </p>
            {selectedItem === "Option 1" ? "✔" : ""}
          </div>
          <div
            onClick={() => toggleItem("Option 2")}
            className={`flex justify-between items-center cursor-pointer p-1 ${
              selectedItem === "Option 2" ? "bg-gray-300" : ""
            }`}
          >
            <p className="flex gap-1 p-1 items-center">
              <FaRegCreditCard /> Option 2
            </p>
            {selectedItem === "Option 2" ? "✔" : ""}
          </div>
          <div
            onClick={() => toggleItem("Option 3")}
            className={`flex justify-between items-center cursor-pointer p-1 ${
              selectedItem === "Option 3" ? "bg-gray-300" : ""
            }`}
          >
            <p className="flex gap-1 p-1 items-center">
              <FaRegCreditCard /> Option 3
            </p>
            {selectedItem === "Option 3" ? "✔" : ""}
          </div>
        </>
      )}
    </div>
  );
}

export default Filter;
