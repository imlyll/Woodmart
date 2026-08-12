import { Header } from "../components/Header/Header";
import { Categories } from "../components/Categories/Categories";
import { NewArrivals } from "../components/NewArrivals/NewArrivals";
import { QualityGoods } from "../components/QualityGoods/QualityGoods";
import { PopularProducts } from "../components/PopularProducts/PopularProducts";
import { Gadgets } from "../components/Gadgets/Gadgets";
import {PreFooter} from "../components/PreFooter/PreFooter";

export const Home = () => {
    return (
        <>
            <Header />
            <Categories />
            <NewArrivals />
            <QualityGoods />
            <PopularProducts />
            <Gadgets />
            <PreFooter />
        </>
    );
};