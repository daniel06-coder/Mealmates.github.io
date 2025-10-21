"use server";
import { auth } from '@/auth';
import React from 'react'
import NewPost from './post';
import { redirect } from 'next/navigation';

const page = async () => {
   const session = await auth()
  if (!session) {
    redirect("/auth/signin");
  }
  return (
    <main className="">
      <NewPost session={session} />
    </main>
  );
}

export default page


















































// "use server";
// import { redirect } from "next/dist/server/api-utils";
// import React from "react";
// import NewPostForm from "./post";
// import { auth } from "@/auth";

// const page = async () => {
//   const session = await auth();
//   if (!session) {
//     redirect("/auth/signin");
//   }
//   return (
//     <main>
//       <NewPostForm session={session} />
//     </main>
//   );
// };

// export default page;
