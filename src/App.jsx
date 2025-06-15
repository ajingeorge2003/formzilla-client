import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Questionnaire from './pages/Questionnaire';
import AdminDashboard from './pages/AdminDashboard';
import AddQuestion from './pages/AddQuestion';

export default function App() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-100">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/user/questionnaire" element={<Questionnaire />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/add-question" element={<AddQuestion />} />
        </Routes>
      </Router>
    </div>
  );
}

