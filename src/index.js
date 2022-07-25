import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from './context/ThemeContext';
import { FormDataProvider } from './context/FormDataContext';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FormDataProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </FormDataProvider>
  </React.StrictMode>
);
