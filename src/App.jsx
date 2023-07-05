import Experience from './components/Experience';
import ItemInformation from './components/ItemInformation';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import CartItem from './components/CartItem';
import Login from './components/Login';
import AdminPanel from './components/AdminPanel';
import { Navigate } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';
import { useContext } from 'react';

export default function App() {
  const { currentUser } = useContext(AuthContext);

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  };

  console.log(currentUser);

  return (
    <BrowserRouter>
      <div style={{ display: 'flex', alignItems: 'center', padding: '30px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/items" element={<Items />} /> */}
          <Route path="/item-information" element={<CartItem />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/admin"
            element={
              <RequireAuth>
                <AdminPanel />
              </RequireAuth>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
