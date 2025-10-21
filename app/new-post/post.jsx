"use client"
import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik";
 import * as Yup from "yup";
import { Box, Modal, Typography } from '@mui/material';
import styled from '@emotion/styled';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '@/config/firebaseconfig';

 // npm install formik
// npm install yup
// yup is used to validate a form


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #D3D3D3",
  boxShadow: 24,
  p: 4,
};

const NewPost = ({session}) => {
      const [open, setOpen] = useState(false);
     const handleOpen = () => setOpen(true);
     const handleClose = () => setOpen(false);

        const [processing, setProcessing] = useState(false);

    const iv = {
      foodname: "",
     recipe: "",
     steps: "",
    };
    const formValidation = Yup.object({
      foodname: Yup.string().required("Input a recipe name"),
      recipe: Yup.string().required("This is a required field").min(15, "Minimum of 15 characters required"),
    });

    const handleSubmit = async (values,  { resetForm }) => {
            try {
              setProcessing(true);
              const recipeDetails = {
                author: session.user.name,
                img: session.user.image,
                timestamp: new Date().toLocaleDateString(),
                authorId: session?.user?.id,
                ...values,
              };
              console.log(recipeDetails);
              const docRef = await addDoc(
                collection(db, "mealmates"),
                recipeDetails
              );
              console.log("Document written with ID: ", docRef.id);
              resetForm();
              handleOpen();
            } catch (error) {
              console.error("Error adding document", error);
              alert("Oops, an error occurred. Try again later!");
            } finally {
              setProcessing(false);
            }



      console.log(values);
    };










  return (
    <main className="flex justify-center max-md:text-xs max-md:text-gray-9000 md:items-center min-h-dvh  ">
      <div className="text-black max-md:px-3 max-md:mt-20  ">
        <h1 className="font-extrabold text-[#56473A] text-center text-lg md:pb-10 pb-5 md:text-2xl">
          Save Tastebuds with Delicious Recipes
        </h1>

        <div className="">
          <Formik
            initialValues={iv}
            validationSchema={formValidation}
            onSubmit={handleSubmit}
          >
            <Form className="space-y-5">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor=""
                  className="text-sm max-md:text-xs max-md:text-gray-900 text-gray-800"
                >
                  Recipe Name
                </label>
                <Field
                  name="foodname"
                  className="outline-none border rounded-md border-gray-200 p-2"
                />
                {/* there will be no popups for formik elements */}
                <ErrorMessage
                  name="foodname"
                  component={"p"}
                  className="text-xs text-red-600"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor=""
                  className="text-sm max-md:text-xs max-md:text-gray-900 text-gray-800"
                >
                  Share Your Recipe Content
                </label>
                <Field
                  as="textarea"
                  name="recipe"
                  className="outline-none border rounded-md border-gray-200 p-2"
                />
                <ErrorMessage
                  name="recipe"
                  component={"p"}
                  className="text-xs text-red-600"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor=""
                  className="text-sm max-md:text-xs max-md:text-gray-900 text-gray-800"
                >
                  How to Prep
                </label>
                <Field
                  as="textarea"
                  name="steps"
                  className="outline-none border rounded-md border-gray-200 p-2"
                />
                <ErrorMessage
                  name="steps"
                  component={"p"}
                  className="text-xs text-red-600"
                />
              </div>
             

              <button
                type="submit"
                className="bg-[#56473A] text-white w-full rounded-md p-2 hover:hover:bg-[#6b5949]  transition-all duration-200"
              >
                Add your Recipe
              </button>
            </Form>
          </Formik>
        </div>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography className='text-black' id="modal-modal-title" variant="h6" component="h2">
            Recipe Added Sucessfully
          </Typography>
          <Typography className='text-black' id="modal-modal-description" sx={{ mt: 2 }}>
            You just made food a thing to look foward to
          </Typography>
        </Box>
      </Modal>
    </main>
  );
}

export default NewPost































{/* import { db } from "@/config/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

export const fetchSinglePoem = async ()=>{
    if (!id){
        return null;
    }
    const docRef = doc(db, "verses", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exist()){
        console.log("Document data:", docSnap.data());
    }else{
        // docSnap.data() will be undefines in this case
        console.log("No such of documents!");
    }

    export default async function exploreDynamic ({params}){
        const poem = await fetchSinglePoem(params.id)
        console.log(poem)
        return(
            <main className="min-h-dvh">
                Hello
            </main>
        )
    } */}