import Image from 'next/image'
import React from 'react'

function page() {
  return (
    <main className="bg-[#ffffffdc]">
      <div className="flex max-md:flex-col  py-4 lg:px-10 px-2 justify-between items-center">
        <h1 className="lg:text-5xl md:pl-2 lg:pl-5  md:text-2xl text-xl text-[#56473A] font-extrabold max-md:pb-5 ">
          About Mealmates
        </h1>

        <Image
          src={"/spices.jpg"}
          alt="cover-img"
          height={800}
          width={800}
          className=" lg:h-2xl lg:w-2xl md:h-md md:w-md rounded-xl  w-full h-full max-md:px-3 object-contain"
        />
      </div>

      <div className="bg-[#56473A] lg:px-30 px-5 md:px-15 py-10 ">
        <p className="text-sm max-md:text-xs">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
          excepturi atque magni placeat eius quisquam eum facilis sapiente
          laborum saepe. Possimus eum saepe reprehenderit repudiandae nisi
          accusamus iste similique magni suscipit illum modi cum nam explicabo,
          eveniet animi quia autem dolore nemo corporis vero earum perspiciatis
          magnam! Quibusdam, vero ut rerum commodi accusantium molestiae dolor
          iste, dolore voluptas quisquam quia illum. Reiciendis dolor, excepturi
          cum molestias tempora quibusdam minima praesentium dolorem aut in,
          aspernatur ipsum earum consequatur, ab numquam ullam iure libero.
          Nihil voluptates, sunt soluta corporis laudantium qui a distinctio
          quos maiores quia velit ullam modi eaque impedit doloribus error nam
          voluptate harum totam veniam minus quam officiis itaque rem? Minus
          culpa nemo dolorum et porro neque quos labore!
        </p>
      </div>
    </main>
  );
}

export default page
