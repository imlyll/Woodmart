// React
import { useState, useEffect } from "react";

// Icons
import { FiSearch } from "react-icons/fi";
import { TbArrowsShuffle } from "react-icons/tb";
import { FaRegHeart } from "react-icons/fa";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

// Images
import walletFront from "/src/assets/images/wallet-front.jpg";
import walletSide from "/src/assets/images/wallet-side.jpg";
import walletBack from "/src/assets/images/wallet-back.jpg";

import strapFront from "/src/assets/images/strap-front.jpg";
import strapSide from "/src/assets/images/strap-side.jpg";
import strapBack from "/src/assets/images/strap-back.jpg";

import airpodsFront from "/src/assets/images/airpods-front.jpg";
import airpodsSide from "/src/assets/images/airpods-side.jpg";
import airpodsBack from "/src/assets/images/airpods-back.jpg";

import smokeyFront from "/src/assets/images/smokey-case-front.jpg"; // bu sonunda qoyulacaq sekildi
import smokeySide from "/src/assets/images/smokey-case-side.jpg";
import smokeyBack from "/src/assets/images/smokey-case-back.jpg"; // bu da 1ci qoyulacaq sekildi

import lightningFront from "/src/assets/images/lightning-front.jpg";
import lightningSide from "/src/assets/images/lightning-side.jpg";
import lightningBack from "/src/assets/images/lightning-back.jpg";

import chargerFront from "/src/assets/images/charger-front.jpg";
import chargerSide from "/src/assets/images/charger-side.jpg";
import chargerBack from "/src/assets/images/charger-back.jpg";

const products = [
    {
        id: 1,
        title: "iPhone Leather Wallet Black",
        category: "MagSafe, Wallet",
        price: "$199.00",
        front: walletFront,
        side: walletSide,
        back: walletBack
    },
    {
        id: 2,
        title: "Everyday Leather Strap – Olive",
        category: "Straps, Silicone",
        price: "$199.00",
        front: strapFront,
        side: strapSide,
        back: strapBack
    },
    {
        id: 3,
        title: "Case for AirPods – Blue",
        category: "Cases",
        price: "$9.99",
        front: airpodsFront,
        side: airpodsSide,
        back: airpodsBack
    },
    {
        id: 4,
        title: "iPhone 13 Case – Smokey Black",
        category: "Iphone 13",
        price: "$169.00",
        front: smokeyBack,
        side: smokeySide,
        back: smokeyFront,
        badge: "HOT"
    },
    {
        id: 5,
        title: "Lightning Cable USB-A",
        category: "Cables, Lightning",
        price: "$25.00",
        front: lightningFront,
        side: lightningSide,
        back: lightningBack,
        badge: "NEW"
    },
    {
        id: 6,
        title: "Fast Wireless Charger 3in1",
        category: "Charger, Stands & docks",
        price: "$249.00",
        front: chargerFront,
        side: chargerSide,
        back: chargerBack
    }
];

const BREAKPOINTS = [
    { width: 1200, count: 5 },
    { width: 992, count: 4 },
    { width: 768, count: 3 },
    { width: 576, count: 2 },
    { width: 0, count: 1 }
];

const getItemsPerView = () => {
    if (typeof window === "undefined") return 5;
    const w = window.innerWidth;
    for (const bp of BREAKPOINTS) {
        if (w >= bp.width) return bp.count;
    }
    return 1;
};

export const PopularProducts = () => {
    const [hoveredCard, setHoveredCard] = useState(null);
    const [hoverPosition, setHoverPosition] = useState("default");
    const [itemsPerView, setItemsPerView] = useState(getItemsPerView);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const handleResize = () => setItemsPerView(getItemsPerView());
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const maxIndex = Math.max(0, products.length - itemsPerView);

    useEffect(() => {
        if (currentIndex > maxIndex) setCurrentIndex(maxIndex);
    }, [maxIndex, currentIndex]);

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

    const goToPrev = () => setCurrentIndex((prev) => Math.max(0, prev - 1));
    const goToNext = () => setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));

    return (
        <div className="text-center">
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
                .popular-arrow {
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
                .popular-arrow:hover {
                    color: #333;
                }
                .popular-arrow:disabled {
                    opacity: 0.35;
                    cursor: default;
                    pointer-events: none;
                }
                .popular-arrow-prev {
                    left: 0;
                }
                .popular-arrow-next {
                    right: 0;
                }
                .popular-dot {
                    width: 8px;
                    height: 8px;
                    border-radius: 50%;
                    border: 1px solid #bbb;
                    background-color: transparent;
                    padding: 0;
                    cursor: pointer;
                    transition: background-color 0.3s ease, border-color 0.3s ease;
                }
                .popular-dot.active {
                    background-color: #242424;
                    border-color: #242424;
                }
            `}</style>

            <div className="mb-5">
                <p
                    className="mb-2 fw-normal"
                    style={{ fontSize: "15px", color: "#2e6bc6" }}>
                    Learn how to get a discount
                </p>
                <h2
                    className="text-dark fw-bold mb-3"
                    style={{ fontSize: "2.5rem", letterSpacing: "-0.5px" }}>
                    Most Popular Products
                </h2>
                <p
                    className="mx-auto fs-6"
                    style={{ maxWidth: "600px", lineHeight: "1.6", color: "#777" }}>
                    Proponents of content strategy may shun of dummy copy designers
                </p>
            </div>

            <div className="container mb-5">
                <div className="position-relative px-4 px-md-5">
                    <button
                        className="popular-arrow popular-arrow-prev"
                        onClick={goToPrev}
                        disabled={currentIndex === 0}
                        aria-label="Previous products">
                        <SlArrowLeft size={30} />
                    </button>

                    <div className="overflow-hidden">
                        <div
                            className="d-flex"
                            style={{
                                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
                                transition: "transform 0.4s ease-in-out"
                            }}>
                            {products.map((product) => {
                                const isHovered = hoveredCard === product.id;

                                let currentImg = product.front;
                                if (isHovered) {
                                    currentImg = hoverPosition === "center" ? product.back : product.side;
                                }

                                return (
                                    <div
                                        key={product.id}
                                        className="px-2"
                                        style={{ flex: `0 0 ${100 / itemsPerView}%`, maxWidth: `${100 / itemsPerView}%` }}>
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
                                                    <span
                                                        className={`position-absolute top-0 start-0 badge rounded-circle p-2 m-2 z-3 ${product.badge === "HOT" ? "bg-danger" : "bg-success"}`}
                                                        style={{ width: "35px", height: "35px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "10px" }}>
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

                    <button
                        className="popular-arrow popular-arrow-next"
                        onClick={goToNext}
                        disabled={currentIndex === maxIndex}
                        aria-label="Next products">
                        <SlArrowRight size={30} />
                    </button>
                </div>

                {maxIndex > 0 && (
                    <div className="d-flex justify-content-center gap-2 mt-4">
                        {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                            <button
                                key={i}
                                className={`popular-dot ${i === currentIndex ? "active" : ""}`}
                                onClick={() => setCurrentIndex(i)}
                                aria-label={`Go to slide ${i + 1}`} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}