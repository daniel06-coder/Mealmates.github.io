"use client";
import Image from "next/image";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";

import  { useState } from "react";
import { FaRegUser } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { RiMenu3Line } from "react-icons/ri";
import { IoCloseOutline } from "react-icons/io5";
import { MdCancel } from "react-icons/md";

const Navbar = () => {
  const [openNav, setNavOpen] = useState(false);
  const [openSearch, setSearchOpen] = useState(false);
  const navPages = [
    { label: "Home", url: "/" },
    { label: "Uploaded Recipes", url: "/explore" },
    { label: "About Us", url: "/about" },
    { label: "Contact Us", url: "/contact" },
    { label: "FAQ's", url: "/faqs" },
  ];

   const { data: session } = useSession();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [addSearch, setAddSearch] = useState(false)

  return (
    <main className="md:px-10 px-4 py-4  backdrop-blur-sm flex justify-between items-center border-b-2 border-[#ECEEDF]/50 bg-[#56473A] sticky top-0 z-100 relative ">
      <div
        className={` absolute bg-white text-[#56473A] transition-all duration-500 z-110 px-3 text-center justify-center  h-dvh flex pt-3 lg:hidden inset-0 transition-all duration-300 transform ${
          !addSearch
            ? " -translate-y-full max-y-40 opacity-0 pointer-event-none"
            : "translate-y-0 max-y-full opacity-100 pointer-event-auto"
        }`}
      >
        <div className="flex justify-between w-full items-center gap-5 max-h-10 ">
          <FaArrowLeft onClick={() => setAddSearch(!addSearch)} />
          <div className="relative w-full">
            <input
              type="search"
              className="bg-black/20 px-3 py-1  md:h-10 md:rounded-lg rounded-sm w-full"
            />
            <div className="absolute w-full h-full items-center px-2  justify-between top-0 flex  ">
              <FaSearch className="font-semibold text-black/50" />
              <MdCancel className="font-semibold text-black/50" />
            </div>
          </div>
          <button className="h-fit text-sm">Search</button>
        </div>
      </div>

      <Link href={"/"} className="flex justify-center items-center">
        <h2 className=" font-extrabold  text-3xl z-20">Mealmates</h2>
        {/* <Image
          src={"/logo.png"}
          alt="logo"
          height={800}
          width={800}
          className="w-9 h-9 object-cover "
        /> */}
      </Link>

      <div className="flex  justify-center items-center gap-8 font-semibold text-sm ">
        {navPages.map((items, index) => (
          <Link
            key={index}
            href={items.url}
            className="flex  justify-center items-center gap-1 max-lg:hidden"
          >
            {items.label}
            {/* <RxHome /> */}
          </Link>
        ))}
      </div>

      <div className="flex  justify-center items-center max-lg:hidden gap-3">
        {session ? (
          <div>
            <Button
              id="fade-button"
              aria-controls={open ? "fade-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <img
                src={session?.user?.image ?? ""}
                alt={session?.user?.name?.slice(0, 2).toUpperCase() ?? "U"}
                className="w-6 h-6 rounded-full"
              />
            </Button>
            <Menu
              id="fade-menu"
              slotProps={{
                list: {
                  "aria-labelledby": "fade-button",
                },
              }}
              slots={{ transition: Fade }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>
                <Link href={"/#"}>My Profile</Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <button onClick={() => signOut()}>Logout</button>
              </MenuItem>
            </Menu>
          </div>
        ) : (
          <Link
            href={"/auth/signin"}
            className="flex items-center gap-1 hover:text-purple-600 transition-all duration-150 z-40"
          >
            <p className="max-lg:hidden font-semibold text-sm "> Sign In</p>
            <FaRegUser className="font-semibold text-sm" />
          </Link>
        )}

        <div className="border h-5 border-white"></div>


        <div className="flex items-center pl-2 relative">
          <input
            type="text"
            className={` bg-white/40 px-2 transition-all ease-in-out duration-500 py-1 text-sm text-black/70 rounded-sm outline-none border-none ${
              !openSearch ? "max-w-0 opacity-0 ml-2" : "max-w-100  opacity-100 ml-0"
            }`}
          />

          <Link
            href={"#"}
            className=" px-2 rounded-r-sm flex items-center   absolute bg-black/10 backdrop-blur-sm right-0 inset-y-0   hover:text-purple-600 transition-all duration-150 z-40"
          >
            <FaSearch
              onClick={() => setSearchOpen(!openSearch)}
              className="  text-white py-auto  font-semibold text-sm "
            />
          </Link>
        </div>
      </div>

      {/* mobile navbar */}

      <div
        className={`lg:hidden ease-in-out transform duration-500 transition-all absolute top-0 left-0 bg-[#56473A] w-full min-h-dvh ${
          !openNav
            ? "opacity-0 -translate-x-full pointer-event-none"
            : "opacity-100 translate-x-0 pointer-event-auto"
        } `}
      >
        <div className="flex max-lg:flex-row-reverse max-md:pr-5  justify-center items-center  max-lg:absolute max-lg:top-15 max-lg:my-3 max-lg:right-0  max-md:ml-auto max-lg:pr-10 max-md:gap-4 max-lg:gap-5">
          {session ? (
            <div>
              <Button
                id="fade-button"
                aria-controls={open ? "fade-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                <img
                  src={session?.user?.image ?? ""}
                  alt={session?.user?.name?.slice(0, 2).toUpperCase() ?? "U"}
                  className="w-6 h-6 rounded-full"
                />
              </Button>
              <Menu
                id="fade-menu"
                slotProps={{
                  list: {
                    "aria-labelledby": "fade-button",
                  },
                }}
                slots={{ transition: Fade }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>
                  <Link href={"/#"}>My Profile</Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <button onClick={() => signOut()}>Logout</button>
                </MenuItem>
              </Menu>
            </div>
          ) : (
            <Link
              href={"#"}
              className="flex items-center gap-1 hover:text-purple-600 transition-all duration-150 z-40"
            >
              <p className=" font-semibold text-sm "> Sign In</p>
              <FaRegUser className="font-semibold text-sm" />
            </Link>
          )}

          <div className="border h-5 border-white"></div>
          <Link
            href={"#"}
            className="flex items-center gap-1 hover:text-purple-600 transition-all duration-150 z-40"
          >
            <FaSearch
              onClick={() => setAddSearch(!addSearch)}
              className="font-semibold text-sm"
            />
          </Link>
        </div>

        <div className="flex flex-col  justify-center items-center mt-[8rem] gap-10 ">
          {navPages.map((items, index) => (
            <Link
              key={index}
              href={items.url}
              className="flex justify-center items-center gap-1 "
            >
              {items.label}
            </Link>
          ))}
        </div>
      </div>

      <button
        onClick={() => setNavOpen(!openNav)}
        className="lg:hidden text-2xl max-lg:ml-3 z-40 border-none outline-none "
      >
        {openNav ? <IoCloseOutline /> : <RiMenu3Line />}
      </button>
    </main>
  );
};

export default Navbar;
