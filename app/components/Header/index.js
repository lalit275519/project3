// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
// import { IoBagHandleOutline } from 'react-icons/io5';
// import { RiDeleteBin6Line } from 'react-icons/ri';
// import { FaPlus } from 'react-icons/fa6';
// export default function Header() {
//   const [isDrawerOpen, setIsDrawerOpen] = useState(false);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [cartData, setCartData] = useState([]);

//   const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

//   const toggleModal = () => {
//     setIsModalOpen(!isModalOpen);
//     if (!isModalOpen) {
//       const savedCart = localStorage.getItem('cart');
//       setCartData(savedCart ? JSON.parse(savedCart) : []);
//     }
//   };

//   const handleDeleteItem = (index) => {
//     const updatedCart = [...cartData];
//     updatedCart.splice(index, 1);
//     setCartData(updatedCart);
//     localStorage.setItem('cart', JSON.stringify(updatedCart));
//   };

//   const handleAddBall = (index) => {
//     const newBall = prompt('Enter a number to add:');
//     const number = parseInt(newBall);

//     if (isNaN(number) || number < 1 || number > 70) {
//       alert('Please enter a valid number between 1 and 70.');
//       return;
//     }

//     const updatedCart = [...cartData];
//     const entry = updatedCart[index];

//     if (entry.mainBalls.includes(number)) {
//       alert('This number is already in the list.');
//       return;
//     }

//     if (entry.mainBalls.length >= 5) {
//       alert('Only 5 main balls are allowed.');
//       return;
//     }

//     entry.mainBalls.push(number);
//     setCartData(updatedCart);
//     localStorage.setItem('cart', JSON.stringify(updatedCart));
//   };
//   function handleAddBall(index) {
//     // update mainBalls and also update addedAt to current time
//     setCartData((prev) => {
//       const newData = [...prev];
//       // Example: Add ball logic here
//       newData[index].mainBalls.push(nextBallValue);
//       newData[index].addedAt = new Date().toISOString(); // update timestamp here
//       return newData;
//     });
//   }

//   return (
//     <>
//       {/* Header */}
//       <div className="container bg-[#000000] flex justify-between items-center px-4 py-3 relative z-50">
//         <div className="flex justify-center items-center gap-3 mx-auto lg:mx-0">
//           <img src="/images/bird.png" alt="bird" className="w-8 h-8 mr-2" />
//           <h1 className="text-[18px] lg:text-[22px] font-bold bg-custom-gradient bg-clip-text text-transparent">
//             ROYAL MEGA
//           </h1>
//           <Link
//             to="#"
//             onClick={(e) => {
//               e.preventDefault();
//               toggleModal();
//             }}
//             className="text-white cursor-pointer"
//           >
//             <IoBagHandleOutline className="w-6 h-6" />
//           </Link>
//         </div>

//         <div className="lg:hidden absolute right-4">
//           <button onClick={toggleDrawer}>
//             {isDrawerOpen ? (
//               <XMarkIcon className="w-6 h-6 text-white" />
//             ) : (
//               <Bars3Icon className="w-6 h-6 text-white" />
//             )}
//           </button>
//         </div>

//         <div className="lg:flex hidden items-center gap-7">
//           {/* Nav Links */}
//           {['Home', 'First', 'Second', 'ThirdPage', 'Four', 'Five', 'Six'].map(
//             (item, idx) => (
//               <Link key={idx} to={`/${item}`} className="text-[#DADADA]">
//                 {item}
//               </Link>
//             ),
//           )}
//           <Link
//             to="#"
//             onClick={(e) => {
//               e.preventDefault();
//               toggleModal();
//             }}
//             className="text-white cursor-pointer"
//           >
//             <IoBagHandleOutline className="w-6 h-6" />
//           </Link>

