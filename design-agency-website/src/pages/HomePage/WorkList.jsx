/* eslint-disable no-unused-vars */
import React from 'react';

const WorkList = () => {
    return (
        <div className='bg-white'>
            <div id="" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
                <h1 className="text-4xl font-bold text-center text-[#20B15A]">WORK LIST</h1>
                <p className="text-center py-0 font-bold text-[#000000]">
                    We provide the perfect solution
                </p>
                <p className='text-center py-0 font-bold text-[#000000]'>
                    to your business growth
                </p>

               <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 font-bold">
                    <div className="card bg-base-100 shadow-xl">
                        <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>

                    <div className="card bg-base-100 shadow-xl">
                        <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>

                    <div className="card bg-base-100 shadow-xl">
                        <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
    
            </div>
        </div>
    );
};

export default WorkList;