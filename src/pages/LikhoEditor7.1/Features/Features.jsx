import React from 'react';

const Features = () => {
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>



            <div className="drawer-side lg:mt-20 lg:mx-20 rounded-2xl ">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                    {/* Sidebar content here */}
                    <h4 className='text-xl font-semibold font-[Poppins] text-blue-950 px-4  mb-5'>Ultra Features</h4>
                    <li><a>Comments</a></li>
                    <li><a>Revision History</a></li>
                    <li><a>Real-time Collaboration</a></li>
                    <li><a>Import from Word</a></li>
                    <li><a>Export to PDF and Word</a></li>
                    <li><a>Spell and grammar check</a></li>
                    <li><a>Pagination</a></li>
                    <li><a>Pagination</a></li>
                    <li><a>Math equations</a></li>

                    <h4 className='text-xl font-semibold font-[Poppins] text-blue-950 px-4  mb-5 mt-5'>Pro Features</h4>
                    <li><a>Templates</a></li>
                    <li><a>Document Outline</a></li>
                    <li><a>Math equations</a></li>
                </ul>

            </div>
        </div>
    );
};

export default Features;