import Drag from "../pages/Drag&Drop/Drag";
import Devs from "../pages/Home/Devs/Devs";
import EditSection from "../pages/Home/EditSection/EditSection";
import FAQ from "../pages/Home/FAQ/FAQ";
import Review from "../pages/Home/Review/Review";
import TemplateSection from "../pages/Home/Template/TemplateSection";



const Main = () => {
    return (
        <div>
            <Drag></Drag>
            <EditSection></EditSection>
            <TemplateSection></TemplateSection>
            <Review></Review>
            <FAQ></FAQ>
            <Devs></Devs>
        </div>
    );
};

export default Main;
