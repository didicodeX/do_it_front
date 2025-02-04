import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/styles/style.css'
import { router } from './router/router';
import { RouterProvider } from 'react-router-dom';

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <RouterProvider router={router} ></RouterProvider>
    </StrictMode>,
  );
} else {
  console.error('Root element not found');
}
