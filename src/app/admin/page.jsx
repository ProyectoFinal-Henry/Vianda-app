"use client";

import React from "react";
import { FiAward } from "react-icons/fi";

const page = () => {
  return (
    <>
      <div
        className="w-full min-h-screen hidden md:block   bg-contain bg-no-repeat overflow-scroll"
        style={{ backgroundImage: 'url("/demoToDelete/adminD.png")' }}
      >
        <div className="min-h-[1900px]"></div>
      </div>
      <div
        className="w-full min-h-[85vh]  md:hidden  bg-contain  bg-center bg-no-repeat overflow-scroll"
        style={{ backgroundImage: 'url("/demoToDelete/adminM.png")' }}
      >
        <div className="min-h-[1900px]"></div>
      </div>

      <div className="flex flex-col justify-center min-h-[90vh]">
      </div>
    </>
  );
};

export default page;
