import { createBrowserRouter, Navigate } from "react-router-dom";
import Inicio from '@/pages/Inicio';
import Servicios from '@/pages/Servicios';
import Nosotros from '@/pages/Nosotros';
import Portafolio from '@/pages/Portafolio';
import Contacto from '@/pages/Contacto';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Inicio />
    },
    {
        path: '/inicio',
        element: <Navigate to="/" />
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
        path: '/contacto',
        element: <Contacto />
    },
    {
        path: '/portafolio',
        element: <Portafolio />
    },
])
