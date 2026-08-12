// React
import { useState } from "react";

// Icons
import { FiSearch } from "react-icons/fi";
import { TbArrowsShuffle } from "react-icons/tb";
import { FaRegHeart, FaStar } from "react-icons/fa";

// Phone Images
import blueCaseBack from "/src/assets/images/blue-case-back.jpg";
import blueCaseSide from "/src/assets/images/blue-case-side.jpg";
import blueCaseFront from "/src/assets/images/blue-case-front.jpg";

import xrCaseBack from "/src/assets/images/xr-case-back.jpg";
import xrCaseSide from "/src/assets/images/xr-case-side.jpg";
import xrCaseFront from "/src/assets/images/xr-case-front.jpg";

import greenCaseBack from "/src/assets/images/green-case-back.jpg";
import greenCaseSide from "/src/assets/images/green-case-side.jpg";
import greenCaseFront from "/src/assets/images/green-case-front.jpg";

import twelveCaseBack from "/src/assets/images/twelve-case-back.jpg";
import twelveCaseSide from "/src/assets/images/twelve-case-side.jpg";
import twelveCaseFront from "/src/assets/images/twelve-case-front.jpg";

import pinkCaseBack from "/src/assets/images/pink-case-back.jpg";
import pinkCaseSide from "/src/assets/images/pink-case-side.jpg";
import pinkCaseFront from "/src/assets/images/pink-case-front.jpg";

import thirteenCaseBack from "/src/assets/images/thirteen-case-back.jpg";
import thirteenCaseSide from "/src/assets/images/thirteen-case-side.jpg";
import thirteenCaseFront from "/src/assets/images/thirteen-case-front.jpg";

import redRoseCaseBack from "/src/assets/images/redRose-case-back.jpg";
import redRoseCaseSide from "/src/assets/images/redRose-case-side.jpg";
import redRoseCaseFront from "/src/assets/images/redRose-case-front.jpg";

import lavenderCaseBack from "/src/assets/images/lavender-case-back.jpg";
import lavenderCaseSide from "/src/assets/images/lavender-case-side.jpg";
import lavenderCaseFront from "/src/assets/images/lavender-case-front.jpg";

import moonCaseBack from "/src/assets/images/moon-case-back.jpg";
import moonCaseSide from "/src/assets/images/moon-case-side.jpg";
import moonCaseFront from "/src/assets/images/moon-case-front.jpg";

import elevenCaseBack from "/src/assets/images/eleven-case-back.jpg";
import elevenCaseSide from "/src/assets/images/eleven-case-side.jpg";
import elevenCaseFront from "/src/assets/images/eleven-case-front.jpg";


