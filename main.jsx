import React from 'react'
import {createRoot} from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'


import './src/styles/main.css'
import { AppRouter } from './src/router/AppRouter';

const root = createRoot(document.getElementById('app'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
    <AppRouter/>
    </BrowserRouter>
  </React.StrictMode>
)