import React from 'react'
import "../Navbar/Nav.scss"
import downArrow from "../../Images/Vector.png"
import search from "../../Images/Search Icon.png"
function Nav() {
    return (
        <>
            <div className="navbar">
                <div className="left">
                    <div className="logo">
                        EDYODA
                    </div>

                    <div className="category">
                        <ul>
                            <li>
                                <span>
                                    Course
                                </span>
                                <img src={downArrow} alt="" srcset="" />
                            </li>
                            <li>
                                <span>

                                    Programs
                                </span>
                                <img src={downArrow} alt="" srcset="" />
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="right">
                    <div className="searchIcon">
                        <img src={search} alt="" srcset="" />
                    </div>
                    <div className="login">
                        Login
                    </div>
                    <div className="btn-joinNow">
                        <button>
                            JOIN NOW
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Nav