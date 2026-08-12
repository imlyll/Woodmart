// React
import { useState, useEffect } from "react";

// Icons
import { FiShare2, FiMessageSquare } from "react-icons/fi";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

// Image
import GadgetsOne from "/src/assets/images/Gadgets-1.jpg";
import GadgetsTwo from "/src/assets/images/Gadgets-2.jpg";
import GadgetsThree from "/src/assets/images/Gadgets-3.jpg";
import GadgetsFour from "/src/assets/images/Gadgets-4.jpg";
import GadgetsFive from "/src/assets/images/Gadgets-5.jpg";

import userPhoto from "/src/assets/images/avatar-home.jpg";

const articles = [
    {
        id: 1,
        image: GadgetsOne,
        category: "Decoration",
        title: "Exploring Atlanta's modern homes",
        day: "22",
        month: "APR",
        author: "Mr. Mackay",
        comments: 2
    },
    {
        id: 2,
        image: GadgetsTwo,
        category: "Inspiration",
        title: "Green interior design inspiration",
        day: "22",
        month: "APR",
        author: "Mr. Mackay",
        comments: 0
    },
    {
        id: 3,
        image: GadgetsThree,
        category: "Furniture",
        title: "Collar brings back coffee brewing ritual",
        day: "22",
        month: "APR",
        author: "Mr. Mackay",
        comments: 0
    },
    {
        id: 4,
        image: GadgetsFour,
        category: "Design Trends",
        title: "Reinterprets the classic bookshelf",
        day: "22",
        month: "APR",
        author: "Mr. Mackay",
        comments: 0
    },
    {
        id: 5,
        image: GadgetsFive,
        category: "Decoration",
        title: "Creative water features and exterior",
        day: "22",
        month: "APR",
        author: "Mr. Mackay",
        comments: 1
    }
];

const BREAKPOINTS = [
    { width: 1200, count: 4 },
    { width: 992, count: 3 },
    { width: 576, count: 2 },
    { width: 0, count: 1 }
];

const getItemsPerView = () => {
    if (typeof window === "undefined") return 4;
    const w = window.innerWidth;
    for (const bp of BREAKPOINTS) {
        if (w >= bp.width) return bp.count;
    }
    return 1;
};

