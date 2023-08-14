import React from 'react';
import './TemplateSection.css'

const TemplateSection = () => {
    const handleViewClick = (event) => {
        event.preventDefault();
        const template = event.target.closest('.template');
        if (template) {
            template.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    };

    

    return (
        <div className="mt-20">
            <h2 className="text-center text-4xl text-blue-950 font-bold">Our Popular Template</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 w-4/5 mx-auto mt-5">
                {/* Template 1 */}
                <div className="template relative group rounded-lg overflow-hidden transform hover:scale-105 max-h-64 overflow-y-auto">
                    <img
                        className="w-full"
                        src="https://i.ibb.co/h181Qwg/tem2.webp"
                        alt=""
                    />
                    <div className="overlay"></div>
                    <div className="overlay-content">
                        <p className="text-xl font-bold mb-2 text-white">Medical Form Template</p>
                        <p className="text-sm text-white">Short description goes here</p>
                        <button
                            className="mt-2 px-4 py-2 bg-blue-950 text-white rounded-md hover:bg-opacity-90 focus:outline-none"
                            onClick={handleViewClick}
                        >
                            View
                        </button>
                    </div>
                </div>

                {/* Template 2 */}
                <div className="template relative group rounded-lg overflow-hidden transform hover:scale-105 max-h-64 overflow-y-auto">
                    <img
                        className="w-full"
                        src="https://i.ibb.co/VJQTMX1/tem3.png"
                        alt=""
                    />
                    <div className="overlay"></div>
                    <div className="overlay-content">
                        <p className="text-xl font-bold mb-2 text-white">Resume Template</p>
                        <p className="text-sm text-white">Short description goes here</p>
                        <button
                            className="mt-2 px-4 py-2 bg-blue-950 text-white rounded-md hover:bg-opacity-90 focus:outline-none"
                            onClick={handleViewClick}
                        >
                            View
                        </button>
                    </div>
                </div>

                {/* Template 3 */}
                <div className="template relative group rounded-lg overflow-hidden transform hover:scale-105 max-h-64 overflow-y-auto">
                    <img
                        className="w-full"
                        src="https://i.ibb.co/ZBFXd68/tem1.webp"
                        alt=""
                    />
                    <div className="overlay"></div>
                    <div className="overlay-content">
                        <p className="text-xl font-bold mb-2 text-white">Medical Form Template 2</p>
                        <p className="text-sm text-white">Short description goes here</p>
                        <button
                            className="mt-2 px-4 py-2 bg-blue-950 text-white rounded-md hover:bg-opacity-90 focus:outline-none"
                            onClick={handleViewClick}
                        >
                            View
                        </button>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default TemplateSection;




