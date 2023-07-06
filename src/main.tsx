import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import RouterView from '@/router/index';
import React from 'react';
import './style.less'

const rootElement: Element = document.getElementById('root') as Element;
const root = createRoot(rootElement);
root.render(
  <BrowserRouter>
    <RouterView />
  </BrowserRouter>
);
