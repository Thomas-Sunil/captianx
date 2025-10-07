import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'; 
import App from './App';
import CompanyPage from './pages/CompanyPage';
import LandingPage from './pages/LandingPage';
import CommunicationPage from './pages/CommunicationPage';
import NewsInsightsPage from './pages/NewsInsightsPage';
import PartnersPage from './pages/PartnersPage';
import ProductsPage from './pages/ProductsPage';
import CareersPage from './pages/CareersPage';
// Define your routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // App component acts as a layout wrapper (header, footer, etc.)
    children: [
      {
        index: true, // This makes LandingPage the default component for "/"
        element: <LandingPage />,
      },
      {
        path: "products",
        element: <ProductsPage />,
      },
      {
        path: "company", // New route for Company
        element: <CompanyPage />,
      },
      {
        path: "partners", // Changed from company-partners for shorter URL
        element: <PartnersPage />,
      },
      {
        path: "news-insights",
        element: <NewsInsightsPage />,
      },
      {
        path: "careers",
        element: <CareersPage />,
      },
      {
        path: "contact", // Using 'contact' as a common slug for communication page
        element: <CommunicationPage />,
      },
      // You could add a 404 Not Found page here as well
      // {
      //   path: "*",
      //   element: <div>404 Not Found</div>,
      // },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);