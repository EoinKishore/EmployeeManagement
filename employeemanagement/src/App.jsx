import { Calendar } from 'lucide-react'
import './App.css'
import AddEmployeeBtn from './components/AddEmployee/AddEmployeeBtn'
import EmployeeTable from './components/EmployeeTable/EmployeeTable'
import SearchBar from './components/SearchBar/SearchBar'
import SideBar from './components/Sidebar/SideBar'
import Topbar from './components/Topbar/Topbar'
import DashboardPage from './pages/DashboardPage/DashboardPage'
import EmployeeContentPage from './pages/EmployeeContentPage/EmployeeContentPage'
import MainPage from './pages/MainPage/MainPage'
import { Routes, Route } from 'react-router-dom';
import CalendarPage from './pages/CalendarPage/CalendarPage'
import MessagePage from './pages/MessagePage/MessagePage'
import AddOrEditEmployeePage from './pages/AddOrEditEmployeePage/AddOrEditEmployeePage'
import InputElement from './components/InputElement/InputElement'
import SelectElement from './components/SelectElement/SelectElement'
import CustomBtn from './components/CustomBtn/CustomBtn'
import ViewEmployeePage from './pages/ViewEmployeePage/ViewEmployeePage'
import DeletePopup from './components/DeletePopup/DeletePopup'
function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />}>
        <Route index element={<DashboardPage />} />
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="employee" element={<EmployeeContentPage />} />
        <Route path="calendar" element={<CalendarPage />} />
        <Route path="message" element={<MessagePage />} />
        <Route path="addEmployee" element={<AddOrEditEmployeePage/>}/>
        <Route path="viewEmployee" element={<ViewEmployeePage/>}/>
      </Route>
    </Routes>
    // <AddOrEditEmployeePage/>
    // // <InputElement/>
    // // <SelectElement/>
    // // <CustomBtn/>
    // <DeletePopup/>
  )
}

export default App
