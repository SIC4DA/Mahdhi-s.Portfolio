// import React from 'react'
import { RouterProvider, createBrowserRouter } from "react-router-dom/dist";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import { en } from "../assets/locales/en.js";
import { de } from "../assets/locales/de.js";
import { Toaster } from "react-hot-toast";
import { globalToasterOptions } from "../utils/customToaster";
import Blogs from "../pages/Blogs.jsx";
import About from "../pages/About.jsx";
import Contact from "../pages/Contact.jsx";

const routers = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/blogs", element: <Blogs /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
];

i18next.init({
  resources: { en, de },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

const router = createBrowserRouter(routers);

export default function Root() {
  return (
    <I18nextProvider i18n={i18next}>
      <Toaster position="bottom-right" toastOptions={globalToasterOptions} />
      <RouterProvider router={router} />
    </I18nextProvider>
  );
}
