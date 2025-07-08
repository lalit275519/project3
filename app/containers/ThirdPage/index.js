import Header from '@/components/Header';
import React from 'react';
import { CiCalendar } from 'react-icons/ci';
export default function ThirdPage() {
  return (
    <>
      <Header />
      <div className="container">
        <div className="flex py-[30px] lg:py-[50px]  lg:mt-[80px] justify-center">
          <h1
            className="text-[40px] h-[50px]  font-bold "
            style={{
              backgroundImage:
                'linear-gradient(91.18deg, #D4AC54 13.43%, #FFDEAC 50.76%, #E3BA5D 94.58%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Lottery
          </h1>
        </div>

        <div
          className=" justify-center "
          style={{
            background:
              'linear-gradient(90deg, #D0A549 0%, #E3BA5D 12%, #C8A443 44%, #000000 79%, #D0A549 100%)',
          }}
        >
          <div className="lg:flex  justify-center  lg:justify-between relative py-[20px] ">
            <div className="flex text-[50px] text-center p-5 items-center text-black">
              <h1>Lottery</h1>
            </div>

            {/* <div
              className="flex gap-5 p-4 z-20 "
              style={{
                backgroundImage: 'url("/images/btn3.png")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            > */}
            <div
              className="lg:flex lg:gap-5 p-4 lg:z-20"
              style={{
                backgroundImage: `
      linear-gradient(to right, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.7)),
      url("/images/btn3.png")
    `,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            >
              {/* Your content here */}

              <div
                className="lg:inline-block p-[2px] rounded-full"
                style={{
                  background: `
        linear-gradient(0deg, rgba(121, 121, 121, 0.2), rgba(121, 121, 121, 0.2)),
        linear-gradient(91.18deg, #D4AC54 13.43%, #FFDEAC 50.76%, #E3BA5D 94.58%)
      `,
                }}
              >
                <button className="bg-black text-white text-[16px] font-Poppins px-6 py-2 rounded-full w-auto h-[50px]">
                  Winners
                </button>
              </div>

              <div
                className="inline-block p-[2px] rounded-full"
                style={{
                  background: `
        linear-gradient(0deg, rgba(121, 121, 121, 0.2), rgba(121, 121, 121, 0.2)),
        linear-gradient(91.18deg, #D4AC54 13.43%, #FFDEAC 50.76%, #E3BA5D 94.58%)
      `,
                }}
              >
                <button className="bg-black text-white text-[16px] font-Poppins px-6 py-2 rounded-full w-auto h-[50px]">
                  Prizes & info
                </button>
              </div>

              <div
                className="inline-block p-[2px] rounded-full"
                style={{
                  background: `
        linear-gradient(0deg, rgba(121, 121, 121, 0.2), rgba(121, 121, 121, 0.2)),
        linear-gradient(91.18deg, #D4AC54 13.43%, #FFDEAC 50.76%, #E3BA5D 94.58%)
      `,
                }}
              >
                <button className="bg-black text-white text-[16px] font-Poppins px-6 py-2 rounded-full w-auto h-[50px]">
                  View all Draws
                </button>
              </div>
            </div>
          </div>
          <div className="lg:flex p-5 gap-4">
            <div className=" w-full">
              <img src="/images/mega.png" className="h-[50px]" alt="star" />
              <div
                className=" border rounded-xl bg-white mt-[-10px] 
               "
              >
                <div className="flex justify-between  px-3 py-3">
                  <p className="text-[20px] text-[#000000]">New lottery 1</p>
                  <p className="text-[20px] text-[#000000] gap-1 flex">
                    <CiCalendar className="font-semibold mx-1" /> Tuesday, July
                    9, 2024
                  </p>
                </div>
                <hr className="border-t border-[#E3BA5D] w-full  " />
                <div className="text-[19px] py-1 justify-center flex text-black">
                  TIMER
                </div>
                <div className="flex text-black py-3 gap-5 justify-center">
                  <div className=" ">
                    <h1 className="px-4 p-2 rounded-md justify-center items-center flex text-center text-[40px] border">
                      00
                    </h1>
                    <p className="flex justify-center py-1 text-[12px]">
                      Hours
                    </p>
                  </div>
                  <div className=" ">
                    <h1 className="px-4 p-2 rounded-md justify-center items-center flex text-center text-[40px] border">
                      01
                    </h1>
                    <p className="flex justify-center py-1 text-[12px]">
                      Minutes
                    </p>
                  </div>
                  <div className=" ">
                    <h1 className="px-4 p-2 rounded-md justify-center items-center flex text-center text-[40px] border">
                      00
                    </h1>
                    <p className="flex justify-center py-1 text-[12px]">
                      Seconds
                    </p>
                  </div>
                </div>
                <div className="flex w-[20%] h-[4px] lg:h-[8px] bg-[#FD6259]"></div>
                <div className="py-5 mt-[20px]">
                  <div
                    className="w-full flex justify-between
                    h-[64px]  bg-[linear-gradient(91.18deg,_#D4AC54_13.43%,_#E3BA5D_94.58%)]"
                  >
                    <div className="flex">
                      <img
                        src="/images/winner.png"
                        className="h-[83px] mt-[-17px] lg:mx-2"
                        alt="winner"
                      />
                      <div className="">
                        <p className="lg:text-[16px]  py-1 font-titillium text-black">
                          Join
                        </p>
                        <h1 className="text-[20px] text-black">5,78,651</h1>
                      </div>
                    </div>
                    <div className="flex lg:mr-[50px]">
                      <img
                        src="/images/jack.png"
                        className="h-[83px] mt-[-17px] mx-2"
                        alt="winner"
                      />
                      <div className="">
                        <p className="text-[16px] py-1 font-titillium text-black">
                          Join
                        </p>
                        <h1 className="text-[20px] text-black">5,78,651</h1>
                      </div>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="p-5 ">
                      <h1 className="text-black text-[18px] lg:text-[22px]">
                        Choose Your Series:
                      </h1>
                      <div className="flex justify-center gap-4 lg:gap-5 py-2 lg:py-3 text-black">
                        <button className="inset-shadow-2xs p-2 lg:p-3 border shadow-xl  rounded-lg text-[24px]">
                          A
                        </button>
                        <button className="inset-shadow-2xs p-2 lg:p-3 border shadow-xl  rounded-lg text-[24px]">
                          A
                        </button>
                      </div>
                    </div>
                    <div className="p-5 ">
                      <h1 className="text-black text-[18px] lg:text-[22px]">
                        Quantity:{' '}
                      </h1>
                      <div className="flex justify-end gap-4 lg:gap-5 ml-[20px] lg:ml-[50px] py-2 lg:py-3 text-black">
                        <button className="inset-shadow-2xs p-2 lg:p-3 border shadow-xl  rounded-lg text-[24px]">
                          -
                        </button>
                        <button className="inset-shadow-2xs p-2 lg:p-3 border shadow-xl  rounded-lg text-[24px]">
                          0
                        </button>
                        <button className="inset-shadow-2xs p-2 lg:p-3 border shadow-xl  rounded-lg text-[24px]">
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  <hr className="border-t border-[#E3BA5D] w-full  " />
                  <div className=" justify-between py-4 mt-[20px] flex">
                    <button
                      style={{
                        background:
                          'linear-gradient(91.18deg, #D4AC54 13.43%, #E3BA5D 94.58%)',
                      }}
                      className="text-black lg:w-[230px] ml-[-5px] lg:ml-[-20px] px-4 py-2 rounded-r-lg font-semibold"
                    >
                      Entry ₹40
                    </button>
                    <button
                      style={{
                        background:
                          'linear-gradient(91.18deg, #D4AC54 13.43%, #E3BA5D 94.58%)',
                      }}
                      className="text-black px-8 py-3 lg:mx-[20px] rounded-3xl font-semibold"
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className=" w-full">
              <img
                src="/images/mega.png"
                className="lg:h-[50px] lg:py-0  py-[20px]"
                alt="star"
              />
              <div
                className=" border rounded-xl bg-white mt-[-30px] lg:mt-[-10px] 
               "
              >
                <div className="flex justify-between  px-3 py-3">
                  <p className="text-[20px] text-[#000000]">New lottery 2</p>
                  <p className="text-[20px] text-[#000000] gap-1 flex">
                    <CiCalendar className="font-semibold mx-1" /> Tuesday, July
                    9, 2024
                  </p>
                </div>
                <hr className="border-t border-[#E3BA5D] w-full  " />
                <div className="text-[19px] py-1 justify-center flex text-black">
                  TIMER
                </div>
                <div className="flex text-black py-3 gap-5 justify-center">
                  <div className=" ">
                    <h1 className="px-4 p-2 rounded-md justify-center items-center flex text-center text-[40px] border">
                      12
                    </h1>
                    <p className="flex justify-center py-1 text-[12px]">
                      Hours
                    </p>
                  </div>
                  <div className=" ">
                    <h1 className="px-4 p-2 rounded-md justify-center items-center flex text-center text-[40px] border">
                      01
                    </h1>
                    <p className="flex justify-center py-1 text-[12px]">
                      Minutes
                    </p>
                  </div>
                  <div className=" ">
                    <h1 className="px-4 p-2 rounded-md justify-center items-center flex text-center text-[40px] border">
                      00
                    </h1>
                    <p className="flex justify-center py-1 text-[12px]">
                      Seconds
                    </p>
                  </div>
                </div>
                <div className="flex w-[78%] h-[4px] lg:h-[8px] bg-[#00F336]"></div>
                <div className="py-5 mt-[20px]">
                  <div
                    className="w-full flex justify-between
                    h-[64px]  bg-[linear-gradient(91.18deg,_#D4AC54_13.43%,_#E3BA5D_94.58%)]"
                  >
                    <div className="flex">
                      <img
                        src="/images/winner.png"
                        className="h-[83px] mt-[-17px] lg:mx-2"
                        alt="winner"
                      />
                      <div className="">
                        <p className="text-[16px] py-1 font-titillium text-black">
                          Join
                        </p>
                        <h1 className="text-[20px] text-black">5,78,651</h1>
                      </div>
                    </div>
                    <div className="flex lg:mr-[50px]">
                      <img
                        src="/images/jack.png"
                        className="h-[83px] mt-[-17px] mx-2"
                        alt="winner"
                      />
                      <div className="">
                        <p className="text-[16px] py-1 font-titillium text-black">
                          Join
                        </p>
                        <h1 className="text-[20px] text-black">5,78,651</h1>
                      </div>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="p-5 ">
                      <h1 className="text-black text-[18px] lg:text-[22px]">
                        Choose Your Series:
                      </h1>
                      <div className="flex justify-center gap-4 lg:gap-5  py-3 lg:py-3 text-black">
                        <button className="inset-shadow-2xs p-2 lg:p-3 border shadow-xl  rounded-lg text-[24px]">
                          A
                        </button>
                        <button className="inset-shadow-2xs lg:p-3 p-2 border shadow-xl  rounded-lg text-[24px]">
                          A
                        </button>
                      </div>
                    </div>
                    <div className="p-5 ">
                      <h1 className="text-black text-[18px] lg:text-[22px]">
                        Quantity:
                      </h1>
                      <div className="flex justify-end gap-4 lg:gap-5 ml-[20px] lg:ml-[50px] py-2 lg:py-3 text-black">
                        <button className="inset-shadow-2xs p-3 border shadow-xl  rounded-lg text-[24px]">
                          -
                        </button>
                        <button className="inset-shadow-2xs p-2 lg:p-3 border shadow-xl  rounded-lg text-[24px]">
                          0
                        </button>
                        <button className="inset-shadow-2xs lg:p-3 p-2 border shadow-xl  rounded-lg text-[24px]">
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  <hr className="border-t border-[#E3BA5D] w-full  " />
                  {/* <div className="justify-between py-4 mt-[20px] flex">
                    <button
                      style={{
                        background:
                          'linear-gradient(91.18deg, #D4AC54 13.43%, #E3BA5D 94.58%)',
                      }}
                      className="text-black w-[230px] ml-[-1px] px-4 py-2 rounded-r-lg font-semibold"
                    >
                      Entry ₹40
                    </button>
                    <button
                      style={{
                        background:
                          'linear-gradient(91.18deg, #D4AC54 13.43%, #E3BA5D 94.58%)',
                      }}
                      className="text-black px-8 py-3 lg:mx-[20px] rounded-3xl font-semibold"
                    >
                      Add To Cart
                    </button>
                  </div> */}
                  <div className=" justify-between py-4 mt-[20px] flex">
                    <button
                      style={{
                        background:
                          'linear-gradient(91.18deg, #D4AC54 13.43%, #E3BA5D 94.58%)',
                      }}
                      className="text-black lg:w-[230px] ml-[-1px]  px-4 py-2 rounded-r-lg font-semibold"
                    >
                      Entry ₹40
                    </button>
                    <button
                      style={{
                        background:
                          'linear-gradient(91.18deg, #D4AC54 13.43%, #E3BA5D 94.58%)',
                      }}
                      className="text-black px-8 py-3 lg:mx-[20px] rounded-3xl font-semibold"
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
