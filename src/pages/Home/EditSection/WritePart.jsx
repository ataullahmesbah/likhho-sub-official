
import { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';

const WritePart = () => {
    const content =
        "In the realm of modern productivity and collaboration, the evolution of document editing is taking a significant stride. Similar to the groundbreaking concept introduced by Google Docs, the emergence of a Google Docs-like website brings forth a digital workspace designed for seamless content creation and teamwork. This web-based platform amalgamates the convenience of cloud storage with intuitive text editing capabilities, granting users the ability to compose, edit, and refine their work with ease. Whether crafting individual pieces or collaborating with a team, the platform's real-time co-authoring feature stands out, enabling multiple users to contribute concurrently, fostering a fluid exchange of ideas and feedback. With familiar formatting options and the flexibility to adapt to diverse document types, this innovative platform redefines the dynamics of modern document editing, catering to professionals, students, and creatives alike.";

    const [showFullContent, setShowFullContent] = useState(false);

    return (
        <div className="px-5 mt-4">
            <p>
                {showFullContent ? content : `${content.slice(0, 400)}...`}
            </p>
            {!showFullContent && (
                <button className='btn-sm btn btn-neutral' onClick={() => setShowFullContent(true)}>
                    Read More <FaArrowRight />
                </button>
            )}
        </div>
    );
};

export default WritePart;
