import Dashboard from "./Components/Home/Dashboard/Dashboard";
import EmployeePage from "./Components/Home/Employee/employee";
import Login from "./Components/Home/Login/Login";
import Signup from "./Components/Home/Signup/Signup";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SupplierPage from "./Components/Home/Supplier/Supplier";
import InventoryPage from "./Components/Home/Inventory/Inventory";
import MenClothPage from "./Components/Home/Men/Men";
import WomenClothPage from "./Components/Home/Women/Women";
import CustomerPage from "./Components/Home/Customer/Customer";
import SellHistoryPage from "./Components/Home/Sell/Sell";
import AdminDashboard from "./Components/Home/Admin/Admin";
import AdminDashboardGraphical from "./Components/Home/Summary/AdminDashboardGraphical";

function App() {
  return (
    <Router basename='/'>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path = '/dashboard' element={<Dashboard/>}/>
        <Route path = '/employeepage' element={<EmployeePage/>}/>
        <Route path = '/Supplierpage' element={<SupplierPage/>}/>
        <Route path = '/mencloth' element={<MenClothPage/>}/>
        <Route path = '/womencloth' element={<WomenClothPage/>}/>
        <Route path = '/customer' element={<CustomerPage/>}/>
        <Route path = '/sellhistory' element={<SellHistoryPage/>}/>
        <Route path = '/admin' element={<AdminDashboard/>}/>
        <Route path = '/admingraphical' element={<AdminDashboardGraphical/>}/>
      </Routes>
      
    </Router>
  );
}

export default App;