//           <div
//             className="inline-block p-[2px] rounded-full"
//             style={{
//               background: `
//                 linear-gradient(0deg, rgba(121, 121, 121, 0.2), rgba(121, 121, 121, 0.2)),
//                 linear-gradient(91.18deg, #D4AC54 13.43%, #FFDEAC 50.76%, #E3BA5D 94.58%)
//               `,
//             }}
//           >
//             <button className="bg-black text-white text-[16px] font-Poppins px-6 py-2 rounded-full">
//               Register
//             </button>
//           </div>
//           <button
//             style={{
//               background: `
//                 linear-gradient(0deg, rgba(121, 121, 121, 0.2), rgba(121, 121, 121, 0.2)),
//                 linear-gradient(91.18deg, #D4AC54 13.43%, #FFDEAC 50.76%, #E3BA5D 94.58%)
//               `,
//             }}
//             className="rounded-full px-[35px] text-[16px] text-[#000000] py-[10px]"
//           >
//             Log in
//           </button>
//         </div>
//       </div>

//       {/* Modal for Cart */}
//       {isModalOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
//           <div className="bg-black rounded-lg p-6 w-full max-w-3xl max-h-[80vh] overflow-auto relative">
//             <button
//               className="absolute top-3 right-3 text-white font-bold text-xl"
//               onClick={toggleModal}
//             >
//               &times;
//             </button>
//             <h2 className="text-2xl text-white font-semibold mb-4">
//               Your Cart
//             </h2>

//             {cartData.length === 0 ? (
//               <p className="text-[24px] text-white text-center">
//                 Your cart is empty.
//               </p>
//             ) : (
//               <table className="min-w-full border border-gray-700 text-white">
//                 <thead>
//                   <tr className="bg-gray-800">
//                     <th className="border border-gray-700 px-4 py-2 text-left">
//                       Draw Name
//                     </th>
//                     <th className="border border-gray-700 px-4 py-2 text-left">
//                       Date/Time{' '}
//                     </th>
//                     <th className="border border-gray-700 px-4 py-2 text-left">
//                       Main Balls
//                     </th>
//                     <th className="border border-gray-700 px-4 py-2 text-left">
//                       Mega Ball
//                     </th>
//                     <th className="border border-gray-700 px-4 py-2 text-left">
//                       Price $
//                     </th>
//                   </tr>
//                 </thead>

//                 <tbody>
//                   {cartData.map((item, index) => (
//                     <tr key={index} className="hover:bg-gray-900">
//                       <td className="border border-black px-4 py-2">
//                         New lotto {index + 1}
//                       </td>
//                       <td className="border border-black px-4 py-2">
//                         real time
//                       </td>
//                       <td className="border border-black px-4 py-2 flex items-center justify-between">
//                         <span>{item.mainBalls.join(', ')}</span>
//                         {item.mainBalls.length < 5 && (
//                           <button
//                             onClick={() => handleAddBall(index)}
//                             className="ml-2 text-white px-2 py-1 rounded text-sm bg-green-600 hover:bg-green-700"
//                             title="Add Ball"
//                           >
//                             <FaPlus />
//                           </button>
//                         )}
//                       </td>
//                       <td className="border border-black px-4 py-2 text-red-500 font-bold">
//                         {item.megaBall}
//                       </td>
//                       <td className="border border-black px-4 py-2">
//                         <button
//                           onClick={() => handleDeleteItem(index)}
//                           className="text-red-500 hover:text-red-700"
//                           title="Delete Entry"
//                         >
//                           <RiDeleteBin6Line className="inline h-5 w-5" />
//                         </button>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             )}
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
// import { IoBagHandleOutline } from 'react-icons/io5';
// import { RiDeleteBin6Line } from 'react-icons/ri';
// import { FaPlus } from 'react-icons/fa'; // Correct import from 'fa', not 'fa6'

// export default function Header() {
//   const [isDrawerOpen, setIsDrawerOpen] = useState(false);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [cartData, setCartData] = useState([]);

//   const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

//   const toggleModal = () => {
//     setIsModalOpen(!isModalOpen);
//     if (!isModalOpen) {
//       const savedCart = localStorage.getItem('cart');
//       setCartData(savedCart ? JSON.parse(savedCart) : []);
//     }
//   };

//   const handleDeleteItem = (index) => {
//     const updatedCart = [...cartData];
//     updatedCart.splice(index, 1);
//     setCartData(updatedCart);
//     localStorage.setItem('cart', JSON.stringify(updatedCart));
//   };

//   const handleAddBall = (index) => {
//     const newBall = prompt('Enter a number to add (1 to 70):');
//     const number = parseInt(newBall);

