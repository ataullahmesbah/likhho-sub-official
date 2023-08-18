
import Counter from "../pages/Counting doc/Counter";
import Developer from "../pages/Developer/Developer";
import Drag from "../pages/Drag&Drop/Drag";
import EditDocs from "../pages/EditDocs/EditDocs";

import FAQ from "../pages/Home/FAQ/FAQ";
import Review from "../pages/Home/Review/Review";
import Instruction from "../pages/Instruction/Instruction";
import MarqueeSection from "../pages/MarqueeSection/MarqueeSection";
import ReadSection from "../pages/ReadSection/ReadSection";
import TemplateSection from "../pages/Template/TemplateSection";




const Main = () => {
    return (
        <div>
            <Drag></Drag>
            <EditDocs></EditDocs>
            <TemplateSection></TemplateSection>
            <MarqueeSection></MarqueeSection>
            <ReadSection></ReadSection>
            <Instruction></Instruction>
            <Review></Review>
            <Developer></Developer>

            {/* <Counter></Counter> */}
            {/* <FAQ></FAQ> */}
            
        </div>
    );
};

export default Main;
