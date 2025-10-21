"use client"
import { db } from "@/config/firebaseconfig";
import { doc, getDoc } from "firebase/firestore";
import Link from "next/link";
import { useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { MdOutlineLightMode } from "react-icons/md";
import { CgDarkMode } from "react-icons/cg";
// import { MdOutlineDarkMode } from "react-icons/md";

export const fetchSingleDish = async (id) => {
  if (!id) {
    return null;
  }
  const docRef = doc(db, "mealmates", id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
   return { id: docSnap.id, ...docSnap.data() };
  } else {
    // docSnap.data() will be undefines in this case
    console.log("No such of documents!");
    return null
  }
};

export default async function exploreDynamic({ params }) {
  const [bgColor, setBgColor] = useState(false);

  const food = await fetchSingleDish(params.id);
  console.log(food);
  

  return (
    <main className="min-h-dvh text-black md:w-4xl mx-auto p-3 md:p-6 shadow-sm md:space-y-5">
      <div className="flex justify-between items-center ">
        <Link href={"/explore"}>
          <button className=" p-2 text-xl rounded-full mb-5 hover:bg-gray-300 transition-all duration-200">
            FaArrowLeftLong
            <button onClick={() => setBgColor(!bgColor)}>
              {!bgColor ? <CgDarkMode /> : <MdOutlineLightMode />}
            </button>
          </button>
        </Link>
      </div>
      <div className="flex items-center gap-3">
        <img
          src={food.img}
          alt={food.author.slice(0, 1).toUpperCase()}
          className="w-8 h-8 rounded-full"
        />
        <h1>{food.author}</h1>
      </div>
      <div className="gap-2 flex flex-col ">
        <h1 className="my-5 font-semibold text-2xl text-gray-800 uppercase">
          Recipe Name{food.foodname}
        </h1>
        <p className="leading-8 text-xs text-gray-300">
          {" "}
          <span className="text-extrabold uppercase  ">Ingridients</span>{" "}
          {food.recipe}
        </p>
        <p className="leading-8">
          {" "}
          <span className="text-extrabold uppercase">Steps</span> {food.steps}
        </p>
      </div>
      {/* what you seee is what you get editor */}
      <p>{food.timestamp}</p>
    </main>
  );
}
