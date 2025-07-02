import { createBrowserRouter, Navigate } from "react-router-dom";
import Inicio from '@/pages/Inicio';
import Servicios from '@/pages/Servicios';
import Nosotros from '@/pages/Nosotros';
import Portafolio from '@/pages/Portafolio';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Navigate to="/inicio" />,
    },
    {
        path: '/inicio',
        element: <Inicio />
    },
    {
        path: '/servicios',
        element: <Servicios />
    },
    {
        path: '/nosotros',
        element: <Nosotros />
    },
    {
        path: '/portafolio',
        element: <Portafolio />
    },
])
