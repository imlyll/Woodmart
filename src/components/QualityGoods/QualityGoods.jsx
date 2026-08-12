// React
import React from "react";

// img
import bannerOne from "../../assets/images/accessories-banner-1.jpg";
import bannerTwo from "../../assets/images/accessories-banner-2.jpg";
import bannerThree from "../../assets/images/accessories-banner-3.jpg";
import bannerFour from "../../assets/images/accessories-banner-4.jpg";

// Icon URL-ləri
const deliveryIcon = "https://woodmart.xtemos.com/accessories/wp-content/uploads/sites/7/2022/04/accessories-infobox-1.svg";
const qualityIcon = "https://woodmart.xtemos.com/accessories/wp-content/uploads/sites/7/2022/04/accessories-infobox-2.svg";
const returnIcon = "https://woodmart.xtemos.com/accessories/wp-content/uploads/sites/7/2022/04/accessories-infobox-3.svg";

const bannersData = [
  {
    id: 1,
    subtitle: "Something completely new",
    title: "Cases for Phone",
    buttonText: "TO SHOP",
    image: bannerOne,
  },
  {
    id: 2,
    subtitle: "Accessories for watch",
    title: "Straps of Any Color",
    buttonText: "TO SHOP",
    buttonVariant: "btn-light border bg-transparent",
    image: bannerTwo,
  },
  {
    id: 3,
    subtitle: "Special offer",
    title: "Buy One and Get 50% Off the Second",
    buttonText: "READ MORE",
    buttonVariant: "btn-light border bg-transparent",
    image: bannerThree,
  },
  {
    id: 4,
    subtitle: "Try something completely",
    title: "Charger Discount",
    buttonText: "BUY NOW",
    buttonVariant: "btn-primary",
    image: bannerFour,
  },
];

const featuresData = [
  {
    id: 1,
    icon: deliveryIcon,
    title: "Fast Delivery",
    description: "Chances are there wasn't collaboration and checkpoints, there wasn't a process.",
  },
  {
    id: 2,
    icon: qualityIcon,
    title: "Best Quality",
    description: "It's content strategy gone awry right from the start. Forswearing the use of Lorem Ipsum.",
  },
  {
    id: 3,
    icon: returnIcon,
    title: "Free Return",
    description: "True enough, but that's not all that it takes to get things back on track out there for a text.",
  },
];

export const QualityGoods = () => {
  return (
    <section className="py-5 bg-white">
      <div className="container py-4">
        <div className="text-center mb-5">
          <div className="mb-5">
            <p
              className="mb-2 fw-normal"
              style={{ fontSize: "15px", color: "#2e6bc6" }}>
              There are some redeeming factors
            </p>
            <h2
              className="text-dark fw-bold mb-3"
              style={{ fontSize: "2.5rem", letterSpacing: "-0.5px" }}>
              We Provide High Quality Goods
            </h2>
            <p
              className="mx-auto fs-6"
              style={{ maxWidth: "600px", lineHeight: "1.6", color: "#777" }}>
              A client that's unhappy for a reason is a problem, a client that's
              unhappy though he or her can't
            </p>
          </div>

          <div className="row g-4 justify-content-center pt-3 mb-5">
            {featuresData.map((item) => (
              <div key={item.id} className="col-12 col-md-4 px-4">
                <div className="d-flex flex-column align-items-center">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="mb-3"
                    style={{ width: "60px", height: "auto" }} />

                  <h4
                    className="fw-bold text-dark mb-3"
                    style={{ fontSize: "1.35rem" }}>
                    {item.title}
                  </h4>
                  <p
                    className="text-muted mb-0"
                    style={{
                      fontSize: "15px",
                      lineHeight: "1.7",
                      maxWidth: "320px",
                      color: "#777",
                    }}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="row g-4 pt-4">
          <div className="col-12 col-md-4">
            <div
              className="position-relative overflow-hidden rounded-3 p-4 p-md-5 d-flex flex-column justify-content-between"
              style={{
                backgroundColor: "#f4f4f4",
                minHeight: "320px",
                backgroundImage: `url(${bannersData[0].image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}>
              <div style={{ maxWidth: "260px", zIndex: 2 }}>
                <p className="mb-2 fw-medium fs-6" style={{ color: "#2e6bc6" }}>
                  {bannersData[0].subtitle}
                </p>
                <h3 className="fw-bold text-dark mb-4 display-6 fs-3">
                  {bannersData[0].title}
                </h3>
                <button
                  className="btn fw-bold px-4 py-2 text-uppercase"
                  style={{ fontSize: "12px", letterSpacing: "1px", backgroundColor: "#2e6bc6", color: "#fff" }}>
                  {bannersData[0].buttonText}
                </button>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-8">
            <div
              className="position-relative overflow-hidden rounded-3 p-4 p-md-5 d-flex flex-column justify-content-between"
              style={{
                backgroundColor: "#f4f4f4",
                minHeight: "320px",
                backgroundImage: `url(${bannersData[1].image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}>
              <div style={{ maxWidth: "260px", zIndex: 2 }}>
                <p className="mb-2 fw-medium fs-6" style={{color: "#2e6bc6"}}>
                  {bannersData[1].subtitle}
                </p>
                <h3 className="fw-bold text-dark mb-4 display-6 fs-3">
                  {bannersData[1].title}
                </h3>
                <button
                  className={`btn ${bannersData[1].buttonVariant} fw-bold px-4 py-2 text-uppercase`}
                  style={{ fontSize: "12px", letterSpacing: "1px" }}>
                  {bannersData[1].buttonText}
                </button>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-8">
            <div
              className="position-relative overflow-hidden rounded-3 p-4 p-md-5 d-flex flex-column justify-content-between"
              style={{
                backgroundColor: "#f4f4f4",
                minHeight: "320px",
                backgroundImage: `url(${bannersData[2].image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}>
              <div style={{ maxWidth: "260px", zIndex: 2 }}>
                <p className="mb-2 fw-medium fs-6" style={{color: "#2e6bc6"}}>
                  {bannersData[2].subtitle}
                </p>
                <h3 className="fw-bold text-dark mb-4 display-6 fs-3">
                  {bannersData[2].title}
                </h3>
                <button
                  className={`btn ${bannersData[2].buttonVariant} fw-bold px-4 py-2 text-uppercase`}
                  style={{ fontSize: "12px", letterSpacing: "1px" }}>
                  {bannersData[2].buttonText}
                </button>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div
              className="position-relative overflow-hidden rounded-3 p-4 p-md-5 d-flex flex-column justify-content-between"
              style={{
                backgroundColor: "#f4f4f4",
                minHeight: "320px",
                backgroundImage: `url(${bannersData[3].image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}>
              <div style={{ maxWidth: "260px", zIndex: 2 }}>
                <p className="mb-2 fw-medium fs-6" style={{color: "#2e6bc6"}}>
                  {bannersData[3].subtitle}
                </p>
                <h3 className="fw-bold text-dark mb-4 display-6 fs-3">
                  {bannersData[3].title}
                </h3>
                <button
                  className="btn fw-bold px-4 py-2 text-uppercase"
                  style={{ fontSize: "12px", letterSpacing: "1px", backgroundColor: "#2e6bc6", color: "#fff" }}>
                  {bannersData[3].buttonText}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
};