// React
import React from "react";

// Icons
import { FaRegHeart } from "react-icons/fa";
import { FiMessageSquare } from "react-icons/fi";

// Images
import footerOne from "/src/assets/images/footer-1.jpg";
import footerTwo from "/src/assets/images/footer-2.jpg";
import footerThree from "/src/assets/images/footer-3.jpg";
import footerFour from "/src/assets/images/footer-4.jpg";
import footerFive from "/src/assets/images/footer-5.jpg";
import footerSix from "/src/assets/images/footer-6.jpg";
import footerSeven from "/src/assets/images/footer-7.jpg";
import footerEight from "/src/assets/images/footer-8.jpg";

const footerImages = [
    { id: 1, image: footerOne, likes: 1590, comments: 699 },
    { id: 2, image: footerTwo, likes: 9055, comments: 662 },
    { id: 3, image: footerThree, likes: 3677, comments: 791 },
    { id: 4, image: footerFour, likes: 3832, comments: 999 },
    { id: 5, image: footerFive, likes: 1011, comments: 765 },
    { id: 6, image: footerSix, likes: 9969, comments: 510 },
    { id: 7, image: footerSeven, likes: 1846, comments: 26 },
    { id: 8, image: footerEight, likes: 1523, comments: 17 },
];

export const PreFooter = () => {
    return (
        <section className="w-100 overflow-hidden mt-5">
            <style>{`
                .prefooter-grid {
                    display: grid;
                    grid-template-columns: repeat(8, 1fr);
                    width: 100%;
                }

                @media (max-width: 1200px) {
                    .prefooter-grid {
                        grid-template-columns: repeat(4, 1fr);
                    }
                }

                @media (max-width: 576px) {
                    .prefooter-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }
                }

                .prefooter-item {
                    position: relative;
                    aspect-ratio: 1 / 1;
                    overflow: hidden;
                    cursor: pointer;
                }

                .prefooter-img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }

                .prefooter-overlay {
                    position: absolute;
                    inset: 0;
                    background-color: rgba(0, 0, 0, 0.45);
                    opacity: 0;
                    transition: opacity 0.3s ease;
                    display: flex;
                    align-items: flex-end;
                    padding: 12px 14px;
                    color: #fff;
                    z-index: 2;
                }

                .prefooter-item:hover .prefooter-overlay {
                    opacity: 1;
                }

                .prefooter-stats {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    width: 100%;
                    font-size: 13px;
                    font-weight: 600;
                }
            `}</style>

            <div className="prefooter-grid">
                {footerImages.map((item) => (
                    <div key={item.id} className="prefooter-item">
                        <img 
                            src={item.image} 
                            alt={`Footer image ${item.id}`} 
                            className="prefooter-img" />
                        <div className="prefooter-overlay">
                            <div className="prefooter-stats">
                                <span className="d-flex align-items-center gap-1">
                                    <FaRegHeart size={15} /> {item.likes}
                                </span>
                                <span className="d-flex align-items-center gap-1">
                                    <FiMessageSquare size={15} /> {item.comments}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};