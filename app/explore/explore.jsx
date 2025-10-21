'use client'
import React, { useEffect, useState } from 'react'
import { db } from '@/config/firebaseconfig'
import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore'
import { FaRegTrashAlt } from "react-icons/fa"
import Link from 'next/link'

const Explore = ({session}) => {

    const [recipeName, setRecipeName] = useState([])

    useEffect(() => {
        const fetchRecipes = async () => {
        const getRecipes = await getDocs(collection(db, "mealmates"));
            setRecipeName(getRecipes.docs.map((doc) => ({id: doc.id, ...doc.data()})))
        };
        fetchRecipes();
    }, [])

    const deletePost = async (id) => {
        await deleteDoc(doc(db, "mealmates", id));
        setRecipeName(recipeName.filter((p) => p.id !== id));
    }

  return (
    <section className="text-black grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1  gap-3 p-4 ">
      {/* not sure about this(foodname) below */}
      {recipeName.map((food) => (
        <div key={food.id} className="flex gap-3 ">
          <div className=" p-3 gap-3 bg-white  shadow-xl flex  flex-col gap-3 w-xl max-md:w-[18rem] rounded-xl">
            <div className="flex justify-between">
              <div className="flex gap-2 items-center">
                <img
                  src={food.img}
                  alt={`${food.author} profile pic`}
                  className="rounded-full h-8 w-8 "
                />
                {food.author}
              </div>
              {food.authorId === session.user.id && (
                <button onClick={() => deletePost(food.id)}>
                  <FaRegTrashAlt />
                </button>
              )}
            </div>

            <div className=" relative flex gap-3 flex-col  max-md:text-center h-20 max-md:w-full overflow-hidden ">
              <h2 className="font-bold text-2xl max-lg:text-xl max-md:text-sm">{`Recipe Name: ${food.foodname}`}</h2>
            <p className='text-sm max-md:text-xs text-black/50' > {`Recipe Ingridients: ${food.recipe}`} </p>
            <p> <span>How to make it</span> <br /> {food.steps}</p>
          <Link  href={`/explore/${food.id}`} className='absolute right-0 bottom-0' >
              <p className='text-sm font-bold text-purple-700'>see more ....</p>
          </Link>
            </div>  
          </div>

        </div>
      ))}
    </section>
  );
}

export default Explore