export const Gadgets = () => {
    const [hoveredCard, setHoveredCard] = useState(null);
    const [itemsPerView, setItemsPerView] = useState(getItemsPerView);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const handleResize = () => setItemsPerView(getItemsPerView());
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const maxIndex = Math.max(0, articles.length - itemsPerView);

    useEffect(() => {
        if (currentIndex > maxIndex) setCurrentIndex(maxIndex);
    }, [maxIndex, currentIndex]);

    const goToPrev = () => setCurrentIndex((prev) => Math.max(0, prev - 1));
    const goToNext = () => setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));

    return (
        <div>
            <style>{`
                .gadget-arrow {
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    background: transparent;
                    border: none;
                    color: #bbb;
                    cursor: pointer;
                    z-index: 3;
                    padding: 8px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: color 0.2s ease;
                }
                .gadget-arrow:hover {
                    color: #333;
                }
                .gadget-arrow:disabled {
                    opacity: 0.35;
                    cursor: default;
                    pointer-events: none;
                }
                .gadget-arrow-prev {
                    left: 0;
                }
                .gadget-arrow-next {
                    right: 0;
                }
                .gadget-card-title {
                    transition: color 0.3s ease;
                }
                .gadget-card-img {
                    transition: transform 0.4s ease;
                }
                .gadget-card-img.zoomed {
                    transform: scale(1.1);
                }
            `}</style>

            <div className="my-5 pt-5 d-flex justify-content-center align-items-center flex-column">
                <p
                    className="mb-2 fw-normal"
                    style={{ fontSize: "15px", color: "#2e6bc6" }}>
                    Our new article best news
                </p>
                <h2
                    className="text-dark fw-bold mb-3"
                    style={{ fontSize: "2.5rem", letterSpacing: "-0.5px" }}>
                    Interesting About Gadgets
                </h2>
                <p
                    className="mx-auto fs-6 text-center"
                    style={{ maxWidth: "600px", lineHeight: "1.6", color: "#777" }}>
                    Whenever draft copy comes up in a meeting confused questions about
                </p>
            </div>

            <div className="container">
                <div className="position-relative px-4 px-md-5">
                    <button
                        className="gadget-arrow gadget-arrow-prev"
                        onClick={goToPrev}
                        disabled={currentIndex === 0}
                        aria-label="Previous articles">
                        <SlArrowLeft size={30} />
                    </button>

                    <div className="overflow-hidden">
                        <div
                            className="d-flex"
                            style={{
                                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
                                transition: "transform 0.4s ease-in-out"
                            }}>
                            {articles.map((article) => {
                                const isHovered = hoveredCard === article.id;

                                return (
                                    <div
                                        key={article.id}
                                        className="px-2 pb-3"
                                        style={{ flex: `0 0 ${100 / itemsPerView}%`, maxWidth: `${100 / itemsPerView}%` }}>
                                        <div
                                            className="card border h-100 rounded-3 position-relative"
                                            onMouseEnter={() => setHoveredCard(article.id)}
                                            onMouseLeave={() => setHoveredCard(null)}>
                                            
                                            <div className="position-relative">
                                                <div className="overflow-hidden rounded-top-3" style={{ height: "200px" }}>
                                                    <img
                                                        src={article.image}
                                                        alt={article.title}
                                                        className={`w-100 h-100 gadget-card-img ${isHovered ? "zoomed" : ""}`}
                                                        style={{ objectFit: "cover" }} />
                                                </div>

                                                <div
                                                    className="position-absolute top-0 start-0 bg-white text-dark text-center m-3 px-2 py-1 rounded-3 z-2 shadow-sm"
                                                    style={{ minWidth: "48px" }}>
                                                    <span className="d-block" style={{ fontSize: "18px", lineHeight: "1.1" }}>{article.day}</span>
                                                    <span className="d-block text-uppercase" style={{ fontSize: "10px", color: "#666" }}>{article.month}</span>
                                                </div>

                                                <span
                                                    className="position-absolute start-50 translate-middle-x text-white fw-bold text-uppercase rounded-2 z-3"
                                                    style={{ 
                                                        bottom: "-12px", 
                                                        backgroundColor: "#2563eb", 
                                                        fontSize: "10px", 
                                                        letterSpacing: "0.8px",
                                                        padding: "4px 14px",
                                                        boxShadow: "0 2px 6px rgba(37, 99, 235, 0.3)",
                                                        whiteSpace: "nowrap"
                                                    }}>
                                                    {article.category}
                                                </span>
                                            </div>

                                            <div className="card-body px-3 pt-4 pb-3 text-center d-flex flex-column justify-content-between">
                                                <h5
                                                    className={`gadget-card-title fw-bold my-2 ${isHovered ? "" : "text-dark"}`}
                                                    style={{ 
                                                        fontSize: "1.1rem", 
                                                        lineHeight: "1.4", 
                                                        color: isHovered ? "#777" : "#222",
                                                        minHeight: "50px" 
                                                    }}>
                                                    {article.title}
                                                </h5>

                                                <div className="d-flex justify-content-center align-items-center gap-2 mt-3" style={{ fontSize: "13px", color: "#888" }}>
                                                    <span>Posted by</span>
                                                    <img 
                                                        src={userPhoto} 
                                                        alt={article.author} 
                                                        className="rounded-circle" 
                                                        style={{ width: "22px", height: "22px", objectFit: "cover" }} />
                                                    <span style={{ color: "#666" }}>{article.author}</span>
                                                    
                                                    <FiShare2 size={15} role="button" className="ms-1 text-secondary" />
                                                    
                                                    <div className="position-relative d-inline-flex align-items-center" role="button">
                                                        <FiMessageSquare size={16} className="text-secondary" />
                                                        <span
                                                            className="position-absolute top-0 start-100 translate-middle badge rounded-circle bg-primary"
                                                            style={{ fontSize: "9px", padding: "2px 4px", transform: "translate(-20%, -50%)" }}>
                                                            {article.comments}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <button
                        className="gadget-arrow gadget-arrow-next"
                        onClick={goToNext}
                        disabled={currentIndex === maxIndex}
                        aria-label="Next articles">
                        <SlArrowRight size={30} />
                    </button>
                </div>
            </div>
        </div>
    );
};