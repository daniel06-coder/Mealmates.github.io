import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaPinterest } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaSnapchat } from "react-icons/fa6";
import { RiStarSFill } from "react-icons/ri";
import { CiShare1 } from "react-icons/ci";
import { LuCloudUpload } from "react-icons/lu";
import { CgBrowse } from "react-icons/cg";

export default function Home() {
  const socialIcons = [
    { icon: <FaFacebook />, url: "/" },
    { icon: <FaInstagram />, url: "/" },
    { icon: <FaXTwitter />, url: "/" },
    { icon: <FaPinterest />, url: "/" },
    { icon: <FaSnapchat />, url: "/" },
  ];

  return (
    <main className="">
      <div className="relative">
        <Image
          src={"/recipe2.jpg"}
          alt="bg-img"
          height={800}
          width={800}
          className="w-full h-[35rem]  object-cover max-md:hidden"
        />
        {/* phone screen below */}
        <Image
          src={"/phone-ing.jpg"}
          alt="bg-img"
          height={800}
          width={800}
          className="w-full h-full object-contain md:hidden"
        />

        <div className="absolute top-0 inset-0 bg-black/80 backdrop-blur-xs md:backdrop-blur-sm ">
          <div className=" flex flex-col px-4 md:pl-7 pt-5 md:gap-5 gap-3 h-full md:pt-[8rem] ">
            <h1 className="font-bold text-xl md:pl-7   lg:text-sm  ">
              Discover, Share & Cook Recipes Made by People Like You.
            </h1>
            <p className="text-sm md:text-md lg:text-3xl lg:leading-10 md:pl-7  text-left leading-6  lg:w-2xl md:w-xl ">
              A community driven recipe hub where food lovers from all walks of
              life can explore new dishes, upload their own creations, and share
              delicious meals and cooking inspiration with the world.
            </p>

            <div className="md:ml-7  flex max-md:flex-col md:justify-between md:items-center gap-5  md:w-xl">
              <Link href={"/explore"}>
                <button className=" px-5  rounded-lg text-sm bg-[#56473A] hover:text-white hover:bg-[#6b5949] transition-all duration-300 shadow-[0_0_5px_#00000094] py-3 w-fit  ">
                  Explore Recipes
                </button>
              </Link>
              <Link href={"/new-post"}>
                <button className=" px-5  rounded-lg text-sm bg-[#56473A] hover:text-white hover:bg-[#6b5949] transition-all duration-300 shadow-[0_0_5px_#00000094] py-3 w-fit  ">
                  Upload Yours
                </button>
              </Link>

              {/* <div className="flex gap-5 text-xl">
                {socialIcons.map((iconValues, IconsIndex) => (
                  <Link key={IconsIndex} href={iconValues.url} className="">
                    {iconValues.icon}
                  </Link>
                ))}
              </div> */}
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-full space-y-3 flex-col   py-6  items-center text-[#6b5949] my-6 w-full ">
        <h1 className="md:text-3xl text-sm font-bold">How It Works</h1>

        <div className="flex max-lg:grid max-lg:grid-cols-2 max-md:grid-cols-1 lg:justify-between gap-13 px-2 py-3  ">
          <div className=" relative lg:flex lg:flex-col lg:justify-center lg:items-center overflow-hidden shadow-xl rounded-sm w-full h-full md:w-[18rem] md:h-[18rem] gap-3 text-white">
            <Image
              src={"/sandwich-2977251_640.jpg"}
              alt="spices img"
              height={800}
              width={800}
              className="h-full w-full object-cover"
            />
            <div className="absolute flex px-3 items-center flex-col lg:transition-all lg:duration-300 lg:ease-in-out lg:opacity-0 lg:min-h-0 lg:translate-y-6 lg:delay-100 lg:hover:opacity-100 lg:hover:min-h-20 lg:hover:translate-y-0 top-0 inset-0 bg-black/70 gap-3 ">
              <div className="flex items-center mb-6 mt-4 justify-center  gap-2">
                <h2 className="text-xl font-semibold">Upload Yours</h2>
                <LuCloudUpload />
              </div>

              <div className="border border-white w-sm px-2"></div>

              <p className="text-center mt-5 ">
                Share your own recipes with the community.
              </p>
            </div>
          </div>

          <div className="  relative lg:flex lg:flex-col lg:justify-center lg:items-center overflow-hidden shadow-xl rounded-sm w-full h-full md:w-[18rem] md:h-[18rem] gap-3 text-white">
            <Image
              src={"/recipie.jpg"}
              alt="spices img"
              height={800}
              width={800}
              className="h-full w-full object-cover"
            />
            <div className="absolute flex px-3 items-center flex-col lg:transition-all lg:duration-300 lg:ease-in-out lg:opacity-0 lg:min-h-0 lg:translate-y-6 lg:delay-100 lg:hover:opacity-100 lg:hover:min-h-20 lg:hover:translate-y-0 top-0 inset-0 bg-black/70 gap-3 ">
              <div className="flex items-center mb-6 mt-4 justify-center  gap-2">
                <h2 className="text-xl font-semibold">Save & Share</h2>
                <CiShare1 />
              </div>

              <div className="border border-white w-sm px-2"></div>

              <p className="text-center mt-5 ">
                Save favorites and share with friends.
              </p>
            </div>
          </div>

          <div className=" max-lg:col-span-3 max-md:col-span-1 relative lg:flex lg:flex-col lg:justify-center lg:items-center overflow-hidden  shadow-xl rounded-sm w-full h-full md:w-[18rem] md:h-[18rem] gap-3 text-white">
            <Image
              src={"/pancakes-2139844_640.jpg"}
              alt="spices img"
              height={800}
              width={800}
              className="h-full w-full object-cover"
            />
            <div className="absolute flex px-3 items-center flex-col lg:transition-all lg:duration-300 lg:ease-in-out lg:opacity-0 lg:min-h-0 lg:translate-y-6 lg:delay-100 lg:hover:opacity-100 lg:hover:min-h-20 lg:hover:translate-y-0 top-0 inset-0 bg-black/70 gap-3 ">
              <div className="flex items-center mb-6 mt-4 justify-center  gap-2">
                <h2 className="text-xl font-semibold">Browse Recipes</h2>
                <CgBrowse />
              </div>

              <div className="border border-white w-sm px-2"></div>

              <p className="text-center mt-5 ">
                Explore recipes from around the world.
              </p>
            </div>
          </div>
        </div>

        {/* <p className="text-xs md:text-sm leading-7">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque iusto
          id quod eius ad qui sapiente consequuntur in deserunt corporis facere
          molestias, reiciendis animi! Velit necessitatibus laudantium sed
          possimus distinctio, eos delectus iste dolores itaque veritatis esse
          laboriosam nobis labore officia praesentium. Repellat fuga vel
          similique labore! Id nisi nam consequuntur tempora officiis quam illo
          nulla sapiente consequatur laudantium nemo aliquam non labore itaque
          cum tenetur illum quae dolore sint est, corrupti vel fugit odit? Quam
          expedita aspernatur, autem quisquam odit iste nostrum at repellat.
          Illum, at numquam! Eius, modi deserunt! Ab atque tenetur deleniti
          delectus quas rem nam. Fugiat.
        </p>

        <div className="flex space-x-7 text-white">
          <Link href={"/new-post"}>
            <button className=" px-4 rounded-sm text-sm bg-[#56473A] hover:text-white hover:bg-[#6b5949] transition-all duration-300 shadow-[0_0_5px_#00000094] py-2 w-fit  ">
              View Recipies
            </button>
          </Link>
          <Link href={"/new-post"}>
            <button className=" px-4 rounded-sm text-sm bg-[#56473A] hover:text-white hover:bg-[#6b5949] transition-all duration-300 shadow-[0_0_5px_#00000094] py-2 w-fit  ">
              Post Recipies
            </button>
          </Link>
        </div>  */}

        {/* Featured Recipes */}
        <div className="bg-gray-100/60 mt-7  ">
          <div className="py-2 px-4 flex justify-between items-center">
            <h1 className="text-[#6b5949] font-bold text-xl lg:text-3xl ">
              Feautured Recipes
            </h1>
            <Link href={"/explore"}>
              <button className=" px-4 rounded-sm text-sm bg-[#56473A] hover:text-white hover:bg-[#6b5949] transition-all text-white/60 max-md:text-2xs duration-300 py-2 w-fit  ">
                See All Recipies
              </button>
            </Link>
          </div>

          <div className="grid p-3 text-white grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-3">
            <div className=" shadow-sm rounded-xl bg-[#6b5949]  p-3">
              <div className="flex justify-between gap-2 items-center mb-2">
                <img
                  src="/recipe2.jpg"
                  alt="image"
                  className="rounded-full h-8 w-8 object-cover"
                />
                <h2 className="font-semibold ">James Jackson</h2>
              </div>

              <div className=" flex gap-3 flex-col  max-md:text-center p-3  h-full max-md:w-full  ">
                <h1 className="font-bold text-xl ">
                  Food Name: <span>Pepper Soup</span>
                </h1>
                <p className="text-sm max-md:text-xs ">
                  Recipe ingridients:
                  <span className="text-sm ">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Harum perferendis, rem est doloremque quasi ad consequuntur
                    voluptas distinctio quas facere suscipit rerum dicta ipsum
                    tempore dolor labore iure nemo dolorum?
                  </span>
                </p>
                <p className="text-sm max-md:text-xs ">
                  How to make it: <br />
                  <span className="text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ullam nemo inventore ut? Quos voluptatibus hic est impedit
                    excepturi id accusamus rem quasi fuga, nostrum dignissimos
                    minus dolores veniam aspernatur eius maxime similique,
                    sapiente voluptatum consequatur tenetur temporibus minima
                    fugiat dolorem. Tenetur quaerat nisi ea. Laudantium, nemo.
                    Provident delectus, quidem rerum iste eligendi eius quod
                    aperiam nobis! Ad, fuga praesentium. Autem.
                  </span>
                </p>
              </div>
            </div>

            <div className=" shadow-sm rounded-xl bg-[#6b5949]  p-3">
              <div className="flex justify-between gap-2 items-center mb-2">
                <img
                  src="/black-guy.jpg"
                  alt="image"
                  className="rounded-full h-8 w-8 object-cover"
                />
                <h2 className="font-semibold ">Carmelo Hernandez</h2>
              </div>

              <div className=" flex gap-3 flex-col  max-md:text-center p-3  h-full max-md:w-full  ">
                <h1 className="font-bold text-xl ">
                  Food Name: <span>Pizza el Rissoto</span>
                </h1>
                <p className="text-sm max-md:text-xs ">
                  Recipe ingridients:
                  <span className="text-sm ">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Harum perferendis, rem est doloremque quasi ad consequuntur
                    voluptas distinctio quas facere suscipit rerum dicta ipsum
                    tempore dolor labore iure nemo dolorum?
                  </span>
                </p>
                <p className="text-sm max-md:text-xs ">
                  How to make it: <br />
                  <span className="text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ullam nemo inventore ut? Quos voluptatibus hic est impedit
                    excepturi id accusamus rem quasi fuga, nostrum dignissimos
                    minus dolores veniam aspernatur eius maxime similique,
                    sapiente voluptatum consequatur tenetur temporibus minima
                    fugiat dolorem. Tenetur quaerat nisi ea. Laudantium, nemo.
                    Provident delectus, quidem rerum iste eligendi eius quod
                    aperiam nobis! Ad, fuga praesentium. Autem.
                  </span>
                </p>
              </div>
            </div>

            <div className=" shadow-sm rounded-xl bg-[#6b5949]  p-3">
              <div className="flex justify-between gap-2 items-center mb-2">
                <img
                  src="/spices.jpg"
                  alt="image"
                  className="rounded-full h-8 w-8 "
                />
                <h2 className="font-semibold ">Sebastain Mckaylis</h2>
              </div>

              <div className=" flex gap-3 flex-col  max-md:text-center p-3  h-full max-md:w-full  ">
                <h1 className="font-bold text-xl ">
                  Food Name: <span>Curry Roll</span>
                </h1>
                <p className="text-sm max-md:text-xs ">
                  Recipe ingridients:
                  <span className="text-sm ">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Harum perferendis, rem est doloremque quasi ad consequuntur
                    voluptas distinctio quas facere suscipit rerum dicta ipsum
                    tempore dolor labore iure nemo dolorum?
                  </span>
                </p>
                <p className="text-sm max-md:text-xs ">
                  How to make it: <br />
                  <span className="text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ullam nemo inventore ut? Quos voluptatibus hic est impedit
                    excepturi id accusamus rem quasi fuga, nostrum dignissimos
                    minus dolores veniam aspernatur eius maxime similique,
                    sapiente voluptatum consequatur tenetur temporibus minima
                    fugiat dolorem. Tenetur quaerat nisi ea. Laudantium, nemo.
                    Provident delectus, quidem rerum iste eligendi eius quod
                    aperiam nobis! Ad, fuga praesentium. Autem.
                  </span>
                </p>
              </div>
            </div>

            <div className=" shadow-sm rounded-xl bg-[#6b5949]  p-3">
              <div className="flex justify-between gap-2 items-center mb-2">
                <img
                  src="/pancakes-2139844_640.jpg"
                  alt="image"
                  className="rounded-full h-8 w-8 object-cover"
                />
                <h2 className="font-semibold ">Sonia Peterson</h2>
              </div>

              <div className=" flex gap-3 flex-col  max-md:text-center p-3  h-full max-md:w-full  ">
                <h1 className="font-bold text-xl ">
                  Food Name: <span>Honey Pancakes</span>
                </h1>
                <p className="text-sm max-md:text-xs ">
                  Recipe ingridients:
                  <span className="text-sm ">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Harum perferendis, rem est doloremque quasi ad consequuntur
                    voluptas distinctio quas facere suscipit rerum dicta ipsum
                    tempore dolor labore iure nemo dolorum?
                  </span>
                </p>
                <p className="text-sm max-md:text-xs ">
                  How to make it: <br />
                  <span className="text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ullam nemo inventore ut? Quos voluptatibus hic est impedit
                    excepturi id accusamus rem quasi fuga, nostrum dignissimos
                    minus dolores veniam aspernatur eius maxime similique,
                    sapiente voluptatum consequatur tenetur temporibus minima
                    fugiat dolorem. Tenetur quaerat nisi ea. Laudantium, nemo.
                    Provident delectus, quidem rerum iste eligendi eius quod
                    aperiam nobis! Ad, fuga praesentium. Autem.
                  </span>
                </p>
              </div>
            </div>

            <div className=" shadow-sm rounded-xl bg-[#6b5949]  p-3">
              <div className="flex justify-between gap-2 items-center mb-2">
                <img
                  src="/luffy.jpg"
                  alt="image"
                  className="rounded-full h-8 w-8 object-cover "
                />
                <h2 className="font-semibold ">Anyanwu Daniel</h2>
              </div>

              <div className=" flex gap-3 flex-col  max-md:text-center p-3  h-full max-md:w-full  ">
                <h1 className="font-bold text-xl ">
                  Food Name: <span>Jellof Rice</span>
                </h1>
                <p className="text-sm max-md:text-xs ">
                  Recipe ingridients:
                  <span className="text-sm ">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Harum perferendis, rem est doloremque quasi ad consequuntur
                    voluptas distinctio quas facere suscipit rerum dicta ipsum
                    tempore dolor labore iure nemo dolorum?
                  </span>
                </p>
                <p className="text-sm max-md:text-xs ">
                  How to make it: <br />
                  <span className="text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ullam nemo inventore ut? Quos voluptatibus hic est impedit
                    excepturi id accusamus rem quasi fuga, nostrum dignissimos
                    minus dolores veniam aspernatur eius maxime similique,
                    sapiente voluptatum consequatur tenetur temporibus minima
                    fugiat dolorem. Tenetur quaerat nisi ea. Laudantium, nemo.
                    Provident delectus, quidem rerum iste eligendi eius quod
                    aperiam nobis! Ad, fuga praesentium. Autem.
                  </span>
                </p>
              </div>
            </div>

            <div className=" shadow-sm rounded-xl bg-[#6b5949]  p-3">
              <div className="flex justify-between gap-2 items-center mb-2">
                <img
                  src="/raining.jpg"
                  alt="image"
                  className="rounded-full h-8 w-8 object-cover "
                />
                <h2 className="font-semibold ">David Ogumodede</h2>
              </div>

              <div className=" flex gap-3 flex-col  max-md:text-center p-3  h-full max-md:w-full  ">
                <h1 className="font-bold text-xl ">
                  Food Name: <span>Ewedu Soup</span>
                </h1>
                <p className="text-sm max-md:text-xs ">
                  Recipe ingridients:
                  <span className="text-sm ">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Harum perferendis, rem est doloremque quasi ad consequuntur
                    voluptas distinctio quas facere suscipit rerum dicta ipsum
                    tempore dolor labore iure nemo dolorum?
                  </span>
                </p>
                <p className="text-sm max-md:text-xs ">
                  How to make it: <br />
                  <span className="text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ullam nemo inventore ut? Quos voluptatibus hic est impedit
                    excepturi id accusamus rem quasi fuga, nostrum dignissimos
                    minus dolores veniam aspernatur eius maxime similique,
                    sapiente voluptatum consequatur tenetur temporibus minima
                    fugiat dolorem. Tenetur quaerat nisi ea. Laudantium, nemo.
                    Provident delectus, quidem rerum iste eligendi eius quod
                    aperiam nobis! Ad, fuga praesentium. Autem.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Community Section */}
        <div className="px-5 py-5 w-full">
          <h1 className="mb-3 mt-3 text-[#6b5949] font-bold text-xl lg:text-3xl text-center px-3">
            What They've said
          </h1>

          <div className="p-4 w-full flex gap-6 max-lg:overflow-x-scroll justify-between items-center">
            {/* card below */}
            <div className="  rounded-sm shadow-md w-2xl lg:w-full  p-3 flex flex-col gap-3  ">
              <div className="flex justify-between items-center ">
                <div className="flex items-center gap-2">
                  <Image
                    src={"/black-guy-lap.jpg"}
                    alt="spices img"
                    height={800}
                    width={800}
                    className="h-8 w-8 rounded-full object-cover"
                  />
                  <h3 className="md:text-xl font-semibold">Ron Lee</h3>
                </div>

                <div className="flex text-[#D4AF37]">
                  <RiStarSFill />
                  <RiStarSFill />
                  <RiStarSFill />
                  <RiStarSFill />
                  <RiStarSFill />
                </div>
              </div>

              <p className="lg:w-xs  text-sm max-md:text-xs">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
                laudantium repellendus expedita repudiandae illum consequatur
                reprehenderit porro dignissimos numquam libero.
              </p>

              <p className="text-right text-xs opacity-70">10/3/2025</p>
            </div>

            {/* card below */}
            <div className=" rounded-sm shadow-md w-2xl lg:w-full  p-3 flex flex-col gap-3  ">
              <div className="flex justify-between items-center ">
                <div className="flex items-center gap-2">
                  <Image
                    src={"/pochi.jpeg"}
                    alt="spices img"
                    height={800}
                    width={800}
                    className="h-8 w-8 rounded-full object-cover"
                  />
                  <h3 className="md:text-xl font-semibold">Katie .P.</h3>
                </div>

                <div className="flex text-[#D4AF37]">
                  <RiStarSFill />
                  <RiStarSFill />
                  <RiStarSFill />
                  <RiStarSFill />
                  <RiStarSFill />
                </div>
              </div>

              <p className="lg:w-xs  text-sm max-md:text-xs">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
                laudantium repellendus expedita repudiandae illum consequatur
                reprehenderit porro dignissimos numquam libero.
              </p>

              <p className="text-right text-xs opacity-70">1/5/2025</p>
            </div>

            {/* card below */}
            <div className=" rounded-sm shadow-md w-2xl lg:w-full  p-3 flex flex-col gap-3  ">
              <div className="flex justify-between items-center ">
                <div className="flex items-center gap-2">
                  <Image
                    src={"/picture.jpg"}
                    alt="spices img"
                    height={800}
                    width={800}
                    className="h-8 w-8 rounded-full object-cover"
                  />
                  <h3 className="md:text-xl font-semibold">Monica Joy</h3>
                </div>

                <div className="flex text-[#D4AF37]">
                  <RiStarSFill />
                  <RiStarSFill />
                  <RiStarSFill />
                  <RiStarSFill />
                  <RiStarSFill />
                </div>
              </div>

              <p className="lg:w-xs  text-sm max-md:text-xs">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
                laudantium repellendus expedita repudiandae illum consequatur
                reprehenderit porro dignissimos numquam libero.
              </p>

              <p className="text-right text-xs opacity-70">8/12/2025</p>
            </div>

            {/* card below */}
            <div className=" lg:hidden rounded-sm shadow-md w-2xl lg:w-full  p-3 flex flex-col gap-3  ">
              <div className="flex justify-between items-center ">
                <div className="flex items-center gap-2">
                  <Image
                    src={"/luffy.jpg"}
                    alt="spices img"
                    height={800}
                    width={800}
                    className="h-8 w-8 rounded-full object-cover"
                  />
                  <h3 className="md:text-xl font-semibold">Ron Lee</h3>
                </div>

                <div className="flex text-[#D4AF37]">
                  <RiStarSFill />
                  <RiStarSFill />
                  <RiStarSFill />
                  <RiStarSFill />
                  <RiStarSFill />
                </div>
              </div>

              <p className="lg:w-xs  text-sm max-md:text-xs">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
                laudantium repellendus expedita repudiandae illum consequatur
                reprehenderit porro dignissimos numquam libero.
              </p>

              <p className="text-right text-xs opacity-70">10/3/2025</p>
            </div>

            {/* card below */}
            <div className=" lg:hidden rounded-sm shadow-md w-2xl lg:w-full  p-3 flex flex-col gap-3  ">
              <div className="flex justify-between items-center ">
                <div className="flex items-center gap-2">
                  <Image
                    src={"/recipe2.jpg"}
                    alt="spices img"
                    height={800}
                    width={800}
                    className="h-8 w-8 rounded-full object-cover"
                  />
                  <h3 className="md:text-xl font-semibold">Ron Lee</h3>
                </div>

                <div className="flex text-[#D4AF37]">
                  <RiStarSFill />
                  <RiStarSFill />
                  <RiStarSFill />
                  <RiStarSFill />
                  <RiStarSFill />
                </div>
              </div>

              <p className="lg:w-xs  text-sm max-md:text-xs">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
                laudantium repellendus expedita repudiandae illum consequatur
                reprehenderit porro dignissimos numquam libero.
              </p>

              <p className="text-right text-xs opacity-70">10/3/2025</p>
            </div>

            {/* card below */}
            <div className=" lg:hidden rounded-sm shadow-md w-2xl lg:w-full  p-3 flex flex-col gap-3  ">
              <div className="flex justify-between items-center ">
                <div className="flex items-center gap-2">
                  <Image
                    src={"/recipe2.jpg"}
                    alt="spices img"
                    height={800}
                    width={800}
                    className="h-8 w-8 rounded-full object-cover"
                  />
                  <h3 className="md:text-xl font-semibold">Ron Lee</h3>
                </div>

                <div className="flex text-[#D4AF37]">
                  <RiStarSFill />
                  <RiStarSFill />
                  <RiStarSFill />
                  <RiStarSFill />
                  <RiStarSFill />
                </div>
              </div>

              <p className="lg:w-xs  text-sm max-md:text-xs">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
                laudantium repellendus expedita repudiandae illum consequatur
                reprehenderit porro dignissimos numquam libero.
              </p>

              <p className="text-right text-xs opacity-70">10/3/2025</p>
            </div>
          </div>
        </div>
      </div>
      {/* CTA Banner */}
      <div className="bg-black/80 lg:h-[20rem] w-full flex flex-col justify-center lg:space-y-4 items-center p-6  ">
        <h2 className="lg:text-5xl md:text-2xl lg:leading-13 text-xl font-bold text-center text-white">
          Join our growing community <br /> of food lovers today!
        </h2>
        <Link href={"/auth/signin"} className="flex justify-end text-right ">
          <button className=" px-4 lg:px-10 md:text-xl animate-pulse rounded-lg  text-sm bg-[#56473A] hover:text-white hover:bg-[#6b5949] transition-all duration-300 shadow-[0_0_5px_#00000094] py-2 w-fit  ">
            Sign Up
          </button>
        </Link>
      </div>
    </main>
  );
}
