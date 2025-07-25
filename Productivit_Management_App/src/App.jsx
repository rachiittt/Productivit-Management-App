import React from 'react';
import { BrowserRouter as Rachit,Route,Routes } from 'react-router-dom'; //Routes: Wraps all your routes. Route: Defines individual page paths and components to render.
import Navigation from './components/Navigation.jsx';
import HomePage from './components/HomePage.jsx';
import AboutPage from './components/AboutPage.jsx';
import ServicesPage from './components/ServicesPage';
import BlogPage from './components/BlogPage.jsx';
import LoginSignupPage from './components/LoginSignupPage.jsx';
import Footer from './components/Footer.jsx'
import TodaysTasks from './components/TodaysTasks';
import './App.css';


function App() {
    return(
    <Rachit>
        
        
        <Routes>
            <Route path='/home' element={<HomePage />}></Route>
            <Route path='/about' element={<AboutPage />}></Route>
            <Route path='/services' element={<ServicesPage />}></Route>
            <Route path='/blog' element={<BlogPage />}></Route>
            <Route path='/' element={<LoginSignupPage />}></Route>
            <Route path='/Your-Task' element={<TodaysTasks />}></Route>
        </Routes>
     
    </Rachit>
    )
}

export default App
