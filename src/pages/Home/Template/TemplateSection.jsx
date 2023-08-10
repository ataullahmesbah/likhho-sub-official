
const TemplateSection = () => {
    const containerStyle = {
        maxHeight: '400px',
        overflowY: 'auto',
    };

    return (
        <div className="mt-20">
            <h2 className="text-center text-4xl text-blue-950 font-bold">Our Popular Template</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 mt-5">
                <div
                    className="rounded-lg overflow-hidden transition duration-300 transform hover:scale-105 relative"
                    style={containerStyle}
                >
                    <img
                        className="w-full"
                        src="https://i.ibb.co/h181Qwg/tem2.webp"
                        alt=""
                    />
                    <div className="absolute inset-0 bg-black opacity-0 hover:opacity-30 transition duration-300"></div>
                </div>
                <div
                    className="rounded-lg overflow-hidden transition duration-300 transform hover:scale-105 relative"
                    style={containerStyle}
                >
                    <img
                        className="w-full"
                        src="https://i.ibb.co/VJQTMX1/tem3.png"
                        alt=""
                    />
                    <div className="absolute inset-0 bg-black opacity-0 hover:opacity-30 transition duration-300"></div>
                </div>
                <div
                    className="rounded-lg overflow-hidden transition duration-300 transform hover:scale-105 relative"
                    style={containerStyle}
                >
                    <img
                        className="w-full"
                        src="https://i.ibb.co/ZBFXd68/tem1.webp"
                        alt=""
                    />
                    <div className="absolute inset-0 bg-black opacity-0 hover:opacity-30 transition duration-300"></div>
                </div>
            </div>
        </div>
    );
};

export default TemplateSection;
