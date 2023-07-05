import './style.css';
import ReactDOM from 'react-dom/client';
import App from './App';
import './config/firebase-config';
import { AuthContextProvider } from './context/AuthContext';

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(
  <AuthContextProvider>
    <App />
  </AuthContextProvider>
);
