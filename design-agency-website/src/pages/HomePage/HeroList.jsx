/* eslint-disable no-unused-vars */
import React from 'react';

const HeroList = () => {
    return (
        <div>
            <div className="hero static min-h-screen bg-[#adceba]">

                <div className="hero-content flex-col lg:flex-row-reverse h-837">
                    <img src="/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold text-black">Box Office News!</h1>
                        <p className="py-6 text-black">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 flex justify-around items-center py-8 bg-white w-full max-w-1440 mx-auto h-120">
                <div>
                    <img src="/images/google-logo.png" alt="Google" className="max-w-16" />
                </div>
                <div>
                    <img src="/images/trello-logo.png" alt="Trello" className="max-w-16" />
                </div>
                <div>
                    <img src="/images/monday-logo.png" alt="Monday.com" className="max-w-16" />
                </div>
                <div>
                    <img src="/images/notion-logo.png" alt="Notion" className="max-w-16" />
                </div>
                <div>
                    <img src="/images/slack-logo.png" alt="Slack" className="max-w-16" />
                </div>
            </div>
                

            </div>

            {/* <div className="flex justify-around py-8 bg-white w-1440 h-120">
                <div>
                    <img src="/images/google-logo.png" alt="Google" className="max-w-16" />
                </div>
                <div>
                    <img src="/images/trello-logo.png" alt="Trello" className="max-w-16" />
                </div>
                <div>
                    <img src="/images/monday-logo.png" alt="Monday.com" className="max-w-16" />
                </div>
                <div>
                    <img src="/images/notion-logo.png" alt="Notion" className="max-w-16" />
                </div>
                <div>
                    <img src="/images/slack-logo.png" alt="Slack" className="max-w-16" />
                </div>
            </div> */}
        </div>


            
    );
};

export default HeroList;