const products = [
    {
        id: 1,
        title: "iPhone 12 Pro Moment Case – Blue",
        category: "iPhone 12 pro",
        price: "$149.00",
        back: blueCaseBack,
        side: blueCaseSide,
        front: blueCaseFront
    },
    {
        id: 2,
        title: "Full Aquarelle iPhone XR",
        category: "Cases, iPhone XR",
        price: "$169.00",
        back: xrCaseBack,
        side: xrCaseSide,
        front: xrCaseFront
    },
    {
        id: 3,
        title: "iPhone 12 Pro Moment Case – Olive",
        category: "iPhone 12 pro",
        price: "$149.00",
        back: greenCaseBack,
        side: greenCaseSide,
        front: greenCaseFront,
        rating: 5,
        badge: "HOT"
    },
    {
        id: 4,
        title: "Leather Case iPhone 12 Deep Violet",
        category: "Cases, iPhone 12",
        price: "$230.00",
        back: twelveCaseBack,
        side: twelveCaseSide,
        front: twelveCaseFront
    },
    {
        id: 5,
        title: "iPhone 13 Case Luxe – Dusty Pink",
        category: "iPhone 13",
        price: "$149.00",
        back: pinkCaseBack,
        side: pinkCaseSide,
        front: pinkCaseFront
    },
    {
        id: 6,
        title: "iPhone 13 Case Max – Black",
        category: "iPhone 13",
        price: "$159.00",
        back: thirteenCaseBack,
        side: thirteenCaseSide,
        front: thirteenCaseFront
    },
    {
        id: 7,
        title: "iPhone 13 Case With MagSafe – Red Rose",
        category: "iPhone 13",
        price: "$199.00",
        back: redRoseCaseBack,
        side: redRoseCaseSide,
        front: redRoseCaseFront
    },
    {
        id: 8,
        title: "Epik Silicone Case Full – Lavender",
        category: "iPhone 12",
        price: "$99.00",
        back: lavenderCaseBack,
        side: lavenderCaseSide,
        front: lavenderCaseFront
    },
    {
        id: 9,
        title: "iPhone 12 Pro Max Silicone – Black/White",
        category: "iPhone 12 pro",
        price: "$99.00",
        back: moonCaseBack,
        side: moonCaseSide,
        front: moonCaseFront
    },
    {
        id: 10,
        title: "Leather Case iPhone 11 Pro",
        category: "Cases, iPhone 11 pro",
        price: "$230.00",
        back: elevenCaseBack,
        side: elevenCaseSide,
        front: elevenCaseFront
    }
];

