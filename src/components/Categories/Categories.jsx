// img
import catCases from "/src/assets/images/cases.jpg";
import catMagsafe from "/src/assets/images/magSafe.jpg";
import catCables from "/src/assets/images/cables.jpg";
import catCharger from "/src/assets/images/charger.jpg";
import catStraps from "/src/assets/images/straps.jpg";
import catPowerbanks from "/src/assets/images/powerBanks.jpg";

const categories = [
    { id: 1, title: "Cases", count: "51 products", image: catCases },
    { id: 2, title: "MagSafe", count: "15 products", image: catMagsafe },
    { id: 3, title: "Cables", count: "18 products", image: catCables },
    { id: 4, title: "Charger", count: "12 products", image: catCharger },
    { id: 5, title: "Straps", count: "38 products", image: catStraps },
    { id: 6, title: "Power Banks", count: "18 products", image: catPowerbanks },
];

export const Categories = () => {
    return (
        <div className="py-5 bg-white">
            <div className="container">
                <div className="row row-cols-2 row-cols-sm-3 row-cols-md-6 g-4 text-center">
                    {categories.map((cat) => (
                        <div key={cat.id} className="col">
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

                                <h6 className="fw-bold mb-1" style={{ color: "#242424", fontSize: "16px" }}>
                                    {cat.title}
                                </h6>
                                <span className="small" style={{ color: "#777", fontSize: "13px" }}>
                                    {cat.count}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};