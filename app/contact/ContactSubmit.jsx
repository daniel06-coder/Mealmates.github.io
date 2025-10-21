import { Formik, Form, Field, ErrorMessage } from 'formik'
import React from 'react'
import * as Yup from "yup";
import { FiSmartphone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { TiLocationOutline } from "react-icons/ti";
import { FaWhatsapp } from "react-icons/fa";
import Link from 'next/link';




const ContactSubmit = () => {
    const iv = {
      fullName: "",
     emailAddress: "",
     fieldText: "",
    };
    const formValidation = Yup.object({
      fullName: Yup.string().required("Input a name"),
      emailAddress: Yup.string().required("This is a required field").min("Minimum of 15 characters required"),
      fieldText: Yup.string().required("This is A required field").min("Minimum of 15 characters required"),
    });

       const handleSubmit = async (values) => {
      console.log(values);
    };

  return (
    <main className="text-[#56473A] max-lg:grid-cols-1 max-md:flex max-md:flex-col-reverse max-lg:mt-3   grid grid-cols-2">
      <div className=" max-md:my-4 flex justify-center md:justify-between max-md:flex-col max-md:items-center max-md:w-dvw md:p-18 max-md:gap-4">
        <div className="flex flex-col gap-5">
          <div className="shadow-[0px_0px_7px_#0a0a0a2f] rounded-xl overflow-hidden px-3 py-5 flex flex-col w-[13rem]  items-center gap-7 h-[12rem]">
            <TiLocationOutline className="text-3xl" />
            <div className="flex gap-3 flex-col items-center justify-center">
              <h3 className="text-lg font-bold">OUR MAIN OFFICE</h3>
              <p className="text-xs font-semibold">
                Early Code institute Kubwa, Abuja
              </p>
            </div>
          </div>

          <div className="shadow-[0px_0px_7px_#0a0a0a2f] rounded-xl overflow-hidden px-3 py-5 flex flex-col w-[13rem]  items-center gap-7 h-[12rem]">
            <FiSmartphone className="text-3xl" />
            <div className="flex gap-3 flex-col items-center justify-center">
              <h3 className="text-lg font-bold">PHONE NUMBER</h3>
              <p className="text-xs font-semibold">+2348055949385</p>
            </div>
          </div>
        </div>

        <div className=" flex flex-col gap-5">
          <div className="shadow-[0px_0px_7px_#0a0a0a2f] rounded-xl overflow-hidden px-3 py-5 flex flex-col  items-center gap-7 h-[12rem] w-[13rem] ">
            <MdOutlineEmail className="text-3xl" />
            <div className="flex gap-3 flex-col items-center justify-center">
              <h3 className="text-lg font-bold">E-MAIL ADDRESS</h3>
              <p className="text-xs font-semibold">purimina22@gmail.com</p>
            </div>
          </div>

          <Link href={"#"} className="pointer ">
            <div className="shadow-[0px_0px_7px_#0a0a0a2f] rounded-xl overflow-hidden px-3 bg-white active:bg-[#56473A] duration-300 transition-all active:text-white py-5 flex flex-col  items-center gap-7 h-[12rem] w-[13rem]  ">
              <FaWhatsapp className="text-3xl" />
              <div className="flex gap-3 flex-col items-center justify-center">
                <h3 className="text-lg font-bold">WhatsApp</h3>
                <p className="text-xs font-semibold">
                  Start your chat with us today
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>

      <div className="flex flex-col justify-center max-lg:mb-10 md:px-20 px-5 ">
        <h2 className='text-2xl font-bold mb-3'>Contact Us</h2>
        <p className='md:hidden text-sm font-bold mb-3'>You can send contact us by sending a message you can also contact us via the whatsapp option below</p>

        <div>
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
                  Full Name
                </label>
                <Field
                  name="fullName"
                  className="outline-none border rounded-md border-gray-200 p-2"
                />
                {/* there will be no popups for formik elements */}
                <ErrorMessage
                  name="fullName"
                  component={"p"}
                  className="text-xs text-red-600"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor=""
                  className="text-sm max-md:text-xs max-md:text-gray-900 text-gray-800"
                >
                  E-mail
                </label>
                <Field
                  name="emailAddress"
                  className="outline-none border rounded-md border-gray-200 p-2"
                />
                {/* there will be no popups for formik elements */}
                <ErrorMessage
                  name="emailAddress"
                  component={"p"}
                  className="text-xs text-red-600"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor=""
                  className="text-sm max-md:text-xs max-md:text-gray-900 text-gray-800"
                >
                  Message
                </label>
                <Field
                  as="textarea"
                  name="fieldText"
                  className="outline-none border rounded-md border-gray-200 p-2"
                />
                <ErrorMessage
                  name="fieldText"
                  component={"p"}
                  className="text-xs text-red-600"
                />
              </div>

              <button
                type="submit"
                className="bg-[#56473A] text-white w-full rounded-md p-2 hover:hover:bg-[#6b5949]  transition-all duration-200"
              >
                SUBMIT
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </main>
  );
}

export default ContactSubmit
