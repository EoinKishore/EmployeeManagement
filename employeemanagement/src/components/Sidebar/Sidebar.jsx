import "./Sidebar.css";
import {LayoutGrid,UserRound,CalendarDays,MessageSquareText,} from "lucide-react";
import { NavLink } from 'react-router-dom';
const SideBar = () => {
  const menuItems = [
    { icon: <LayoutGrid className="sidebarIcon" />, title: "Dashboard" ,path:"/dashboard" },
    { icon: <UserRound className="sidebarIcon" />, title: "Employee",path:"/employee" },
    { icon: <CalendarDays className="sidebarIcon" />, title: "Calendar",path:"/calendar" },
    { icon: <MessageSquareText className="sidebarIcon" />, title: "Messages",path:"/message" },
  ];
  return (
    <div className="sidebarContainers">
  {menuItems.map((item, index) => (
    <NavLink
      to={item.path}
      key={index}
      className={({ isActive }) => 
        `sidebarContainer ${isActive ? 'active' : ''}`
      }
    >
      <div className="sidebarContent">
        <div className="sidebarLogo">{item.icon}</div>
        <div className="sidebarTitle">
          <p className="sidebarTitle">{item.title}</p>
        </div>
      </div>
    </NavLink>
  ))}
</div>
  );
};

export default SideBar;
