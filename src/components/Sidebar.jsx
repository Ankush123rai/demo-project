import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './nav_list.jsx';
import AppSidebarList from './AppSidebarList.jsx';

const Sidebar = () => {
  return (
    <aside className="border border-x-2 text-white p-4 w-72 bg-gray-700">
      <nav>
        <ul>
          <AppSidebarList items={Navigation} />
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
