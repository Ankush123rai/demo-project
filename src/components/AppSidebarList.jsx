import React, { useState } from 'react';
import nav_list from './nav_list'; 

const AppSidebarList = () => {
  const [openItems, setOpenItems] = useState([]);

  const handleToggle = (index) => {
    setOpenItems((prevOpenItems) =>
      prevOpenItems.includes(index)
        ? prevOpenItems.filter((itemIndex) => itemIndex !== index)
        : [...prevOpenItems, index]
    );
  };

  return (
    <div className="bg-gray-800 text-white p-4">
      {nav_list.map((item, index) => (
        <div key={index}>
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => handleToggle(index)}
          >
            <div className="flex items-center">
              <div className="mr-2">
                <i className={item.icons}></i>
              </div>
              <div>
                <span>{item.name}</span>
              </div>
            </div>
            <div>
              <i className={`fa fa-angle-${openItems.includes(index) ? 'up' : 'down'}`}></i>
            </div>
          </div>
          <div className={`mt-2 ${openItems.includes(index) ? 'block' : 'hidden'}`}>
            {item.items &&
              item.items.map((subItem, subIndex) => (
                <div key={subIndex} className="flex items-center ml-4">
                  <div className="mr-2">
                    <i className={subItem.icons}></i>
                  </div>
                  <div>
                    <span>{subItem.name}</span>
                  </div>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AppSidebarList;
