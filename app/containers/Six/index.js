import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { IoLogoWhatsapp } from 'react-icons/io';
import { FaTelegram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';

export default function Six() {
  return (
    <>
      <Header />
      <div className="bg-[#000000]">
        <div
          className="lg:flex  container mt-[50px] py-5  gap-16"
          style={{
            background:
              'linear-gradient(91.18deg, #D4AC54 13.43%, #E3BA5D 94.58%)',
          }}
        >
          <div>
            <h1 className="lg:text-[46px] lg:py-7 flex text-[30px] leading-[40px] text-black">
              If you have any query about the Platform!
            </h1>
          </div>
          <div>
            <button className="lg:p-4 p-2 py-2 mt-3 border border-black px-[40px] text[18px] rounded-[30px] text-black">
              Contact Us
            </button>
          </div>
        </div>

        <div
          className="lg:w-full  lg:border-t-2 container lg:flex border-b-2 border-amber-500 
           lg:mt-[150px]
           bg-no-repeat bg-cover bg-center "
          style={{ backgroundImage: 'url("/images/fot.png")' }}
        >
          <div className="max-w-6xl py-8 justify-center flex items-center lg:gap-4">
            <img src="/images/bird.png" alt="bird" />
            <h1 className="lg:text-[22px]  whitespace-nowrap font-bruno bg-custom-gradient bg-clip-text text-transparent">
              ROYAL MEGA
            </h1>
          </div>
          <div className="items-center justify-center p-4 lg:p-4 flex ">
            <p className="text-[18px] mx-[50px] flex text-center items-center">
              Lottery players can play Royal mega Lottery <br /> games online
              from anywhere
            </p>
          </div>

          <div className="lg:flex lg:whitespace-nowrap lg:items-end">
            <div className="lg:flex py-11 lg:gap-3 underline">
              <div
                className="flex items-center justify-center text-[16px]
            "
              >
                <h1 className="">Terms & Conditions</h1>
              </div>
              <div className="flex items-center justify-center text-[16px] ">
                <h1 className=""> Privacy Policy</h1>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <img
                src="/images/shape.png.png"
                className="lg:mt-[-70px] mb-[20px] "
                alt="shape"
              />
            </div>
          </div>
        </div>

        <div className=" lg:flex p-5 items-center justify-center gap-6  ">
          <div className=" flex justify-center">
            <p className="text-[14px] items-center text-[#413f3f]">
              copyright © 2022. all right reserved by ROYAL MEGA LIMITED
            </p>
          </div>

          <div className="flex items-center justify-center py-3 gap-4 ">
            <div
              className="w-[30px] h-[30px] p-2 flex items-center justify-center rounded-full"
              style={{
                background:
                  'linear-gradient(91.18deg, #D4AC54 13.43%, #E3BA5D 94.58%)',
              }}
            >
              <FaFacebookF className="text-black" />
            </div>
            <div
              style={{
                background:
                  'linear-gradient(91.18deg, #D4AC54 13.43%, #E3BA5D 94.58%)',
              }}
              className="w-[30px] h-[30px] p-2 flex items-center justify-center rounded-full"
            >
              <FaTwitter className="text-black " />
            </div>
            <div
              style={{
                background:
                  'linear-gradient(91.18deg, #D4AC54 13.43%, #E3BA5D 94.58%)',
              }}
              className="w-[30px] h-[30px] p-2 flex items-center justify-center rounded-full"
            >
              <FaInstagram className="text-black" />
            </div>
            <div
              style={{
                background:
                  'linear-gradient(91.18deg, #D4AC54 13.43%, #E3BA5D 94.58%)',
              }}
              className="w-[30px] h-[30px] p-2 flex items-center justify-center rounded-full"
            >
              <IoLogoWhatsapp className="text-black" />
            </div>
            <div
              style={{
                background:
                  'linear-gradient(91.18deg, #D4AC54 13.43%, #E3BA5D 94.58%)',
              }}
              className="w-[30px] h-[30px] p-2 flex items-center justify-center rounded-full"
            >
              <FaTelegram className="text-black" />
            </div>
          </div>

          <div className="flex justify-center items-center py-5 text-[14px] gap-3">
            <Link to="#">Home</Link>
            <Link to="#">About Us</Link>
            <Link to="#">Lotteries</Link>
            <Link to="#">contact</Link>
            <Link to="#">Faq</Link>
          </div>
        </div>
      </div>
    </>
  );
}
