import React from 'react';
import ReactDOM from 'react-dom/client';
import { AdminFlagProvider } from "./components/providers/AdminFlagProvider";
import { App } from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AdminFlagProvider>
      <App />
    </AdminFlagProvider>
  </React.StrictMode>
);
