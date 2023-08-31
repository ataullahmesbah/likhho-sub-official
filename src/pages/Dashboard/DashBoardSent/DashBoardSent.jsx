import React from 'react';
import { BsFillPenFill } from "react-icons/bs";

const DashBoardSent = () => {
    return (
        <div>
            <div>
                <h1>Dochub Inbox</h1>
                <p>Your inbox contains documents that require your action in order to complete them.</p>
            </div>
            <div>
                <div>
                    <p className='inline-flex'> <BsFillPenFill></BsFillPenFill> Sign request</p>
                </div>
                <div></div>
                <div>

                </div>
            </div>
        </div>
    );
};

export default DashBoardSent;