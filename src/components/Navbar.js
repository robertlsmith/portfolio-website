import React, { Component } from 'react'
import { Link } from 'gatsby'
import '../components/navbar.css'
import Logo from '../images/logo.png'
import { MenuItems } from './MenuItems'

class Navbar extends Component {
    state = { isClicked: false }
    
    handleClick = (e) => {
        e.preventDefault();
        this.setState({ isClicked: !this.state.isClicked });
    }

    render() {
        return (
            <div className="navbar">
                <div className="nav-logo">
                    <Link to="/">
                        <img src={Logo} alt="Logo" id="logo"/>
                    </Link>
                </div>

                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.isClicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.isClicked ? 'nav-menu active' : 'nav-menu'}>
                    <div className="nav-links">
                        {MenuItems.map((item) => {
                            return (
                                <Link id="home" className={item.cName} href={item.url}>
                                    {item.title}
                                </Link>
                            )
                        })}
                    </div>
                </ul>
            </div>
        )
    }
}

export default Navbar