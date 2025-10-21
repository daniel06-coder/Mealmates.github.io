"use server";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import React from "react";

const page = async () => {
  const session = await auth();

  if (!session) {
    redirect("/auth/signin");
  }

  return <main className="min-h-dvh">my profile</main>;
};

export default page;
