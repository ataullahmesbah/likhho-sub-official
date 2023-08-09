

const TemplateSection = () => {
    return (
        <div className="mt-5">
            <h2 className="text-center text-3xl font-bold">Our Popular Template</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 mt-5">
                <div className="rounded-lg overflow-hidden transition duration-300 transform hover:scale-105">
                    <img className="w-full" src="https://i.ibb.co/4RdVCYf/template1.jpg" alt="" />
                </div>
                <div className="rounded-lg overflow-hidden transition duration-300 transform hover:scale-105">
                    <img className="w-full" src="https://i.ibb.co/rZ6b0cH/template2.jpg" alt="" />
                </div>
                <div className="rounded-lg overflow-hidden transition duration-300 transform hover:scale-105">
                    <img className="w-full" src="https://i.ibb.co/jVHGjM5/template3.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default TemplateSection;
