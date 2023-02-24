import React from "react";
import { createBrowserRouter } from 'react-router-dom'
import HomePage from "../pages/HomePage";
import CharactersPage from "../pages/CharactersPage";
import SeriesPage from "../pages/SeriesPage";
import ComicsPage from "../pages/ComicsPage";

const router = createBrowserRouter([
    {path: '/', element: <HomePage/>},
    {path: '/characters', element: <CharactersPage/>},
    {path: '/series', element: <SeriesPage/>},
    {path: '/comics', element: <ComicsPage/>},
    
])

export default router