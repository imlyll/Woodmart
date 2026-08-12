// React
import { useState } from "react";

// Image
import magSafe from "/src/assets/images/mag-safe-case-category.jpg";
import fabricCase from "/src/assets/images/fabric-case-category.jpg";
import siliconeCase from "/src/assets/images/silicone-case-category.jpg";

const flexCards = [
    {
        id: 1,
        subtitle: "Safe you phone",
        title: "MagSafe Case",
        image: magSafe
    },
    {
        id: 2,
        subtitle: "Popular",
        title: "Fabric Case",
        image: fabricCase
    },
    {
        id: 3,
        subtitle: "Your style",
        title: "Silicone Case",
        image: siliconeCase
    }
];

export const CasesFlex = () => {
    const [hoveredCard, setHoveredCard] = useState(null);

    return (
        <div className="py-5 bg-white">
            <div className="container">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {flexCards.map((card) => (
                        <div key={card.id} className="col">
                            <div
                                className="position-relative overflow-hidden rounded-3"
                                onMouseEnter={() => setHoveredCard(card.id)}
                                onMouseLeave={() => setHoveredCard(null)}
                                style={{
                                    backgroundColor: "#fff",
                                    height: "450px"
                                }}>

                                <div className="position-relative p-4" style={{ zIndex: 2, maxWidth: "220px" }}>
                                    <p className="mb-1 fw-semibold" style={{ color: "#2e6bc6", fontSize: "14px" }}>
                                        {card.subtitle}
                                    </p>
                                    <h3 className="mb-4" style={{ color: "#242424", fontSize: "1.7rem" }}>
                                        {card.title}
                                    </h3>
                                    <button
                                        className="btn fw-bold text-uppercase border-0"
                                        style={{
                                            backgroundColor: "#2e6bc6",
                                            color: "#fff",
                                            fontSize: "12px",
                                            letterSpacing: "1px",
                                            padding: "12px 24px"
                                        }}>
                                        View More
                                    </button>
                                </div>

                                <img
                                    src={card.image}
                                    alt={card.title}
                                    className="position-absolute"
                                    style={{
                                        bottom: 0,
                                        right: 0,
                                        height: "115%",
                                        objectFit: "contain",
                                        objectPosition: "bottom right",
                                        transform: hoveredCard === card.id ? "scale(1.08)" : "scale(1)",
                                        transformOrigin: "bottom right",
                                        transition: "transform 0.4s ease-in-out"
                                    }} />

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}