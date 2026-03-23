import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logoo.png";

const NAV_LINKS = [
    ["Home", "/"],
    ["Courses", "/courses"],
    ["About Us", "/about"],
    ["Contact", "/contact"],
];

export default function Header({ btnText = "Enroll Now", onBtnClick }) {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="hdr" data-aos="fade-down">
            <div className="wrap">
                <div className="hdr-in">

                    {/* Logo */}
                    <NavLink to="/" className="logo">
                        <img className="header-logo" src={logo} alt="YuksalishLC" />
                    </NavLink>

                    {/* Desktop nav */}
                    <nav className="hdr-nav desktop-nav">
                        {NAV_LINKS.map(([label, to]) => (
                            <NavLink
                                key={label}
                                to={to}
                                className={({ isActive }) => isActive ? "active" : undefined}
                            >
                                {label}
                            </NavLink>
                        ))}
                    </nav>

                    {/* Enroll button — desktop */}
                    <button
                        className="hdr-btn desktop-only"
                        onClick={onBtnClick}
                    >
                        {btnText}
                    </button>

                    {/* Hamburger */}
                    <button
                        className="hamburger"
                        onClick={() => setMenuOpen(o => !o)}
                        aria-label="Toggle menu"
                    >
                        <svg width="24" height="24" fill="none" stroke="#0d2b3e" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>

                {/* Mobile menu */}
                {menuOpen && (
                    <div className="mobile-menu">
                        {NAV_LINKS.map(([label, to]) => (
                            <NavLink
                                key={label}
                                to={to}
                                className={({ isActive }) => `mob-link${isActive ? " active" : ""}`}
                                onClick={() => setMenuOpen(false)}
                            >
                                {label}
                            </NavLink>
                        ))}
                        <button
                            className="mob-enroll"
                            onClick={() => { setMenuOpen(false); onBtnClick?.(); }}
                        >
                            {btnText}
                        </button>
                    </div>
                )}
            </div>
        </header>
    );
}
