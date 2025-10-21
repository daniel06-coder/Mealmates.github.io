import Link from 'next/link';
import React from 'react'
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaSnapchat } from "react-icons/fa6";

{
  /* <FaFacebook />; <FaInstagram />,< FaXTwitter />   ,<FaPinterest />  */
}

const Footer = () => {
    const navPages = [
      { label: "More", url: "/" },
      { label: "About Us", url: "/about" },
      { label: "About Us", url: "/about" },
      { label: "Contact Us", url: "/contact" },
      { label: "FAQ's", url: "/faqs" },
    ];
    const footPages = [
      { label: "View recipies", url: "/" },
      { label: "Most Liked", url: "/about" },
      { label: "Your Posts", url: "/about" },
      { label: "Your favourites", url: "/contact" },
      { label: "Other pages", url: "/faqs" },
    ];

    const socialIcons = [
      {icon:<FaFacebook />, url: "/"},
      {icon:<FaInstagram />, url: "/"},
      {icon:<FaXTwitter /> , url: "/"},
      {icon:<FaPinterest />, url: "/"},
      {icon:<FaSnapchat />, url: "/"}
    ]

  return (
    <main className="border-t max-lg:text-center max-md:pb-10 py-4 px-10 space-y-3 bg-[#56473A] lg:flex gap-5 justify-between relative bottom-0 w-full">
      <Link href={"/"} className="flex z-40 pb-5">
        <p className="text-2xl font-bold ">Mealmates</p>
      </Link>

      {/* <div className="flex   max-md:flex-col max-md:justify-center max-md:items-center "> */}
      <div className="flex flex-col space-y-4 ">
        {navPages.map((fValues, indexVal) => (
          <Link
            key={indexVal}
            href={fValues.url}
            className="flex flex-col space-y-2 text-sm  lowercase"
          >
            {fValues.label}
          </Link>
        ))}
      </div>

      <div className="flex flex-col space-y-4 ">
        {footPages.map((footerValues, footerIndex) => (
          <Link
            key={footerIndex}
            href={footerValues.url}
            className="flex flex-col space-y-2 text-sm   lowercase"
          >
            {footerValues.label}
          </Link>
        ))}
      </div>

      <div className=" flex flex-col  gap-3 ">
        <div className="flex justify-center gap-3 items-center">
          {socialIcons.map((iconValues, IconsIndex) => (
            <Link
              key={IconsIndex}
              href={iconValues.url}
              className="flex gap-3 text-xl"
            >
              {iconValues.icon}
            </Link>
          ))}
        </div>

        <p className='max-md:text-sm mt-10'> &copy; Mealmates 2025, All rights reserved</p>
      </div>
      {/* </div> */}
    </main>
  );
}

export default Footer
