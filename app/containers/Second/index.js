import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import { RiDeleteBack2Line } from 'react-icons/ri';

export default function Second() {
  const [mainBalls, setMainBalls] = useState([]);
  const [megaBall, setMegaBall] = useState(null);
  const [cart, setCart] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false); // <-- added modal state
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const handleMainBallClick = (number) => {
    if (mainBalls.includes(number)) {
      setMainBalls(mainBalls.filter((n) => n !== number));
    } else if (mainBalls.length < 5) {
      setMainBalls([...mainBalls, number]);
    }
  };

  const handleMegaBallClick = (number) => {
    setMegaBall(megaBall === number ? null : number);
  };

  const handleClear = () => {
    setMainBalls([]);
    setMegaBall(null);
  };

  const handleAutoSelect = () => {
    const randomMainBalls = [];
    while (randomMainBalls.length < 5) {
      const n = Math.floor(Math.random() * 69) + 1;
      if (!randomMainBalls.includes(n)) randomMainBalls.push(n);
    }
    const randomMegaBall = Math.floor(Math.random() * 26) + 1;
    setMainBalls(randomMainBalls);
    setMegaBall(randomMegaBall);
  };

  const handleAddToCart = () => {
    if (mainBalls.length < 1 || mainBalls.length > 5) {
      alert('Please select between 1 and 5 main balls.');
      return;
    }

    const newEntry = {
      mainBalls: [...mainBalls].sort((a, b) => a - b),
      megaBall, // megaBall can be null or number
      addedAt: new Date().toISOString(), // ✅ Add timestamp here
    };

    setCart([...cart, newEntry]);
    setMainBalls([]);
    setMegaBall(null);
  };

  return (
    <>
      <Header />
      <div className="bg-black">
        <div className="p-5 bg-white rounded-lg my-8 container">
          <div className="grid lg:grid-cols-3 lg:gap-2  py-5 justify-between">
            <div className="col-span-2">
              <h1 className="text-black text-[26px] flex justify-center lg:justify-start py-5 lg:py-2">
                Main Ball
              </h1>
              <div className="grid grid-cols-6 lg:grid-cols-12 border p-5 rounded-xl gap-3 lg:gap-3">
                {Array.from({ length: 69 }).map((_, index) => {
                  const number = index + 1;
                  const isSelected = mainBalls.includes(number);
                  return (
                    <div
                      key={index}
                      onClick={() => handleMainBallClick(number)}
                      className={`cursor-pointer w-8 lg:w-10 h-8 lg:h-10 flex items-center justify-center border rounded-full text-[18px] font-barlow
                        ${
                          isSelected
                            ? 'bg-yellow-400 text-black'
                            : 'bg-white text-black'
                        }
                      `}
                    >
                      {number}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="col-span-1">
              <h1 className="text-black text-[26px] flex lg:justify-start justify-center mt-8 lg:mt-0 py-5 lg:py-2">
                Mega Ball
              </h1>
              <div className="grid grid-cols-5 items-center border p-8 lg:p-5 rounded-xl gap-3">
                {Array.from({ length: 26 }).map((_, index) => {
                  const number = index + 1;
                  const isSelected = megaBall === number;
                  return (
                    <div
                      key={index}
                      onClick={() => handleMegaBallClick(number)}
                      className={`cursor-pointer w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center border rounded-full lg:text-[18px] font-barlow
                        ${
                          isSelected
                            ? 'bg-orange-500 text-white'
                            : 'bg-white text-black'
                        }
                      `}
                    >
                      {number}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="lg:p-8 p-4 text-center lg:flex border rounded-xl items-center justify-between">
            <div>
              <h1 className="text-[#0D3B54CC] text-[18px] lg:text-[22px]">
                Selected numbers:
              </h1>
            </div>
            <div>
              <div className="grid grid-cols-6 lg:gap-4 lg:py-0 py-5 gap-2">
                {mainBalls.map((num, idx) => (
                  <div
                    key={idx}
                    onClick={() => handleMainBallClick(num)} // ✅ Allow removing on click
                    style={{
                      background:
                        'linear-gradient(91.18deg, #D4AC54 13.43%, #E3BA5D 94.58%)',
                      cursor: 'pointer', // 👈 Optional visual cue
                    }}
                    className="w-10 h-10 items-center flex justify-center text-black font-barlow text-[16px] lg:text-[18px] border rounded-full"
                  >
                    {num}
                  </div>
                ))}

                {megaBall && (
                  <div
                    onClick={() => setMegaBall(null)} // ✅ Remove mega ball on click
                    className="bg-[#F44A33] cursor-pointer w-10 h-10 flex justify-center items-center text-white font-barlow text-[18px] border rounded-full"
                    title="Click to remove Mega Ball"
                  >
                    {megaBall}
                  </div>
                )}
              </div>
            </div>
            <div className="flex w-auto justify-between gap-5">
              <button
                onClick={handleClear}
                className="p-3 px-5 w-[80px] text-left text-[16px] text-[#0D3B54CC] border rounded-3xl"
              >
                Clear
              </button>
              <button
                onClick={handleAutoSelect}
                className="p-3 px-5 text-left text-[16px] text-[#0D3B54CC] border rounded-3xl"
              >
                Auto select
              </button>
            </div>
          </div>

          <div className="justify-between py-5 flex">
            <button
              style={{
                background:
                  'linear-gradient(91.18deg, #D4AC54 13.43%, #E3BA5D 94.58%)',
              }}
              className="text-black w-[150px] lg:w-[200px] ml-[-20px] px-4 py-2 rounded-r-lg font-semibold"
            >
              Entry ₹40
            </button>
            <button
              onClick={handleAddToCart} // Just save data, no modal open here
              style={{
                background:
                  'linear-gradient(91.18deg, #D4AC54 13.43%, #E3BA5D 94.58%)',
              }}
              className="text-black px-8 py-3 rounded-3xl font-semibold"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white w-full max-w-lg p-6 rounded-lg relative shadow-lg">
            {/* 🔴 Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-2 text-red-600 bg-gray-200 hover:bg-gray-300 rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold"
            >
              <RiDeleteBack2Line className="text-red-400" />
            </button>

            <h2 className="text-2xl mb-4 text-red-700 font-semibold text-center">
              Your Cart
            </h2>

            {cart.length === 0 ? (
              <p className="text-center text-white">No entries in cart</p>
            ) : (
              <div className="space-y-3">
                {cart.map((entry, idx) => (
                  <div
                    key={idx}
                    className="border border-yellow-400 p-3 rounded-lg"
                  >
                    {/* Time stamp */}
                    <div className="text-sm text-gray-600 mb-2">
                      Added at:{' '}
                      {entry.addedAt
                        ? new Date(entry.addedAt).toLocaleString()
                        : 'No time recorded'}
                    </div>

                    {/* Balls row */}
                    <div className="flex flex-wrap gap-2 items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {entry.mainBalls.map((num, i) => (
                          <span
                            key={i}
                            className="w-8 h-8 flex justify-center items-center border border-yellow-400 rounded-full"
                          >
                            {num}
                          </span>
                        ))}
                        {entry.megaBall && (
                          <span className="w-8 h-8 flex justify-center items-center border border-orange-500 text-red-600 rounded-full">
                            {entry.megaBall}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

//  {isModalOpen && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-white w-full max-w-lg p-6 rounded-lg relative shadow-lg">
//             {/* 🔴 Close Button */}
//             <button
//               onClick={() => setIsModalOpen(false)}
//               className="absolute top-2 right-2 text-red-600 bg-gray-200 hover:bg-gray-300 rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold"
//             >
//               <RiDeleteBack2Line className="text-red-400" />
//             </button>

//             <h2 className="text-2xl mb-4 text-red-700 font-semibold text-center">
//               Your Cart
//             </h2>

//             {cart.length === 0 ? (
//               <p className="text-center text-white">No entries in cart</p>
//             ) : (
//               <div className="space-y-3">
//                 {cart.map((entry, idx) => (
//                   <div
//                     key={idx}
//                     className="border border-yellow-400 p-3 rounded-lg flex justify-between items-center"
//                   >
//                     <div className="flex flex-wrap gap-2">
//                       {entry.mainBalls.map((num, i) => (
//                         <span
//                           key={i}
//                           className="w-8 h-8 flex justify-center items-center border border-yellow-400 rounded-full"
//                         >
//                           {num}
//                         </span>
//                       ))}
//                       <span className="w-8 h-8 flex justify-center items-center border border-orange-500 text-red-600 rounded-full">
//                         {entry.megaBall}
//                       </span>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         </div>
//       )}
