import Header from '@/components/Header';
import React from 'react';

export default function Five() {
  return (
    <>
      <Header />
      <div>
        <div>
          {/* <img src="shape.png" alt="shape" /> */}
          {/* <div className="justify-center mt-[100px] flex">
            <img src="/images/dice.png" alt="dice" className="" />
            <h1
              style={{
                backgroundImage:
                  'linear-gradient(91.18deg, #D4AC54 13.43%, #FFDEAC 50.76%, #E3BA5D 94.58%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
              className="font-semibold text-[55px] p-5"
            >
              Casino
            </h1>
          </div> */}
          <div className="flex flex-col items-center justify-center py-[30px]">
            <img src="/images/dice.png" alt="dice" className="w-auto h-auto" />

            <h1
              style={{
                backgroundImage:
                  'linear-gradient(91.18deg, #D4AC54 13.43%, #FFDEAC 50.76%, #E3BA5D 94.58%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
              className="font-semibold text-[55px] p-5 text-center"
            >
              Casino
            </h1>
          </div>
          <div className="lg:flex container justify-center">
            <div className="flex-col items-center">
              <h1 className="lg:text-[50px] text-[28px] flex items-center lg:justify-start justify-center font-josefin lg:py-8 p-2 lg:p-5">
                The Casino
              </h1>
              <p className="text-[19px] font-sans leading-[25px] py-2 lg:leading-[30px] lg:p-5">
                Step into the thrilling world of Casino games at Royal Mega,
                where every spin, deal, and roll brings you closer to winning
                big. Experience a wide range of classic and modern casino games
                designed to keep the adrenaline pumping. With us, every game is
                a chance to win and a moment to remember!
              </p>
              <div className="flex justify-center items-center py-3 lg:justify-start">
                <button
                  style={{
                    background:
                      'linear-gradient(0deg, #FF9C19 40%, #FFDD2D 100%)',
                    boxShadow: `
  -4px -4px 10px rgba(255, 156, 25, 0.5),
   4px -4px 10px rgba(255, 221, 45, 0.5),
  -4px  0px 10px rgba(255, 156, 25, 0.4),
   4px  0px 10px rgba(255, 221, 45, 0.4)
`,
                  }}
                  className="lg:mx-5 flex justify-center items-center shadow-2xl px-[24px] lg:px-8 p-2 text-black text-[17px] lg:text-[19px] rounded-md "
                >
                  Coming soon
                </button>
              </div>
            </div>
            <div className="p-5">
              <img
                src="/images/teenpatti.png"
                alt="3patti"
                className="lg:p-8"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
