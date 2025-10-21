'use client'
import React, { useState } from 'react'
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";


const page = () => {

    const [openFaq, setFaqOpen] = useState(false)

    const dropDown = (i) => {
        setFaqOpen(openFaq === i ? false : i)
    }

  return (
    <main className="min-h-dvh flex items-center gap-8 flex-col pt-6 w-full text-[#56473A]">
      <h1 className="font-extrabold md:text-3xl text-xl pb-4 lg:pb-4 lg:sticky lg:shadow-sm pt-2 lg:top-[4.3rem] text-center lg:w-full lg:bg-white lg:z-100 max-md:hidden">
        FAQ's
      </h1>
      <h1 className="font-extrabold md:text-5xl text-xl pb-4 lg:pb-7 lg:sticky lg:shadow-lg pt-2 lg:top-[4.3rem] text-center lg:w-full lg:z-100 md:hidden ">
        Frequently Asked Questions
      </h1>
      <h3 className="font-extrabold md:text-2xl max-md:hidden text-xl">
        Popular Questions
      </h3>
      <div className=" flex flex-col space-y-3">
        <div className="flex flex-col justify-center">
          <div className="flex justify-start  max-lg:w-full max-lg:px-3   lg:w-4xl items-center border-b-2 pb-3 gap-6">
            <button
              className="border-none outline-none"
              onClick={() => dropDown(1)}
            >
              {openFaq === 1 ? (
                <CiCircleMinus className="font-semibold text-xl" />
              ) : (
                <CiCirclePlus className="font-bold text-xl" />
              )}
            </button>
            <span className="font-semibold max-md:text-sm text-xl">
              How Do i get a recipe on Mealmates
            </span>
          </div>

          <p
            className={`lg:w-4xl max-lg:w-full max-md:text-sm px-2 pb-2 mt-3 transition-all max-md:text-sm duration-300 ease-in-out transform  ${
              openFaq === 1
                ? "opacity-100 max-h-20 translate-y-1 mb-5  max-md:mb-10"
                : " opacity-0 max-h-0 -translate-y-1 mb-0"
            } `}
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis,
            dicta! Ipsam incidunt delectus quibusdam obcaecati magni dignissimos
            eum excepturi suscipit voluptates optio. Iusto tempora quia et,
            aliquam necessitatibus autem doloremque.
          </p>

          {/* <div className='border w-xl mt-3'></div> */}
        </div>

        <div className="flex flex-col justify-center">
          <div className="flex justify-start max-lg:w-full max-lg:px-3   lg:w-4xl items-center border-b-2 pb-3 gap-6">
            <button
              className="border-none outline-none"
              onClick={() => dropDown(2)}
            >
              {openFaq === 2 ? (
                <CiCircleMinus className="font-semibold text-xl" />
              ) : (
                <CiCirclePlus className="font-bold text-xl" />
              )}
            </button>
            <span className="font-semibold max-md:text-sm text-xl">
              How Do i get a recipe on Mealmates
            </span>
          </div>

          <p
            className={`lg:w-4xl max-lg:w-full px-2 pb-2 mt-3 transition-all duration-300 max-md:text-sm ease-in-out max-md:text-sm transform  ${
              openFaq === 2
                ? "opacity-100 max-h-20 translate-y-1 mb-5  max-md:mb-10"
                : " opacity-0 max-h-0 -translate-y-1 mb-0"
            } `}
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis,
            dicta! Ipsam incidunt delectus quibusdam obcaecati magni dignissimos
            eum excepturi suscipit voluptates optio. Iusto tempora quia et,
            aliquam necessitatibus autem doloremque.
          </p>

          {/* <div className='border w-xl mt-3'></div> */}
        </div>

        <div className="flex flex-col justify-center">
          <div className="flex justify-start  max-lg:w-full max-lg:px-3  lg:w-4xl items-center border-b-2 pb-3 gap-6">
            <button
              className="border-none outline-none"
              onClick={() => dropDown(3)}
            >
              {openFaq === 3 ? (
                <CiCircleMinus className="font-semibold text-xl" />
              ) : (
                <CiCirclePlus className="font-bold text-xl" />
              )}
            </button>
            <span className="font-semibold max-md:text-sm text-xl">
              How Do i get a recipe on Mealmates
            </span>
          </div>

          <p
            className={`lg:w-4xl max-lg:w-full px-2 pb-2 mt-3 transition-all duration-300 max-md:text-sm ease-in-out transform  ${
              openFaq === 3
                ? "opacity-100 max-h-20 translate-y-1 mb-5  max-md:mb-10"
                : " opacity-0 max-h-0 -translate-y-1 mb-0"
            } `}
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis,
            dicta! Ipsam incidunt delectus quibusdam obcaecati magni dignissimos
            eum excepturi suscipit voluptates optio. Iusto tempora quia et,
            aliquam necessitatibus autem doloremque.
          </p>

          {/* <div className='border w-xl mt-3'></div> */}
        </div>

        <div className="flex flex-col justify-center">
          <div className="flex justify-start max-lg:w-full max-lg:px-3   lg:w-4xl items-center border-b-2 pb-3 gap-6">
            <button
              className="border-none outline-none"
              onClick={() => dropDown(4)}
            >
              {openFaq === 4 ? (
                <CiCircleMinus className="font-semibold text-xl" />
              ) : (
                <CiCirclePlus className="font-bold text-xl" />
              )}
            </button>
            <span className="font-semibold max-md:text-sm text-xl">
              How Do i get a recipe on Mealmates
            </span>
          </div>

          <p
            className={`lg:w-4xl max-lg:w-full px-2 pb-2 mt-3 transition-all duration- max-md:text-sm ease-in-out transform  ${
              openFaq === 4
                ? "opacity-100 max-h-20 translate-y-1 mb-5  max-md:mb-10"
                : " opacity-0 max-h-0 -translate-y-1 mb-0"
            } `}
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis,
            dicta! Ipsam incidunt delectus quibusdam obcaecati magni dignissimos
            eum excepturi suscipit voluptates optio. Iusto tempora quia et,
            aliquam necessitatibus autem doloremque.
          </p>

          {/* <div className='border w-xl mt-3'></div> */}
        </div>

        <div className="flex flex-col justify-center">
          <div className="flex justify-start max-lg:w-full max-lg:px-3   lg:w-4xl items-center border-b-2 pb-3 gap-6">
            <button
              className="border-none outline-none"
              onClick={() => dropDown(5)}
            >
              {openFaq === 5 ? (
                <CiCircleMinus className="font-semibold text-xl" />
              ) : (
                <CiCirclePlus className="font-bold text-xl" />
              )}
            </button>
            <span className="font-semibold text-xl max-md:text-sm">
              How Do i get a recipe on Mealmates
            </span>
          </div>

          <p
            className={`lg:w-4xl max-lg:w-full px-2 pb-2 mt-3 transition-all duration-300 max-md:text-sm ease-in-out transform  ${
              openFaq === 5
                ? "opacity-100 max-h-20 translate-y-1 mb-5  max-md:mb-10"
                : " opacity-0 max-h-0 -translate-y-1 mb-0"
            } `}
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis,
            dicta! Ipsam incidunt delectus quibusdam obcaecati magni dignissimos
            eum excepturi suscipit voluptates optio. Iusto tempora quia et,
            aliquam necessitatibus autem doloremque.
          </p>

          {/* <div className='border w-xl mt-3'></div> */}
        </div>
      </div>
    </main>
  );
}

export default page
