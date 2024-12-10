"use client";
import { Footer } from "@/components/component/footer";
import { Main } from "@/components/component/main";
import { Navbar } from "@/components/component/navbar";
import React, { useEffect, useState } from "react";

function page() {
  return (
    <div>
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}

export default page;