"use server";

import { redirect } from "next/navigation";

export async function redirectAction() {
  console.log("redirecting...");
  redirect("/redirected");
}
