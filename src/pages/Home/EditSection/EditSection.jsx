import PicPart from "./PicPart";
import WritePart from "./WritePart";

const EditSection = () => {
    return (
        <div className="mt-10">
            <h2 className="text-center px-4 mb-5 text-4xl text-blue-950 font-bold">Edit documents with LIkho</h2>
            
            <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center">
                <PicPart></PicPart>
                <WritePart></WritePart>
            </div>
        </div>
    );
};

export default EditSection;