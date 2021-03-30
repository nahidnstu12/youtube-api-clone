import React from 'react'
import Header from './components/header/Header'
import HomeScreen from './components/screens/HomeScreen'
import Sidebar from './components/sidebar/Sidebar'
import './_app.scss'

const YoutubeApp = () => {
    return (
        <>
        <Header />
        <div className="app__container">
       
            <Sidebar />
            <div className="app__main">
            <HomeScreen />
            </div>
        </div>
        </>
    )
}

export default YoutubeApp
