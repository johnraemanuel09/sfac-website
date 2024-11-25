import React from 'react';
import basicEd from '../../../public/basicEd.jpg';
import higherEd from '../../../public/higherEd.jpg';

const Hero2 = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -mx-4 -mb-10 text-center">
            <div className="sm:w-1/2 mb-10 px-4">
              <div className="rounded-lg h-[400px] overflow-hidden"> 
                <img
                  alt="content"
                  className="object-contain object-center h-full w-full"
                  src="/basicEd.jpg"
                />
              </div>
              <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
                BASIC EDUCATION DEPARTMENT
              </h2>
              <button className="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">
                Button
              </button>
            </div>
            <div className="sm:w-1/2 mb-10 px-4">
              <div className="rounded-lg h-[400px] overflow-hidden"> 
                <img
                  alt="content"
                  className="object-contain object-center h-full w-full"
                  src="/higherEd.jpg"
                />
              </div>
              <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
                HIGHER EDUCATION DEPARTMENT
              </h2>
              <button className="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">
                Button
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero2;