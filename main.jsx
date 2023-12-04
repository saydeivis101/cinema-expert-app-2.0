import React from 'react'
import {createRoot} from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import { AppRouter } from './src/router/AppRouter';

import './src/styles/main.css'

const root = createRoot(document.getElementById('app'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
        <AppRouter/>
    </BrowserRouter>
  </React.StrictMode>
)