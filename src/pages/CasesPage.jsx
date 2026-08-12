import { CasesHeader } from "../components/CasesHeader/CasesHeader";
import { CasesCategory } from "../components/CasesCategory/CasesCategory";
import { CasesFlex } from "../components/CasesFlex/CasesFlex";
import { CasesPopularProducts } from "../components/CasesPopularProducts/CasesPopularProducts";

export const CasesPage = () => {
    return (
        <div>
            <CasesHeader />
            <CasesCategory />
            <CasesFlex />
            <CasesPopularProducts />
        </div>
    )
}