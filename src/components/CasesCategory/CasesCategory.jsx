// React
import { useState, useEffect } from "react";

// Icons
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

// Phone
import i11 from "/src/assets/images/i11-category.jpg";
import i11Pro from "/src/assets/images/i11-pro-category.jpg";
import i12 from "/src/assets/images/i12-category.jpg";
import i12Pro from "/src/assets/images/i12-pro-category.jpg";
import i13Pro from "/src/assets/images/i13-pro-category.jpg";
import ise from "/src/assets/images/ise-category.jpg";
import ixr from "/src/assets/images/ixr-category.jpg";

// Brand
import brand1 from "/src/assets/images/brand1.png";
import brand2 from "/src/assets/images/brand2.png";
import brand3 from "/src/assets/images/brand3.png";
import brand4 from "/src/assets/images/brand4.png";
import brand5 from "/src/assets/images/brand5.png";
import brand6 from "/src/assets/images/brand6.png";

const categories = [
    {
        id: 1,
        title: "IPhone 11",
        count: "6 products",
        image: i11
    },
    {
        id: 2,
        title: "IPhone 11 pro",
        count: "6 products",
        image: i11Pro
    },
    {
        id: 3,
        title: "IPhone 12",
        count: "6 products",
        image: i12
    },
    {
        id: 4,
        title: "IPhone 12 Pro",
        count: "11 products",
        image: i12Pro
    },
    {
        id: 5,
        title: "IPhone 13",
        count: "6 products",
        image: i13Pro
    },
    {
        id: 6,
        title: "IPhone SE",
        count: "7 products",
        image: ise
    },
    {
        id: 7,
        title: "IPhone XR",
        count: "6 products",
        image: ixr
    },
]

const BREAKPOINTS = [
    { width: 1200, count: 6 },
    { width: 992, count: 4 },
    { width: 576, count: 3 },
    { width: 0, count: 2 }
];

const getItemsPerView = () => {
    if (typeof window === "undefined") return 6;
    const w = window.innerWidth;
    for (const bp of BREAKPOINTS) {
        if (w >= bp.width) return bp.count;
    }
    return 2;
};

export const CasesCategory = () => {
    const [itemsPerView, setItemsPerView] = useState(getItemsPerView);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [hoveredArrow, setHoveredArrow] = useState(null);
    const [hoveredLink, setHoveredLink] = useState(false);

    useEffect(() => {
        const handleResize = () => setItemsPerView(getItemsPerView());
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const maxIndex = Math.max(0, categories.length - itemsPerView);

    useEffect(() => {
        if (currentIndex > maxIndex) setCurrentIndex(maxIndex);
    }, [maxIndex, currentIndex]);

    const goToPrev = () => setCurrentIndex((prev) => Math.max(0, prev - 1));
    const goToNext = () => setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));

    return (
        <div className="py-5 bg-white">
            <div className="container">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h2 className="mb-0" style={{ fontSize: "1.9rem", color: "#242424" }}>
                        Choose Your Phone
                    </h2>
                    <a
                        href="#"
                        role="button"
                        className="text-uppercase fw-bold text-decoration-none pb-1"
                        onMouseEnter={() => setHoveredLink(true)}
                        onMouseLeave={() => setHoveredLink(false)}
                        style={{
                            fontSize: "12px",
                            letterSpacing: "1px",
                            color: hoveredLink ? "#2e6bc6" : "#242424",
                            borderBottom: `1px solid ${hoveredLink ? "#2e6bc6" : "#242424"}`,
                            transition: "color 0.3s ease, border-color 0.3s ease"
                        }}>
                        More Models
                    </a>
                </div>

                <div className="position-relative px-4">
                    <button
                        className="position-absolute top-50 start-0 translate-middle-y border-0 bg-transparent p-2 z-3"
                        onClick={goToPrev}
                        onMouseEnter={() => setHoveredArrow("prev")}
                        onMouseLeave={() => setHoveredArrow(null)}
                        disabled={currentIndex === 0}
                        aria-label="Previous phones"
                        style={{
                            color: hoveredArrow === "prev" ? "#333" : "#bbb",
                            opacity: currentIndex === 0 ? 0.35 : 1,
                            transition: "color 0.2s ease"
                        }}>
                        <SlArrowLeft size={25} />
                    </button>

                    <div className="overflow-hidden">
                        <div
                            className="d-flex"
                            style={{
                                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
                                transition: "transform 0.4s ease-in-out"
                            }}>
                            {categories.map((cat) => (
                                <div
                                    key={cat.id}
                                    className="px-2 text-center"
                                    style={{ flex: `0 0 ${100 / itemsPerView}%`, maxWidth: `${100 / itemsPerView}%` }}>
                                    <div className="d-flex flex-column align-items-center" role="button">

                                        <div className="rounded-circle overflow-hidden d-flex align-items-center justify-content-center mb-3" style={{
                                            width: "140px",
                                            height: "140px",
                                            backgroundColor: "#f4f4f4"
                                        }}>
                                            <img src={cat.image} alt={cat.title} style={{
                                                maxWidth: "80%",
                                                maxHeight: "80%",
                                                objectFit: "contain",
                                                transition: "transform 0.3s ease-in-out"
                                            }}
                                                onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.15)"}
                                                onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"} />
                                        </div>

                                        <h6 className="mb-1" style={{ color: "#242424", fontSize: "18px" }}>
                                            {cat.title}
                                        </h6>
                                        <span className="small" style={{ color: "#777777", fontSize: "14px" }}>
                                            {cat.count}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button
                        className="position-absolute top-50 end-0 translate-middle-y border-0 bg-transparent p-2 z-3"
                        onClick={goToNext}
                        onMouseEnter={() => setHoveredArrow("next")}
                        onMouseLeave={() => setHoveredArrow(null)}
                        disabled={currentIndex === maxIndex}
                        aria-label="Next phones"
                        style={{
                            color: hoveredArrow === "next" ? "#333" : "#bbb",
                            opacity: currentIndex === maxIndex ? 0.35 : 1,
                            transition: "color 0.2s ease"
                        }}>
                        <SlArrowRight size={25} />
                    </button>
                </div>

                <div className="pt-5 pb-4 d-flex flex-wrap justify-content-evenly align-items-center">
                    <img src={brand1} style={{ height: "70px", width: "auto", objectFit: "contain" }} />
                    <img src={brand2} style={{ height: "70px", width: "auto", objectFit: "contain" }} />
                    <img src={brand3} style={{ height: "70px", width: "auto", objectFit: "contain" }} />
                    <img src={brand4} style={{ height: "70px", width: "auto", objectFit: "contain" }} />
                    <img src={brand5} style={{ height: "70px", width: "auto", objectFit: "contain" }} />
                    <img src={brand6} style={{ height: "70px", width: "auto", objectFit: "contain" }} />
                </div>
            </div>
        </div>
    )
}