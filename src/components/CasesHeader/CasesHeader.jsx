// Icon
import { FaArrowLeftLong } from "react-icons/fa6";

// Image
import bgPicture from "/src/assets/images/cases-bg.jpg";

export const CasesHeader = () => {
    return (
        <div
            className="position-relative d-flex align-items-center justify-content-center cases-header-wrap"
            style={{
                width: "100%",
                backgroundImage: `url(${bgPicture})`,
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}>
            <style>{`
                .cases-header-wrap {
                    height: 260px;
                }
                @media (max-width: 576px) {
                    .cases-header-wrap {
                        height: 180px;
                    }
                }
                .cases-header-title {
                    font-size: 68px;
                }
                @media (max-width: 768px) {
                    .cases-header-title {
                        font-size: 42px;
                    }
                }
                @media (max-width: 576px) {
                    .cases-header-title {
                        font-size: 30px;
                    }
                }
            `}</style>

            <div className="position-absolute top-0 start-0 w-100 h-100" />

            <div className="position-relative d-flex justify-content-center align-items-center gap-3 text-white">
                <FaArrowLeftLong size={30} role="button" />
                <h1 className="mb-0 fw-medium cases-header-title">
                    Cases
                </h1>
            </div>
        </div>
    )
}