// React
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

// Icons
import { FaRegHeart } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { TbArrowsShuffle } from "react-icons/tb";
import { FiShoppingCart } from "react-icons/fi";
import { IoIosArrowDown, IoIosMenu, IoIosClose } from "react-icons/io";

// Svg
import logo from "../../assets/images/wood-logo-dark.svg";

const primaryColor = "#2e6bc6";
const defaultColor = "#333";
const secondaryColor = "#6c757d";

const menuItems = [
    {
        id: 1,
        label: "Cases",
        path: "/cases",
        items: [
            "Iphone 13",
            "Iphone 12 pro",
            "Iphone 12",
            "Iphone 11 pro",
            "Iphone 11",
            "Iphone SE",
            "Iphone XR"
        ]
    },
    {
        id: 2,
        label: "Straps",
        items: [
            "Canvas",
            "Leather",
            "Limited Series",
            "Metal",
            "Silicone",
            "Sport"
        ]
    },
    {
        id: 3,
        label: "Power Banks",
        items: [
            "Battery Case",
            "Powerful",
            "Wireless"
        ]
    },
    {
        id: 4,
        label: "Cables",
        items: [
            "Lightning",
            "Universal",
            "USB-C"
        ]
    },
    {
        id: 5,
        label: "MagSafe",
        items: [
            "MagSafe Battery",
            "Wallet"
        ]
    },
    {
        id: 6,
        label: "Charger",
        items: [
            "Charging pads",
            "Stands & docks"
        ]
    },
    {
        id: 7,
        label: "More",
        items: [
            "Shop",
            "Blog",
            "About Us",
            "Contact Us",
            "Privacy Policy",
            "Shipping",
            "Track Order",
            "FAQs"
        ]
    }
];

export const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(null);
    const [hoveredItem, setHoveredItem] = useState(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [mobileOpenSubmenu, setMobileOpenSubmenu] = useState(null);
    const location = useLocation();

    const toggleMobileSubmenu = (index) => {
        if (mobileOpenSubmenu === index) {
            setMobileOpenSubmenu(null);
        } else {
            setMobileOpenSubmenu(index);
        }
    };

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
        setMobileOpenSubmenu(null);
    };

    return (
        <nav className="sticky-top bg-white w-100 shadow">
            <div className="container">
                <div className="d-flex justify-content-between align-items-center py-3 flex-nowrap">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link to="/">
                            <img src={logo} height={25} />
                        </Link>
                    </div>
                    {/* Menu */}
                    <div className="d-none d-lg-flex align-items-center gap-4">
                        {menuItems.map((menu, index) => (
                            <div key={menu.id} className="position-relative" onMouseEnter={() => setOpenMenu(index)} onMouseLeave={() => setOpenMenu(null)}>
                                {menu.path ? (
                                    <Link
                                        to={menu.path}
                                        className="fs-6 text-nowrap text-decoration-none"
                                        style={{
                                            color: location.pathname === menu.path
                                                ? "#2e6bc6"
                                                : (openMenu === index ? primaryColor : defaultColor),
                                            transition: "color 0.3s ease-in-out"
                                        }}>
                                        {menu.label} <IoIosArrowDown size={12} />
                                    </Link>
                                ) : (
                                    <span className="fs-6 text-nowrap" role="button" style={{ color: openMenu === index ? primaryColor : defaultColor, transition: "color 0.3s ease-in-out" }}>
                                        {menu.label} <IoIosArrowDown size={12} />
                                    </span>
                                )}
                                <div className={"position-absolute top-100 start-0 bg-white shadow rounded p-3 mt-2 fade " + (openMenu === index ? "show" : "")} style={{ minWidth: "180px", zIndex: 1000, display: openMenu === index ? "block" : "none" }}>
                                    {menu.items.map((item, itemIndex) => {
                                        const itemKey = index + "-" + itemIndex;
                                        return (
                                            <div key={item} className="py-2" role="button" onMouseEnter={() => setHoveredItem(itemKey)} onMouseLeave={() => setHoveredItem(null)} style={{
                                                color: hoveredItem === itemKey ? primaryColor : secondaryColor, transition: "color 0.3s ease-in-out",
                                            }}>
                                                {item}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* Right */}
                    <div className="d-flex align-items-center gap-2 gap-md-3 flex-shrink-0">
                        <span className="fs-6 text-nowrap d-none d-md-inline" role="button">Login / Register</span>
                        <span role="button" >
                            <FiSearch size={18} />
                        </span>
                        <span className="position-relative d-none d-sm-inline-block" role="button">
                            <TbArrowsShuffle size={18} />
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill" style={{backgroundColor: primaryColor}}>
                                0
                            </span>
                        </span>
                        <span className="position-relative d-none d-sm-inline-block" role="button">
                            <FaRegHeart size={18} />
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill" style={{backgroundColor: primaryColor}}>
                                0
                            </span>
                        </span>
                        <span className="d-flex align-items-center gap-2" role="button">
                            <span className="position-relative">
                                <FiShoppingCart size={18} />
                                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill" style={{backgroundColor: primaryColor}}>
                                    0
                                </span>
                            </span>
                            <span className="fs-6 text-nowrap ps-2 d-none d-md-inline">$0.00</span>
                        </span>
                        <span className="d-lg-none" role="button" onClick={() => setMobileMenuOpen(true)}>
                            <IoIosMenu size={28} />
                        </span>
                    </div>
                </div>
            </div>

            {/* Mobile menu backdrop */}
            {mobileMenuOpen && (
                <div
                    className="position-fixed top-0 start-0 w-100 h-100"
                    style={{ backgroundColor: "rgba(0,0,0,0.4)", zIndex: 2000 }}
                    onClick={closeMobileMenu} />
            )}

            {/* Mobile menu panel */}
            <div
                className="position-fixed top-0 start-0 h-100 bg-white shadow"
                style={{
                    width: "280px",
                    maxWidth: "85vw",
                    zIndex: 2001,
                    transform: mobileMenuOpen ? "translateX(0)" : "translateX(-100%)",
                    transition: "transform 0.3s ease-in-out",
                    overflowY: "auto"
                }}>
                <div className="d-flex justify-content-between align-items-center p-3 border-bottom">
                    <img src={logo} height={22} />
                    <span role="button" onClick={closeMobileMenu}>
                        <IoIosClose size={32} />
                    </span>
                </div>

                <div className="p-3">
                    {menuItems.map((menu, index) => (
                        <div key={menu.id} className="border-bottom">
                            <div
                                className="d-flex justify-content-between align-items-center py-3"
                                role="button"
                                onClick={() => toggleMobileSubmenu(index)}>
                                {menu.path ? (
                                    <Link
                                        to={menu.path}
                                        className="fs-6 text-decoration-none"
                                        style={{ color: defaultColor }}
                                        onClick={closeMobileMenu}>
                                        {menu.label}
                                    </Link>
                                ) : (
                                    <span className="fs-6" style={{ color: defaultColor }}>
                                        {menu.label}
                                    </span>
                                )}
                                <IoIosArrowDown
                                    size={16}
                                    style={{
                                        transform: mobileOpenSubmenu === index ? "rotate(180deg)" : "rotate(0deg)",
                                        transition: "transform 0.3s ease"
                                    }} />
                            </div>

                            {mobileOpenSubmenu === index && (
                                <div className="pb-2 ps-3">
                                    {menu.items.map((item) => (
                                        <div key={item} className="py-2" role="button" style={{ color: secondaryColor }} onClick={closeMobileMenu}>
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </nav>
    )
}