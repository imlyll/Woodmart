// Icon
import { FaArrowLeftLong } from "react-icons/fa6";

// Image
import bgPicture from "/src/assets/images/cases-bg.jpg";

export const CasesHeader = () => {
    return (
        <div
            className="position-relative d-flex align-items-center justify-content-center"
            style={{
                width: "100%",
                height: "260px",
                backgroundImage: `url(${bgPicture})`,
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}>

            <div className="position-absolute top-0 start-0 w-100 h-100" />

            <div className="position-relative d-flex justify-content-center align-items-center gap-3 text-white">
                <FaArrowLeftLong size={30} role="button" />
                <h1 className="mb-0 fw-medium" style={{ fontSize: "68px" }}>
                    Cases
                </h1>
            </div>
        </div>
    )
}