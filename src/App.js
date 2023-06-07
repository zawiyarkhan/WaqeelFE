import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import LawyerForm from './pages/LawyerForm';
import ClientForm from './pages/ClientForm';
import ClientsHome from './pages/LawyerLanding';
import Dashboard from './pages/dashboard';
import DashboardHome from './pages/dashboard/all_user';
import { ClientDashboard } from './pages/dashboard/client_dashboard';
import { LawyerDashboard } from './pages/dashboard/lawyer_dashboard';
import { AdminDashboard } from './pages/dashboard/admin_dashboard';

function App() {
  return (
      <Router>
        <Routes>
          <Route path='/register' element={<SignUp/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/updateLawyer' element={<LawyerForm/>}/>
          <Route path='/dashboard' element={<DashboardHome />}/>
          <Route path='/updateClient' element={<ClientForm/>}/>
          <Route path='/Home' element={<ClientsHome />}/>
          <Route path='/clientDashboard' element={<ClientDashboard />}/>
          <Route path='/lawyerDashboard' element={<LawyerDashboard />}/>
          <Route path='/adminDashboard' element={<AdminDashboard />}/>
        </Routes>
      </Router>
  );
}

export default App;
