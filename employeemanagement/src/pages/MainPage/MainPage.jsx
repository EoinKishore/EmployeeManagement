import './MainPage.css';
import Topbar from '../../components/Topbar/Topbar';
import SideBar from '../../components/Sidebar/SideBar';
import { Outlet } from 'react-router-dom';
const MainPage = () => {
  return (
    <div className="app-container">
      <div className="topbar-container">
        <Topbar />
      </div>
      <div className="main-content">
        <div className="sidebar-container">
          <SideBar />
        </div>
        <div className="content-container">
          <Outlet /> 
        </div>
      </div>
    </div>
  )
}

export default MainPage