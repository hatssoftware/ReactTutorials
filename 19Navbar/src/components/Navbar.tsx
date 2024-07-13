import "./Navbar.css";
import logo from "../images/netflix.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import links from "../data/data";
import { useState } from "react";

const Navbar = () => {
    const [show, setShow] = useState(false);

    const toggleShow = () => {
        setShow(!show);
    };

    return (
        <nav className="navbar">
            <div className="nav-header">
                <img src={logo} className="nav-logo" alt="Netflix" />
                {show ? (
                    <IoClose className="button" onClick={toggleShow} />
                ) : (
                    <GiHamburgerMenu className="button" onClick={toggleShow} />
                )}
            </div>
            <div className={`${show ? "nav-links show" : "nav-links hide"}`}>
                <ul>
                    {links.map((link) => {
                        return (
                            <li key={link.id}>
                                <a href={link.url}>{link.text}</a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
