import React from 'react';
import './TemplateSection.css';

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
        <div className="pt-20 bg-gray-100 p-11 pb-20">
            <h2 className="text-center text-4xl text-blue-950 font-bold">Our Popular Template</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2 w-4/6  mx-auto mt-5">
                {/* Template 1 */}


                
                <div className="template relative group rounded-lg overflow-hidden transform hover:scale-105  max-h-80 overflow-y-auto border-4 border-gray-500 hover:border-orange-500  p-4 m-4">
                    <img
                        className="w-full h-full p-2" 
                        src="https://i.ibb.co/h181Qwg/tem2.webp"
                        alt=""
                    />
                    <div className="overlay"></div>
                    <div className="overlay-content">
                        <p className="text-xl font-bold mb-2 text-white">Medical Form Template</p>
                        <p className="text-sm text-white">Short description goes here</p>
                        <button
                            className="mt-2  btn-sm bg-blue-950 text-white rounded-md hover:bg-opacity-90 focus:outline-none"
                            onClick={handleViewClick}
                        >
                            View
                        </button>
                    </div>

                    
                </div>
               



                {/* Template 2 */}
                <div className="template relative group rounded-lg overflow-hidden transform max-h-80 hover:scale-105  overflow-y-auto hover:border-orange-500 border-4 border-gray-500 p-4 m-4">
                    <img
                        className="w-full h-full p-2" 
                        src="https://i.ibb.co/VJQTMX1/tem3.png"
                        alt=""
                    />
                    <div className="overlay"></div>
                    <div className="overlay-content">
                        <p className="text-xl font-bold mb-2 text-white">Resume Template</p>
                        <p className="text-sm text-white">Short description goes here</p>
                        <button
                            className="mt-2 btn-sm bg-blue-950 text-white rounded-md hover:bg-opacity-90 focus:outline-none"
                            onClick={handleViewClick}
                        >
                            View
                        </button>
                    </div>
                </div>

                {/* Template 3 */}
                <div className="template relative group rounded-lg overflow-hidden transform  max-h-80 hover:scale-105 hover:border-orange-500  overflow-y-auto border-4 border-gray-500 p-4 m-4">
                    <img
                        className="w-full h-full p-2" 
                        src="https://i.ibb.co/ZBFXd68/tem1.webp"
                        alt=""
                    />
                    <div className="overlay"></div>
                    <div className="overlay-content">
                        <p className="text-xl font-bold mb-2 text-white">Medical Form Template 2</p>
                        <p className="text-sm text-white">Short description goes here</p>
                        <button
                            className="mt-2 btn-sm bg-blue-950 text-white rounded-md hover:bg-opacity-90 focus:outline-none"
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