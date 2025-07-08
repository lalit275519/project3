import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { CiCalendar } from 'react-icons/ci';

const MegaJackpotSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 1,
    minutes: 0,
  });

  // Sample jackpot data
  const jackpots = [
    {
      prize: '₹5,00,00,000',
      ticketPrice: ' ₹100',
      date: 'Tuesday, July 9, 2024',
    },
    {
      prize: '₹ 5,50,00,000',
      ticketPrice: ' ₹150',
      date: 'Friday, July 12, 2024',
    },
    {
      prize: ' ₹2,75,00,000',
      ticketPrice: ' ₹75',
      date: 'Sunday, July 14, 2024',
    },
  ];

  // Timer countdown effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59 };
        }
        return prev;
      });
    }, 60000); // Update every minute

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % jackpots.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + jackpots.length) % jackpots.length);
  };

  const formatTime = (time) => time.toString().padStart(2, '0');

  return (
    <>
      <div className="container">
        <div className="flex items-center   p-4 ">
          <div className="relative w-full justify-between flex  p-6 border-4 border-black  overflow-hidden rounded-20 ">
            {/* Main Card */}
            <div
              style={{
                background: `
          linear-gradient(0deg, rgba(121, 121, 121, 0.2), rgba(121, 121, 121, 0.2)),
          linear-gradient(91.18deg, #D4AC54 13.43%, #FFDEAC 50.76%, #E3BA5D 94.58%)
        `,
              }}
              className="bg-gradient-to-r rounded-2xl shadow-2xl p-6 border- relative overflow-hidden"
            >
              {/* Left Arrow */}
              <button
                onClick={prevSlide}
                className="absolute left-[0px] top-1/2 transform -translate-y-1/2 bg-black bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-all duration-200 z-50"
              >
                <ChevronLeft className="w-6 h-6  text-black" />
              </button>

              {/* Right Arrow */}
              <button
                onClick={nextSlide}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-20 hover:bg-opacity-30  rounded-full p-2 transition-all duration-200 z-50"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>

              <div className="flex items-center justify-between relative z-10">
                {/* Left Section */}
                <div className="flex items-center space-x-4">
                  {/* Mega Jackpot Logo */}
                  <div className="bg-gradient-to-br  rounded-full p-3 shadow-lg">
                    <div className=" rounded-full p-2">
                      <div className="">
                        <img src="/images/ball.png" alt="ball" />
                      </div>
                    </div>
                  </div>

                  {/* Prize Info */}
                  <div>
                    <h1 className="text-3xl font-bold text-black mb-1">
                      Mega Jackpot
                    </h1>
                    <div className="flex">
                      <div className="text-[18px] text-[#262626] font-semibold ">
                        Mega Prize
                      </div>
                      <div className="text-[25px] font-bold">
                        {jackpots[currentSlide].prize}
                      </div>
                    </div>
                    <div className="text-[#262626] text-[16px] mt-1">
                      Ticket Price:
                      <span className="font-semibold text-white text-[20px]">
                        {jackpots[currentSlide].ticketPrice}
                      </span>
                    </div>
                    <div className="flex items-center text-[#000000] text-[16px] mt-1">
                      <div className="w-4 h-4 mr-2">
                        <CiCalendar className="text-black font-bold items-center h-[18px]" />
                      </div>
                      {jackpots[currentSlide].date}
                    </div>
                  </div>
                </div>

                {/* Right Section - Timer */}
                <div className="text-center">
                  <div className="text-[16px] text-[#000000] font-medium mb-2">
                    TIMER
                  </div>

                  {/* Countdown Display */}
                  <div className="flex justify-between  text-xs text-[#000000]  mt-5 py-1">
                    <span>Days</span>
                    <span>Hours</span>
                    <span>Mins</span>
                  </div>
                  <div className="flex space-x-1">
                    <div className="bg-white bg-opacity-80 rounded px-2 py-1 min-w-[2.5rem] text-center">
                      <div className="text-lg font-normal text-[#000000] ">
                        {formatTime(timeLeft.days)}
                      </div>
                    </div>
                    <div className="bg-white bg-opacity-80 rounded px-2 py-1 min-w-[2.5rem] text-center">
                      <div className="text-lg font-normal text-[#000000] ">
                        {formatTime(timeLeft.hours)}
                      </div>
                    </div>
                    <div className="bg-white bg-opacity-80 rounded px-2 py-1 min-w-[2.5rem] text-center">
                      <div className="text-lg font-normal text-[#000000] ">
                        {formatTime(timeLeft.minutes)}
                      </div>
                    </div>
                  </div>

                  {/* <div className="flex justify-between text-xs text-[#000000]  mt-1">
                    <span>Days</span>
                    <span>Hours</span>
                    <span>Mins</span>
                  </div> */}

                  {/* Small text on the right */}
                  <div className="text-xs text-white mt-2 transform rotate-90 origin-center absolute right-[-60px] top-1/2">
                    jackpotslive.live
                  </div>
                </div>
              </div>
            </div>
            <div className=" text-end  justify-end ">
              <div className="inline-block p-[2px] rounded-full">
                <button
                  style={{
                    background: `
          linear-gradient(0deg, rgba(121, 121, 121, 0.2), rgba(121, 121, 121, 0.2)),
          linear-gradient(91.18deg, #D4AC54 13.43%, #FFDEAC 50.76%, #E3BA5D 94.58%)
        `,
                  }}
                  className="rounded-full px-[35px] justify-center text-[16px] text-[#000000] mx-[15px] items-center py-[10px] w-auto h-[50px]"
                >
                  Log in
                </button>
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
                    Winners{' '}
                  </button>
                </div>
              </div>
              <div className="py-2">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MegaJackpotSlider;