//     if (isNaN(number) || number < 1 || number > 70) {
//       alert('Please enter a valid number between 1 and 70.');
//       return;
//     }

//     const updatedCart = [...cartData];
//     const entry = updatedCart[index];

//     if (entry.mainBalls.includes(number)) {
//       alert('This number is already in the list.');
//       return;
//     }

//     if (entry.mainBalls.length >= 5) {
//       alert('Only 5 main balls are allowed.');
//       return;
//     }

//     entry.mainBalls.push(number);
//     entry.addedAt = new Date().toISOString(); // Update addedAt time on every add
//     setCartData(updatedCart);
//     localStorage.setItem('cart', JSON.stringify(updatedCart));
//   };

//   return (
//     <>
//       {/* Header */}
//       <div className="container bg-[#000000] flex justify-between items-center px-4 py-3 relative z-50">
//         <div className="flex justify-center items-center gap-3 mx-auto lg:mx-0">
//           <img src="/images/bird.png" alt="bird" className="w-8 h-8 mr-2" />
//           <h1 className="text-[18px] lg:text-[22px] font-bold bg-custom-gradient bg-clip-text text-transparent">
//             ROYAL MEGA
//           </h1>
//         </div>

//         <div className="lg:hidden absolute right-4">
//           <button onClick={toggleDrawer}>
//             {isDrawerOpen ? (
//               <XMarkIcon className="w-6 h-6 text-white" />
//             ) : (
//               <Bars3Icon className="w-6 h-6 text-white" />
//             )}
//           </button>
//         </div>

//         <div className="lg:flex hidden items-center gap-7">
//           {/* Nav Links */}
//           {['Home', 'First', 'Second', 'ThirdPage', 'Four', 'Five', 'Six'].map(
//             (item, idx) => (
//               <Link key={idx} to={`/${item}`} className="text-[#DADADA]">
//                 {item}
//               </Link>
//             ),
//           )}
//           <Link
//             to="#"
//             onClick={(e) => {
//               e.preventDefault();
//               toggleModal();
//             }}
//             className="text-white cursor-pointer"
//           >
//             <IoBagHandleOutline className="w-6 h-6" />
//           </Link>

//           <div
//             className="inline-block p-[2px] rounded-full"
//             style={{
//               background: `
//                 linear-gradient(0deg, rgba(121, 121, 121, 0.2), rgba(121, 121, 121, 0.2)),
//                 linear-gradient(91.18deg, #D4AC54 13.43%, #FFDEAC 50.76%, #E3BA5D 94.58%)
//               `,
//             }}
//           >
//             <button className="bg-black text-white text-[16px] font-Poppins px-6 py-2 rounded-full">
//               Register
//             </button>
//           </div>
//           <button
//             style={{
//               background: `
//                 linear-gradient(0deg, rgba(121, 121, 121, 0.2), rgba(121, 121, 121, 0.2)),
//                 linear-gradient(91.18deg, #D4AC54 13.43%, #FFDEAC 50.76%, #E3BA5D 94.58%)
//               `,
//             }}
//             className="rounded-full px-[35px] text-[16px] text-[#000000] py-[10px]"
//           >
//             Log in
//           </button>
//         </div>
//       </div>

//       {/* Modal for Cart */}
//       {isModalOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
//           <div className="bg-black rounded-lg p-6 w-full max-w-3xl max-h-[80vh] overflow-auto relative">
//             <button
//               className="absolute top-3 right-3 text-white font-bold text-xl"
//               onClick={toggleModal}
//             >
//               &times;
//             </button>
//             <h2 className="text-2xl text-white font-semibold mb-4">
//               Your Cart
//             </h2>

