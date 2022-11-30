import React, { useState } from "react"
import '../Css/navbar.css';
import { MdOutlineTravelExplore } from 'react-icons/md'
import { AiFillCloseCircle } from 'react-icons/ai'
import { TbGridDots } from 'react-icons/tb'
import Nav from 'react-bootstrap/Nav';


const NavbarComponent = () => {
    const [active, setActive] = useState('navBar')
    //function to toggle navBar
    const showNav = () => {
        setActive('navBar activeNavbar')
    }

    //function to remove navBar
    const removeNavbar = () => {
        setActive('navBar')

    }

    return (
        <section className="navBarSection">
            <header className="header flex">
                <div className="logoDiv">
                    <Nav.Link href="Navbar" className="logo flex">
                        <h1> <MdOutlineTravelExplore className="icon" /> VUMBORA </h1>
                    </Nav.Link>
                </div>

                <div className={active}>
                     <Nav className="navLists flex">
                        <Nav.Link className="navLink" href="/">Home</Nav.Link>
                        <Nav.Link className="navLink" href="/Destino">Destino</Nav.Link>
                        <Nav.Link className="navLink" href="/Promocoes">Promoções</Nav.Link>
                        <Nav.Link className="navLink" href="/add-usuario/:id">Cadastre-se</Nav.Link>
                    </Nav>
                    <div onClick={removeNavbar} className="closeNavbar"> <AiFillCloseCircle className="icon" /> </div>
                </div>

                <div onClick={showNav} className="toggleNavbar"><TbGridDots className="icon" /></div>
            </header>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </section>
    )
}

export default NavbarComponent