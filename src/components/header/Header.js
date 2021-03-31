import React from 'react'
import {FaBars} from 'react-icons/fa'
import {AiOutlineSearch} from 'react-icons/ai'
import {MdApps, MdNotifications} from 'react-icons/md'
import './_header.scss'

const Header = () => {
    return (
        <div className="header">
            <FaBars className="header__menu" size={26} />
            <img src="youtube-api-clone/ytlogo.png" alt="logo" className="header__logo"/>
            <form >
                <input type="text" placeholder="Search "/>
                <button type="submit">
                    <AiOutlineSearch size={22}/>
                </button>
            </form>
            <div className="header__icons">
                <MdNotifications size={28} />
                <MdApps size={28} />
                <img src="youtube-api-clone/avatar.png" alt="user" className="avatar"/>
            </div>
            
        </div>
    )
}

export default Header