//             {cartData.length === 0 ? (
//               <p className="text-[24px] text-white text-center">
//                 Your cart is empty.
//               </p>
//             ) : (
//               <table className="min-w-full border border-gray-700 text-white">
//                 <thead>
//                   <tr className="bg-gray-800">
//                     <th className="border border-gray-700 px-4 py-2 text-left">
//                       Draw Name
//                     </th>
//                     <th className="border border-gray-700 px-4 py-2 text-left">
//                       Date/Time{' '}
//                     </th>
//                     <th className="border border-gray-700 px-4 py-2 text-left">
//                       Main Balls
//                     </th>
//                     <th className="border border-gray-700 px-4 py-2 text-left">
//                       Mega Ball
//                     </th>
//                     <th className="border border-gray-700 px-4 py-2 text-left">
//                       Delet
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {cartData.map((item, index) => (
//                     <tr key={index} className="hover:bg-gray-900">
//                       <td className="border border-black px-4 py-2">
//                         New lotto {index + 1}
//                       </td>

//                       {/* Real Time - show formatted date-time */}
//                       <td className="border border-black px-4 py-2">
//                         {item.addedAt
//                           ? new Date(item.addedAt).toLocaleString()
//                           : 'No time yet'}
//                       </td>

//                       {/* Main Balls */}
//                       <td className="border border-black px-4 py-2 flex items-center justify-between">
//                         <span>{item.mainBalls.join(', ')}</span>
//                         {item.mainBalls.length < 5 && (
//                           <button
//                             onClick={() => handleAddBall(index)}
//                             className="ml-2 text-white px-2 py-1 rounded text-sm bg-slate-700"
//                             title="Add Ball"
//                           >
//                             <FaPlus />
//                           </button>
//                         )}
//                       </td>

//                       {/* Mega Ball */}
//                       <td className=" px-4 py-2 text-red-500 font-bold">
//                         {item.megaBall}
//                       </td>

//                       {/* Delete */}
//                       <td className="border border-black px-4 py-2">
//                         <button
//                           onClick={() => handleDeleteItem(index)}
//                           className="text-red-500 hover:text-red-700"
//                           title="Delete Entry"
//                         >
//                           <RiDeleteBin6Line className="inline h-5 w-5" />
//                         </button>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             )}
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { IoBagHandleOutline } from 'react-icons/io5';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { FaPlus } from 'react-icons/fa';

export default function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cartData, setCartData] = useState([]);

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    if (!isModalOpen) {
      const savedCart = localStorage.getItem('cart');
      setCartData(savedCart ? JSON.parse(savedCart) : []);
    }
  };

  const handleDeleteItem = (index) => {
    const updatedCart = [...cartData];
    updatedCart.splice(index, 1);
    setCartData(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const handleAddBall = (index) => {
    const newBall = prompt('Enter a number to add (1 to 70):');
    const number = parseInt(newBall);

    if (isNaN(number) || number < 1 || number > 70) {
      alert('Please enter a valid number between 1 and 70.');
      return;
    }

    const updatedCart = [...cartData];
    const entry = updatedCart[index];

    if (entry.mainBalls.includes(number)) {
      alert('This number is already in the list.');
      return;
    }

    if (entry.mainBalls.length >= 5) {
      alert('Only 5 main balls are allowed.');
      return;
    }

    entry.mainBalls.push(number);
    entry.addedAt = new Date().toISOString(); // update timestamp
    setCartData(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <>
      {/* Header */}
      <div className="container bg-[#000000] flex justify-between items-center px-4 py-3 relative z-50">
        <div className="flex justify-center items-center gap-3 mx-auto lg:mx-0">
          <img src="/images/bird.png" alt="bird" className="w-8 h-8 mr-2" />
          <h1 className="text-[18px] lg:text-[22px] font-bold bg-custom-gradient bg-clip-text text-transparent">
            ROYAL MEGA
          </h1>
          <Link
            to="#"
            onClick={(e) => {
              e.preventDefault();
              toggleModal();
            }}
            className="text-white cursor-pointer"
          >
            <IoBagHandleOutline className="w-6 h-6" />
          </Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="lg:hidden absolute right-4">
          <button onClick={toggleDrawer}>
            {isDrawerOpen ? (
              <XMarkIcon className="w-6 h-6 text-white" />
            ) : (
              <Bars3Icon className="w-6 h-6 text-white" />
            )}
          </button>
        </div>

        {/* Nav Links (Desktop) */}
        <div className="lg:flex hidden items-center gap-7">
          {['Home', 'First', 'Second', 'ThirdPage', 'Four', 'Five', 'Six'].map(
            (item, idx) => (
              <Link key={idx} to={`/${item}`} className="text-[#DADADA]">
                {item}
              </Link>
            ),
          )}
          <Link
            to="#"
            onClick={(e) => {
              e.preventDefault();
              toggleModal();
            }}
            className="text-white cursor-pointer"
          >
            <IoBagHandleOutline className="w-6 h-6" />
          </Link>

          <div
            className="inline-block p-[2px] rounded-full"
            style={{
              background: `
                linear-gradient(0deg, rgba(121, 121, 121, 0.2), rgba(121, 121, 121, 0.2)),
                linear-gradient(91.18deg, #D4AC54 13.43%, #FFDEAC 50.76%, #E3BA5D 94.58%)
              `,
            }}
          >
            <button className="bg-black text-white text-[16px] font-Poppins px-6 py-2 rounded-full">
              Register
            </button>
          </div>
          <button
            style={{
              background: `
                linear-gradient(0deg, rgba(121, 121, 121, 0.2), rgba(121, 121, 121, 0.2)),
                linear-gradient(91.18deg, #D4AC54 13.43%, #FFDEAC 50.76%, #E3BA5D 94.58%)
              `,
            }}
            className="rounded-full px-[35px] text-[16px] text-[#000000] py-[10px]"
          >
            Log in
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isDrawerOpen && (
        <div className="fixed top-0 left-0 w-64 h-full bg-black text-white z-40 p-6 transition-all duration-300 shadow-lg">
          <button
            onClick={toggleDrawer}
            className="absolute top-4 right-4 text-white"
          >
            <XMarkIcon className="w-6 h-6" />
          </button>
          <nav className="mt-12 space-y-4">
            {[
              'Home',
              'First',
              'Second',
              'ThirdPage',
              'Four',
              'Five',
              'Six',
            ].map((item, idx) => (
              <Link
                key={idx}
                to={`/${item}`}
                onClick={toggleDrawer}
                className="block text-lg hover:text-yellow-400"
              >
                {item}
              </Link>
            ))}
            <div
              onClick={toggleModal}
              className="cursor-pointer flex items-center gap-2 mt-4"
            >
              <IoBagHandleOutline className="w-6 h-6" />
              <span>View Cart</span>
            </div>
          </nav>
        </div>
      )}

      {/* Modal for Cart */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
          <div className="bg-black rounded-lg p-6 w-full max-w-3xl max-h-[80vh] overflow-auto relative">
            <button
              className="absolute top-3 right-3 text-white font-bold text-xl"
              onClick={toggleModal}
            >
              &times;
            </button>
            <h2 className="text-2xl text-white font-semibold mb-4">
              Your Cart
            </h2>

            {cartData.length === 0 ? (
              <p className="text-[24px] text-white text-center">
                Your cart is empty.
              </p>
            ) : (
              <table className="min-w-full border border-gray-700 text-white">
                <thead>
                  <tr className="bg-gray-800">
                    <th className="border border-gray-700 px-4 py-2 text-left">
                      Draw Name
                    </th>
                    <th className="border border-gray-700 px-4 py-2 text-left">
                      Date/Time
                    </th>
                    <th className="border border-gray-700 px-4 py-2 text-left">
                      Main Balls
                    </th>
                    <th className="border border-gray-700 px-4 py-2 text-left">
                      Mega Ball
                    </th>
                    <th className="border border-gray-700 px-4 py-2 text-left">
                      Delete
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {cartData.map((item, index) => (
                    <tr key={index} className="hover:bg-gray-900">
                      <td className="border border-black px-4 py-2">
                        New lotto {index + 1}
                      </td>
                      <td className="border border-black px-4 py-2">
                        {item.addedAt
                          ? new Date(item.addedAt).toLocaleString()
                          : 'No time yet'}
                      </td>
                      <td className="border border-black px-4 py-2 flex items-center justify-between">
                        <span>{item.mainBalls.join(', ')}</span>
                        {item.mainBalls.length < 5 && (
                          <button
                            onClick={() => handleAddBall(index)}
                            className="ml-2 text-white px-2 py-1 rounded text-sm bg-slate-700"
                          >
                            <FaPlus />
                          </button>
                        )}
                      </td>
                      <td className="px-4 py-2 text-red-500 font-bold">
                        {item.megaBall}
                      </td>
                      <td className="border border-black px-4 py-2">
                        <button
                          onClick={() => handleDeleteItem(index)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <RiDeleteBin6Line className="inline h-5 w-5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      )}
    </>
  );
}
