import ReactPlayer from 'react-player';

const CreativeWorkShop = () => {
    return (
        <div>
            <h1 className="text-4xl font-extrabold text-center m-10">Creative Work Show</h1>
            <section className="py-10 bg-gray-100">
                <div className="container mx-auto">
                    <h2 className="text-2xl font-semibold mb-4">Video Section</h2>
                    <div className="relative">
                        <style>
                            {`
                                .react-player {
                                    .video-react-control-bar {
                                        display: none !important; // Hide the entire control bar
                                    }
                                    .video-react-play-progress {
                                        display: none !important; // Hide the timing line
                                    }
                                }
                            `}
                        </style>
                        <ReactPlayer
                            url="/public/home-banner.mp4"
                            controls={true} // Use controls for auto play and custom play button
                            playing
                            width="100%"
                            height="100%"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CreativeWorkShop;
