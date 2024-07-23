// src/App.js
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Recipe from './pages/Recipe';
import CreateRecipe from './pages/CreateRecipe';
import RecipeDetail from './components/RecipeDetail';
import Login from './pages/login';



const App = () => {

    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/recipe/:id" element={<RecipeDetail/>} />
                <Route path="/create" element={<CreateRecipe/>} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </Router>
    );
};

export default App;
