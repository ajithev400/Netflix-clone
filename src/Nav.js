import React, { useState, useEffect } from 'react'

import "./Nav.css"

function Header2() {
    const [header, setHeader] = useState("header")

    const listenScrollEvent = (event) => {
        if (window.scrollY < 73) {
            return setHeader("header")
        } else if (window.scrollY > 70) {
            return setHeader("header2")
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent);

        return () =>
            window.removeEventListener('scroll', listenScrollEvent);
    }, []);

    return (
        <header className={header}>
            <div className="nav_contents">
                <img className="nav_logo"
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png' alt="#"></img>

                <img className="nav_avatar"
                    src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'alt="#"></img>
            </div>

        </header>
    );
}

export default Header2;
