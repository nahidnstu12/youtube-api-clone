import React, { useState } from 'react'
import Header from './components/header/Header'
import HomeScreen from './components/screens/HomeScreen'
import { LoginScreen } from './components/screens/LoginScreen'
import Sidebar from './components/sidebar/Sidebar'
import './_app.scss'

const YoutubeApp = () => {
    const [sidebar,handleSidebar] = useState(false)
    const handleToggle = () => handleSidebar(val => !val)
    return (
        <>
        {/* <Header handleToggle={handleToggle}/>
        <div className="app__container">
       
            <Sidebar sidebar={sidebar} handleToggle={handleToggle}/>
            <div className="app__main">
            <HomeScreen />
            </div>
        </div> */}
        <LoginScreen />
        </>
    )
}

export default YoutubeApp
