import React from "react";
import { createBrowserRouter } from 'react-router-dom'
import HomePage from "../pages/HomePage";
import CharactersPage from "../pages/CharactersPage";
import SeriesPage from "../pages/SeriesPage";
import ComicsPage from "../pages/ComicsPage";
import SeriesProfilePage from "../pages/SeriesProfilePage";
import CharactersProfilePage from "../pages/CharactersProfilePage";
import ComicsProfilePage from "../pages/ComicsProfilePage";

const router = createBrowserRouter([
    {path: '/', element: <HomePage/>},
    {path: '/characters', element: <CharactersPage/>},
    {path: '/series', element: <SeriesPage/>},
    {path: '/comics', element: <ComicsPage/>},
    {path: '/characters/:id', element: <CharactersProfilePage/>},
    {path: '/series/:id', element: <SeriesProfilePage/>},
    {path: '/comics/:id', element: <ComicsProfilePage/>},


    
])

export default router