// React
import React, { useState } from "react";

// SVG
import logo from "../../assets/images/wood-logo-white-reserve.svg";

export const Footer = () => {
    const [hoveredId, setHoveredId] = useState(null);

    const navLinks = [
        { id: 1, title: "ABOUT US", href: "#" },
        { id: 2, title: "PRIVACY POLICY", href: "#" },
        { id: 3, title: "SHIPPING", href: "#" },
        { id: 4, title: "TRACK ORDER", href: "#" },
        { id: 5, title: "FAQS", href: "#" },
    ];

    return (
        <footer className="w-100 p-5 bg-black text-white">
            <div className="container-fluid px-4 px-md-5">
                <div className="d-flex flex-column flex-lg-row align-items-center justify-content-between gap-3 text-center text-lg-start">
                    
                    {/* Left: Logo */}
                    <div className="d-flex align-items-center">
                        <img 
                            src={logo} 
                            alt="WoodMart Logo" 
                            className="img-fluid"
                            style={{ height: "25px" }} />
                    </div>

                    <ul className="list-unstyled d-flex align-items-center justify-content-center gap-4 m-0 p-0 flex-wrap">
                        {navLinks.map((link) => (
                            <li key={link.id}>
                                <a 
                                    href={link.href} 
                                    className="text-decoration-none fw-bold small"
                                    style={{ 
                                        color: hoveredId === link.id ? "#2e6bc6" : "#ffffff", 
                                        transition: "color 0.3s ease",
                                        letterSpacing: "0.5px"
                                    }}
                                    onMouseEnter={() => setHoveredId(link.id)}
                                    onMouseLeave={() => setHoveredId(null)}>
                                    {link.title}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <div className="text-white small">
                        Xtemos Studio Copyright © 2026
                    </div>

                </div>
            </div>
        </footer>
    );
};