import './style.css';
import ReactDOM from 'react-dom/client';
import App from './App';
import './config/firebase-config';

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(<App />);
