import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Context from './context/NoteContext';
import { AuthProvider } from './context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Context>
      <AuthProvider>
        <App />
      </AuthProvider>
    </Context>
  </React.StrictMode>
);
