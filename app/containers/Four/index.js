import Header from '@/components/Header';
import React from 'react';

export default function Four() {
  return (
    <>
      <Header />
      <div
        style={{ backgroundImage: 'url("/images/bglast.png")' }}
        className="lg:min-h-screen w-full bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center px-4 sm:px-8 md:px-16"
      >
        <div className="  flex justify-center items-center  lg:py-[40px] bg-opacity-50">
          <h1
            className=" text-white lg:text-[60px] text-[35px] font-bold p-8"
            style={{
              backgroundImage:
                'linear-gradient(91.18deg, #D4AC54 13.43%, #FFDEAC 50.76%, #E3BA5D 94.58%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Bingo
          </h1>
        </div>
        <div className="">
          <h1 className="z-50  lg:text-[45px] text-[25px] items-center text-white flex font-josefin justify-center">
            Comming soon
          </h1>
          <div className=" relative flex justify-center  lg:mt-[-200px]">
            <img
              src="/images/3cart.png"
              alt="3cart"
              className="h-auto w-auto"
            />
            <div className="flex  absolute -bottom-10 justify-center items-center  lg:mt-[-350px]   text-center">
              <img
                src="/images/for.png"
                alt="4balls"
                className="flex justify-center h-auto w-auto  items-end text-center"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
