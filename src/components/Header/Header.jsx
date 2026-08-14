// React
import { useState, useEffect, useRef } from "react";

// Icon
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";

// Slide
import slide1 from "/src/assets/images/w-accessories-slider1.jpg";
import slide2 from "/src/assets/images/accessories-slide-2.jpg";
import slide3 from "/src/assets/images/accessories-slide-3.jpg";

// Color
const headerColor = "#242424";
const greyColor = "#777";
const threeColor = "#3e3e3e";
const dotsColor = "#bbb";

const slides = [
    {
        image: slide1,
        title: "Charge Your Phone Safely!",
        text: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.",
    },
    {
        image: slide2,
        title: "For Everything and Everyone",
        text: "Even if your less into design and more into content strategy you may find some redeeming value with, wait for it, dummy copy.",
    },
    {
        image: slide3,
        title: "Featured Accessories",
        text: "A client that's unhappy for a reason is a problem, a client that's unhappy though required he or her can't quite put a finger.",
    }
];

const extendedSlides = [slides[slides.length - 1], ...slides, slides[0]];
const TRANSITION_DURATION = 800;
const DRAG_THRESHOLD = 100;

export const Header = () => {
    const [current, setCurrent] = useState(1);
    const [withTransition, setWithTransition] = useState(true);
    const [dragOffset, setDragOffSet] = useState(0);
    const snapTimeoutRef = useRef(null);
    const isDragging = useRef(false);
    const startX = useRef(0);
    const realIndex = (current - 1 + slides.length) % slides.length;
    const goToNext = () => setCurrent((prev) => prev + 1);
    const goToPrev = () => setCurrent((prev) => prev - 1);
    const goToSlide = (index) => setCurrent(index + 1);

    useEffect(() => {
        if (current === extendedSlides.length - 1) {
            snapTimeoutRef.current = setTimeout(() => {
                setWithTransition(false);
                setCurrent(1);
            }, TRANSITION_DURATION);
        } else if (current === 0) {
            snapTimeoutRef.current = setTimeout(() => {
                setWithTransition(false);
                setCurrent(slides.length);
            }, TRANSITION_DURATION);
        }
        return () => clearTimeout(snapTimeoutRef.current);
    }, [current]);

    useEffect(() => {
        if (!withTransition) {
            const frame = requestAnimationFrame(() => setWithTransition(true));
            return () => cancelAnimationFrame(frame);
        }
    }, [withTransition]);

    const handlePointerDown = (e) => {
        isDragging.current = true;
        startX.current = e.clientX;
        setWithTransition(false);
    };

    const handlePointerMove = (e) => {
        if (!isDragging.current) return;
        const delta = e.clientX - startX.current;
        setDragOffSet(delta);
    };

    const endDrag = () => {
        if (!isDragging.current) return;
        isDragging.current = false;

        if (dragOffset > DRAG_THRESHOLD) {
            goToPrev();
        } else if (dragOffset < -DRAG_THRESHOLD) {
            goToNext();
        }

        setDragOffSet(0);
        setWithTransition(true);
    };

    return (
        <div className="position-relative overflow-hidden header-wrap" style={{ width: "100%", cursor: isDragging.current ? "grabbing" : "grab", userSelect: "none" }} onPointerDown={handlePointerDown} onPointerMove={handlePointerMove} onPointerUp={endDrag} onPointerLeave={endDrag}>
            <style>{`
                .header-wrap {
                    height: 600px;
                }
                @media (max-width: 768px) {
                    .header-wrap {
                        height: 420px;
                    }
                }
                @media (max-width: 576px) {
                    .header-wrap {
                        height: 360px;
                    }
                }
                .header-title {
                    font-size: 4rem;
                }
                @media (max-width: 768px) {
                    .header-title {
                        font-size: 2.2rem;
                    }
                }
                @media (max-width: 576px) {
                    .header-title {
                        font-size: 1.6rem;
                    }
                }
                .header-text {
                    font-size: 15px;
                }
                @media (max-width: 576px) {
                    .header-text {
                        font-size: 13px;
                    }
                }
                .header-arrow-prev,
                .header-arrow-next {
                    width: 45px;
                    height: 45px;
                }
                .header-arrow-prev {
                    left: 20px;
                }
                .header-arrow-next {
                    right: 20px;
                }
                @media (max-width: 576px) {
                    .header-arrow-prev,
                    .header-arrow-next {
                        width: 32px;
                        height: 32px;
                    }
                    .header-arrow-prev {
                        left: 8px;
                    }
                    .header-arrow-next {
                        right: 8px;
                    }
                }
            `}</style>
            <div
                className="d-flex h-100"
                style={{ width: `${extendedSlides.length * 100}%`, transform: `translateX(calc(-${current * (100 / extendedSlides.length)}% + ${dragOffset}px))`, transition: withTransition ? `transform ${TRANSITION_DURATION}ms ease-in-out` : "none" }}>
                {extendedSlides.map((slide, index) => {
                    const isActive = index === current;
                    return (
                        <div key={index} className="position-relative h-100" style={{ width: `${100 / extendedSlides.length}%`, flexShrink: 0 }}>
                            <div className="w-100 h-100 overflow-hidden">
                                <img src={slide.image} className="w-100 h-100" draggable={false} style={{ objectFit: "cover", transform: "scale(1.2)", transformOrigin: "center", pointerEvents: "none" }} />
                            </div>
                            <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center">
                                <div className="container">
                                    <div style={{ maxWidth: "450px" }}>
                                        <h1 className="fw-bold mb-3 header-title" style={{ lineHeight: "1.07", color: headerColor, opacity: isActive ? 1 : 0, transform: isActive ? "translateY(0)" : "translateY(25px)", transition: "opacity 0.6s ease 0.15s, transform 0.6s ease 0.15s" }}>
                                            {slide.title}
                                        </h1>
                                        <p className="mb-4 header-text" style={{ color: greyColor, fontFamily: "Arial", lineHeight: "1.6", opacity: isActive ? 1 : 0, transform: isActive ? "translateY(0)" : "translateY(25px)", transition: "opacity 0.6s ease 0.3s, transform 0.6s ease 0.3s" }}>
                                            {slide.text}
                                        </p>
                                        <div className="d-flex gap-3" style={{
                                            opacity: isActive ? 1 : 0, transform: isActive ? "translateY(0)" : "translateY(25px)", transition: "opacity 0.6s ease 0.45s, transform 0.6s ease 0.45s"
                                        }}>
                                            <button className="btn fw-semibold text-uppercase" style={{ padding: "10px 24px", fontSize: "0.9rem", backgroundColor: "#2e6bc6", color: "#fff" }}>
                                                To Shop
                                            </button>
                                            <button className="btn btn-light border bg-transparent fw-bold text-uppercase" style={{ padding: "10px 24px", fontSize: "0.9rem", color: threeColor }}>
                                                Read More
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            <button onClick={goToPrev} onPointerDown={(e) => e.stopPropagation()} className="position-absolute d-flex align-items-center justify-content-center header-arrow-prev" style={{
                top: "50%",
                transform: "translateY(-50%)",
                borderRadius: "50%",
                cursor: "pointer",
                zIndex: 2,
            }}>
                <SlArrowLeft size={25} />
            </button>

            <button onClick={goToNext} onPointerDown={(e) => e.stopPropagation()} className="position-absolute d-flex align-items-center justify-content-center header-arrow-next" style={{
                top: "50%",
                transform: "translateY(-50%)",
                borderRadius: "50%",
                cursor: "pointer",
                zIndex: 2,
            }}>
                <SlArrowRight size={25} />
            </button>

            <div className="position-absolute d-flex gap-2" style={{ bottom: "24px", left: "50%", transform: "translateX(-50%)", zIndex: 2 }}>
                {slides.map((_, index) => (
                    <button key={index}
                        onClick={() => goToSlide(index)}
                        onPointerDown={(e) => e.stopPropagation()}
                        style={{
                            width: "10px",
                            height: "10px",
                            borderRadius: "50%",
                            border: `1px solid ${dotsColor}`,
                            backgroundColor: realIndex === index ? headerColor : "transparent",
                            cursor: "pointer",
                            transition: "background-color 0.3s",
                        }} />
                ))}
            </div>
        </div>
    );
};