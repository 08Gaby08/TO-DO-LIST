import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {css} from '@emotion/react'
import { GlobalStyles } from './Styles/global'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>
);