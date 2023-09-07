import React from "react";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-800 text-white p-8">
            <div className="container mx-auto flex flex-wrap">
                <div className="w-full lg:w-1/4 mb-8">
                    <h3 className="text-3xl mb-4">Likho</h3>
                    <p>Create, collaborate, and streamline your documents effortlessly with Likho Docs.</p>
                </div>
                <div className="w-full lg:w-1/4 mb-8">
                    <h4 className="text-xl mb-4">Product</h4>
                    <ul>
                        <li><a className="text-gray-400 hover:text-white">Features</a></li>
                        <li><a className="text-gray-400 hover:text-white">Pricing</a></li>
                        <li><a className="text-gray-400 hover:text-white">Marketing</a></li>
                        <li><a className="text-gray-400 hover:text-white">Advertisement</a></li>
                    </ul>
                </div>
                <div className="w-full lg:w-1/4 mb-8">
                    <h4 className="text-xl mb-4">Solutions</h4>
                    <ul>
                        <li><a className="text-gray-400 hover:text-white">Overview</a></li>
                        <li><a className="text-gray-400 hover:text-white">Tech</a></li>
                        <li><a className="text-gray-400 hover:text-white">Government</a></li>
                        <li><a className="text-gray-400 hover:text-white">Non-Profit</a></li>
                        <li><a className="text-gray-400 hover:text-white">Financial Services</a></li>
                    </ul>
                </div>
                <div className="w-full lg:w-1/4 mb-8">
                    <h4 className="text-xl mb-4">Customers</h4>
                    <ul>
                        <li><a className="text-gray-400 hover:text-white">Highlights</a></li>
                        <li><a className="text-gray-400 hover:text-white">Case Studies</a></li>
                    </ul>
                </div>
            </div>
            <div className="border-t border-gray-600 pt-6 mt-8">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="text-sm text-gray-400">
                        &copy; {currentYear} Likho Editor. All rights reserved.
                    </div>
                    <div>
                        <a className="text-gray-400 hover:text-white mx-2" href="#">
                            <i className="fab fa-facebook"></i>
                        </a>
                        <a className="text-gray-400 hover:text-white mx-2" href="#">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a className="text-gray-400 hover:text-white mx-2" href="#">
                            <i className="fab fa-linkedin"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
