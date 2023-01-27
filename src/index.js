import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import NoteContext from './context/NoteContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NoteContext>
      <App />
    </NoteContext>
  </React.StrictMode>
);
