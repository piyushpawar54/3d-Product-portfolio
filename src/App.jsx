import Experience from './components/Experience';
import ItemInformation from './components/ItemInformation';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import CartItem from './components/CartItem';
import Login from './components/login/Login';
import AdminPanel from './components/AdminPanel';
import { Navigate } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';
import { useContext } from 'react';
import New from './components/new/New';
import { productInputs } from './components/FormSource';

export default function App() {
  const { currentUser } = useContext(AuthContext);

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  };

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
          <Route
            path="/admin/new"
            element={
              <RequireAuth>
                <New inputs={productInputs} title="Add New Product" />
              </RequireAuth>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
