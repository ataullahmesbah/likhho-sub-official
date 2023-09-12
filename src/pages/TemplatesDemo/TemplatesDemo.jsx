import { useState } from "react";
import Templates from "../Template/Templates";
import Container from "../shared/Container";
import { useEffect } from "react";
import DemoTemplates from "./DemoTemplates";


const TemplatesDemo = () => {
    const [templates, setTemplates] = useState([]);

    useEffect(() => {
        fetch('/templates.json')
            .then(res => res.json())
            .then(data => {
                setTemplates(data)

            })
    }, [])






    return (
        <div>

            {/* templates banner */}
            <div className="relative bg-gradient-to-r from-gray-900 via-purple-950 to-purple-800 font-poppins lg:pb-0 pb-5">
                <div className="lg:space-x-4 md:space-x-2 mx-4 lg:mx-64 items-center ">

                    <div className=" grid grid-cols-2  justify-between gap-4 lg:space-x-72 items-center relative">
                        <div className="space-y-5 mb-7 lg:mb-0 relative">
                            <h1 className="text-3xl md:text-5xl  text-white relative z-10">
                                100+ Premium Templates Print, Mail, Download PDF
                                <span className="text-lime-300"> Likho</span> Invoice
                            </h1>
                            <p className="text-gray-200 relative z-10">
                                Likho Invoice offers a gallery of Premium templates. Create and send professional invoices in just 2 minutes, with fully customizable templates from Likho. Try for PREMIUM. Customize your invoices
                            </p>
                            {/* Create corner stands in top-left and bottom-right corners */}
                            <div className="absolute top-28 left-16 bottom-6 w-4 radio-xs h-4 bg-gradient-to-tr from-purple-800 to-transparent"></div>
                            <div className="absolute bottom-0 right-0 w-4 h-4 bg-gradient-to-bl from-purple-800 to-transparent"></div>
                        </div>

                        <img
                            className="h-auto md:h-3/5 mx-auto"
                            src="https://i.ibb.co/181SS1L/image.png"
                            alt=""
                        />
                    </div>

                </div>
            </div>
            {/* templates banner finish */}

            {/* https://github.com/ckeditor/ckeditor4-vue/issues/18 */}

            {/* Templates Demo Roll Section */}

            <div className="">


                <div className="font-poppins lg:mt-20 space-y-6 lg:mb-16 mt-8 mb-8">

                    <h1 className="text-blue-950 lg:text-4xl text-center font-semibold">Premium Templates</h1>
                    <p className="text-gray-700 text-center">Customizable templates ensure consistent document structures. Define full or <br />partial templates to apply and maintain.</p>

                    <Container>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {templates.map((template) => (
                                <DemoTemplates key={template._id} template={template} />
                            ))}
                        </div>
                    </Container>
                </div>





            </div>





        </div>
    );
};

export default TemplatesDemo;