export const NewArrivals = () => {
    const [hoveredCard, setHoveredCard] = useState(null);
    const [hoverPosition, setHoverPosition] = useState("default");
    const [activeTab, setActiveTab] = useState("CASES");
    const [hoveredTab, setHoveredTab] = useState(null);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const width = rect.width;

        if (x > width * 0.25 && x < width * 0.75) {
            setHoverPosition("center");
        } else {
            setHoverPosition("edge");
        }
    };

    return (
        <div className="container my-5">
            <style>{`
                .icon-wrap {
                    position: relative;
                }
                .icon-wrap .icon-tooltip {
                    position: absolute;
                    right: calc(100% + 10px);
                    top: 50%;
                    transform: translateY(-50%) translateX(5px);
                    background: #1a1a1a;
                    color: #fff;
                    padding: 6px 12px;
                    border-radius: 4px;
                    font-size: 12px;
                    white-space: nowrap;
                    opacity: 0;
                    pointer-events: none;
                    transition: opacity 0.2s ease, transform 0.2s ease;
                    z-index: 5;
                }
                .icon-wrap .icon-tooltip::after {
                    content: "";
                    position: absolute;
                    left: 100%;
                    top: 50%;
                    transform: translateY(-50%);
                    border: 5px solid transparent;
                    border-left-color: #1a1a1a;
                }
                .icon-wrap:hover .icon-tooltip {
                    opacity: 1;
                    transform: translateY(-50%) translateX(0);
                }
                .tab-item {
                    position: relative;
                    padding-bottom: 6px;
                    color: #9e9e9e;
                    cursor: pointer;
                    transition: color 0.3s ease;
                    user-select: none;
                }

                .tab-item:hover {
                    color: #333;
                }

                .tab-item::after {
                    content: "";
                    position: absolute;
                    bottom: 0;
                    right: 0;
                    width: 100%;
                    height: 2px;
                    background-color: #0d6efd;
                    transform: scaleX(0);
                    transform-origin: left; 
                    transition: transform 0.3s ease-in-out;
                }

                .tab-item:hover::after {
                    transform: scaleX(1);
                }

                .tab-item.active {
                    color: #333;
                }

                .tab-item.active::after {
                    transform: scaleX(1);
                }
            `}</style>

            <div className="text-center mb-4">
                <p className="fs-6 mb-1 fw-medium" style={{color: "#2e6bc6"}}>Hurry up to buy</p>
                <h2 className="text-dark fw-bold mb-2 fs-1">New Arrivals</h2>
                <p className="fs-6 mb-4" style={{color: "#777"}}>How can you evaluate content without design</p>

                <div className="d-flex justify-content-center align-items-center gap-4 text-uppercase fw-bold" style={{ fontSize: "14px", letterSpacing: "1px" }}>
                    {["CASES", "STRAPS", "MAGSAFE"].map((tab) => {
                        const isActive = activeTab === tab;
                        return (
                            <span
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`tab-item ${isActive ? "active" : ""}`}>
                                {tab}
                            </span>
                        );
                    })}
                </div>
            </div>

            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-5 g-4 mt-2">
                {products.map((product) => {
                    const isHovered = hoveredCard === product.id;

                    let currentImg = product.back;
                    if (isHovered) {
                        currentImg = hoverPosition === "center" ? product.front : product.side;
                    }

                    return (
                        <div key={product.id} className="col">
                            <div
                                className="card border-0 h-100 text-center position-relative"
                                onMouseEnter={() => setHoveredCard(product.id)}
                                onMouseLeave={() => {
                                    setHoveredCard(null);
                                    setHoverPosition("default");
                                }}
                                onMouseMove={handleMouseMove}
                                style={{ background: "transparent" }}>
                                <div className="position-relative overflow-hidden mb-3" style={{ height: "260px" }}>

                                    {product.badge && (
                                        <span className="position-absolute top-0 start-0 badge rounded-circle bg-danger p-2 m-2 z-3" style={{ width: "35px", height: "35px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "10px" }}>
                                            {product.badge}
                                        </span>
                                    )}

                                    <img
                                        src={currentImg}
                                        alt={product.title}
                                        className="w-100 h-100"
                                        style={{ objectFit: "contain", transition: "all 0.2s ease" }} />

                                    <div
                                        className="position-absolute d-flex flex-column gap-2 bg-white rounded shadow-sm p-2 z-2"
                                        style={{
                                            top: "15px",
                                            right: isHovered ? "15px" : "-50px",
                                            transition: "right 0.3s ease-in-out"
                                        }}>
                                        <span role="button" className="text-dark icon-wrap">
                                            <span className="icon-tooltip">Compare</span>
                                            <TbArrowsShuffle size={18} />
                                        </span>
                                        <span role="button" className="text-dark icon-wrap">
                                            <span className="icon-tooltip">Quick view</span>
                                            <FiSearch size={18} />
                                        </span>
                                        <span role="button" className="text-dark icon-wrap">
                                            <span className="icon-tooltip">Add to wishlist</span>
                                            <FaRegHeart size={18} />
                                        </span>
                                    </div>

                                    <div
                                        className="position-absolute bottom-0 start-0 w-100 z-2"
                                        style={{
                                            transform: isHovered ? "translateY(0)" : "translateY(120%)",
                                            opacity: isHovered ? 1 : 0,
                                            transition: "transform 0.3s ease-in-out, opacity 0.3s ease-in-out"
                                        }}>
                                        <button className="btn w-100 rounded border-0 text-uppercase fw-bold py-2" style={{ fontSize: "12px", letterSpacing: "0.5px", backgroundColor: "#2e6bc6", color: "#fff" }}>
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>

                                <div className="card-body p-0 d-flex flex-column align-items-center">
                                    <h6 className="card-title text-dark fw-normal mb-1" style={{ fontSize: "16px", lineHeight: "1.3" }}>
                                        {product.title}
                                    </h6>
                                    <p className="small mb-1" style={{ fontSize: "14px", color: "#a5a5a5" }}>
                                        {product.category}
                                    </p>

                                    {product.rating && (
                                        <div className="d-flex text-warning gap-1 mb-1" style={{ fontSize: "11px" }}>
                                            {[...Array(product.rating)].map((_, i) => <FaStar key={i} />)}
                                        </div>
                                    )}

                                    <p className="fw-bold mb-0" style={{ fontSize: "14px", color: "#2e6bc6" }}>
                                        {product.price}
                                    </p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};