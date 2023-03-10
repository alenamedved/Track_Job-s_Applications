import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthUserProvider } from './components/context/authUserContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthUserProvider>
      <App />
    </AuthUserProvider>
  </React.StrictMode>,
);
